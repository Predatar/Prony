"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[9365],{2448:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a={clientbutton:"pR0EX9qWzIKMk3o0ashd",clientbutton_primary:"qsSoSuiD9FLzYyJWSCxD",clientbutton_warning:"ZjWB55mDFSYEjyIOeRiE"},o=e=>{let{icon:t,text:r,width:o,onClick:i,theme:u,background:c,type:l}=e;return n.createElement("button",{className:"pR0EX9qWzIKMk3o0ashd "+a[u],style:{"--width":`${o}px`,background:c},onClick:i,type:l},t&&t," ",r)}},4552:function(e,t,r){var n=r(7294),a=r(3727);t.Z=e=>{let{to:t,text:r}=e;return n.createElement(a.rU,{to:t,className:"client-cancel-link"},r)}},9161:function(e,t,r){var n=r(7294);t.Z=e=>{let{placeholder:t,width:r=370,type:a,name:o,onBlur:i,onChange:u,value:c,errors:l}=e;return n.createElement("input",{type:a,name:o,className:`${l?"input-client _error":"input-client"}`,style:{width:r},placeholder:t,onBlur:i,onChange:u,value:c})}},6148:function(e,t,r){var n=r(7294);t.Z=e=>{let{text:t}=e;return n.createElement("div",{className:"client-title"},t)}},9365:function(e,t,r){r.r(t),r.d(t,{default:function(){return rb}});var n,a,o,i=r(7294),u=r(6148),c=r(2448),l=r(4552),s=r(2685),f=r(9161),p=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==d},d="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function v(e,t){return!1!==t.clone&&t.isMergeableObject(e)?h(Array.isArray(e)?[]:{},e,t):e}function y(e,t,r){return e.concat(t).map(function(e){return v(e,r)})}function h(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||y,r.isMergeableObject=r.isMergeableObject||p;var n,a,o=Array.isArray(t);return o!==Array.isArray(e)?v(t,r):o?r.arrayMerge(e,t,r):(a={},(n=r).isMergeableObject(e)&&Object.keys(e).forEach(function(t){a[t]=v(e[t],n)}),Object.keys(t).forEach(function(r){n.isMergeableObject(t[r])&&e[r]?a[r]=h(e[r],t[r],n):a[r]=v(t[r],n)}),a)}h.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,r){return h(e,r,t)},{})};var b=h,m="object"==typeof global&&global&&global.Object===Object&&global,_="object"==typeof self&&self&&self.Object===Object&&self,E=m||_||Function("return this")(),g=E.Symbol,j=Object.prototype,S=j.hasOwnProperty,O=j.toString,A=g?g.toStringTag:void 0,w=function(e){var t=S.call(e,A),r=e[A];try{e[A]=void 0;var n=!0}catch(e){}var a=O.call(e);return n&&(t?e[A]=r:delete e[A]),a},T=Object.prototype.toString,k=g?g.toStringTag:void 0,I=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?w(e):T.call(e)},R=function(e,t){return function(r){return e(t(r))}},F=R(Object.getPrototypeOf,Object),C=function(e){return null!=e&&"object"==typeof e},P=Object.prototype,N=Function.prototype.toString,M=P.hasOwnProperty,x=N.call(Object),D=function(e){if(!C(e)||"[object Object]"!=I(e))return!1;var t=F(e);if(null===t)return!0;var r=M.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&N.call(r)==x},U=r(667),L=r.n(U),V=r(5298),B=function(e,t){return e===t||e!=e&&t!=t},z=function(e,t){for(var r=e.length;r--;)if(B(e[r][0],t))return r;return -1},W=Array.prototype.splice;function $(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$.prototype.clear=function(){this.__data__=[],this.size=0},$.prototype.delete=function(e){var t=this.__data__,r=z(t,e);return!(r<0)&&(r==t.length-1?t.pop():W.call(t,r,1),--this.size,!0)},$.prototype.get=function(e){var t=this.__data__,r=z(t,e);return r<0?void 0:t[r][1]},$.prototype.has=function(e){return z(this.__data__,e)>-1},$.prototype.set=function(e,t){var r=this.__data__,n=z(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};var Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},G=function(e){if(!Z(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},H=E["__core-js_shared__"],q=(n=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",K=Function.prototype.toString,Y=function(e){if(null!=e){try{return K.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,J=Object.prototype,Q=Function.prototype.toString,ee=J.hasOwnProperty,et=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),er=function(e,t){var r,n=null==e?void 0:e[t];return Z(r=n)&&(!q||!(q in r))&&(G(r)?et:X).test(Y(r))?n:void 0},en=er(E,"Map"),ea=er(Object,"create"),eo=Object.prototype.hasOwnProperty,ei=Object.prototype.hasOwnProperty;function eu(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}eu.prototype.clear=function(){this.__data__=ea?ea(null):{},this.size=0},eu.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},eu.prototype.get=function(e){var t=this.__data__;if(ea){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return eo.call(t,e)?t[e]:void 0},eu.prototype.has=function(e){var t=this.__data__;return ea?void 0!==t[e]:ei.call(t,e)},eu.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ea&&void 0===t?"__lodash_hash_undefined__":t,this};var ec=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},el=function(e,t){var r=e.__data__;return ec(t)?r["string"==typeof t?"string":"hash"]:r.map};function es(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ef(e){var t=this.__data__=new $(e);this.size=t.size}es.prototype.clear=function(){this.size=0,this.__data__={hash:new eu,map:new(en||$),string:new eu}},es.prototype.delete=function(e){var t=el(this,e).delete(e);return this.size-=t?1:0,t},es.prototype.get=function(e){return el(this,e).get(e)},es.prototype.has=function(e){return el(this,e).has(e)},es.prototype.set=function(e,t){var r=el(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},ef.prototype.clear=function(){this.__data__=new $,this.size=0},ef.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},ef.prototype.get=function(e){return this.__data__.get(e)},ef.prototype.has=function(e){return this.__data__.has(e)},ef.prototype.set=function(e,t){var r=this.__data__;if(r instanceof $){var n=r.__data__;if(!en||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new es(n)}return r.set(e,t),this.size=r.size,this};var ep=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},ed=function(){try{var e=er(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),ev=function(e,t,r){"__proto__"==t&&ed?ed(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},ey=Object.prototype.hasOwnProperty,eh=function(e,t,r){var n=e[t];ey.call(e,t)&&B(n,r)&&(void 0!==r||t in e)||ev(e,t,r)},eb=function(e,t,r,n){var a=!r;r||(r={});for(var o=-1,i=t.length;++o<i;){var u=t[o],c=n?n(r[u],e[u],u,r,e):void 0;void 0===c&&(c=e[u]),a?ev(r,u,c):eh(r,u,c)}return r},em=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},e_=function(e){return C(e)&&"[object Arguments]"==I(e)},eE=Object.prototype,eg=eE.hasOwnProperty,ej=eE.propertyIsEnumerable,eS=e_(function(){return arguments}())?e_:function(e){return C(e)&&eg.call(e,"callee")&&!ej.call(e,"callee")},eO=Array.isArray,eA="object"==typeof exports&&exports&&!exports.nodeType&&exports,ew=eA&&"object"==typeof module&&module&&!module.nodeType&&module,eT=ew&&ew.exports===eA?E.Buffer:void 0,ek=(eT?eT.isBuffer:void 0)||function(){return!1},eI=/^(?:0|[1-9]\d*)$/,eR=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&eI.test(e))&&e>-1&&e%1==0&&e<t},eF=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},eC={};eC["[object Float32Array]"]=eC["[object Float64Array]"]=eC["[object Int8Array]"]=eC["[object Int16Array]"]=eC["[object Int32Array]"]=eC["[object Uint8Array]"]=eC["[object Uint8ClampedArray]"]=eC["[object Uint16Array]"]=eC["[object Uint32Array]"]=!0,eC["[object Arguments]"]=eC["[object Array]"]=eC["[object ArrayBuffer]"]=eC["[object Boolean]"]=eC["[object DataView]"]=eC["[object Date]"]=eC["[object Error]"]=eC["[object Function]"]=eC["[object Map]"]=eC["[object Number]"]=eC["[object Object]"]=eC["[object RegExp]"]=eC["[object Set]"]=eC["[object String]"]=eC["[object WeakMap]"]=!1;var eP=function(e){return function(t){return e(t)}},eN="object"==typeof exports&&exports&&!exports.nodeType&&exports,eM=eN&&"object"==typeof module&&module&&!module.nodeType&&module,ex=eM&&eM.exports===eN&&m.process,eD=function(){try{var e=eM&&eM.require&&eM.require("util").types;if(e)return e;return ex&&ex.binding&&ex.binding("util")}catch(e){}}(),eU=eD&&eD.isTypedArray,eL=eU?eP(eU):function(e){return C(e)&&eF(e.length)&&!!eC[I(e)]},eV=Object.prototype.hasOwnProperty,eB=function(e,t){var r=eO(e),n=!r&&eS(e),a=!r&&!n&&ek(e),o=!r&&!n&&!a&&eL(e),i=r||n||a||o,u=i?em(e.length,String):[],c=u.length;for(var l in e)(t||eV.call(e,l))&&!(i&&("length"==l||a&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||eR(l,c)))&&u.push(l);return u},ez=Object.prototype,eW=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ez)},e$=R(Object.keys,Object),eZ=Object.prototype.hasOwnProperty,eG=function(e){if(!eW(e))return e$(e);var t=[];for(var r in Object(e))eZ.call(e,r)&&"constructor"!=r&&t.push(r);return t},eH=function(e){return null!=e&&eF(e.length)&&!G(e)},eq=function(e){return eH(e)?eB(e):eG(e)},eK=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t},eY=Object.prototype.hasOwnProperty,eX=function(e){if(!Z(e))return eK(e);var t=eW(e),r=[];for(var n in e)"constructor"==n&&(t||!eY.call(e,n))||r.push(n);return r},eJ=function(e){return eH(e)?eB(e,!0):eX(e)},eQ="object"==typeof exports&&exports&&!exports.nodeType&&exports,e0=eQ&&"object"==typeof module&&module&&!module.nodeType&&module,e1=e0&&e0.exports===eQ?E.Buffer:void 0,e2=e1?e1.allocUnsafe:void 0,e9=function(e,t){if(t)return e.slice();var r=e.length,n=e2?e2(r):new e.constructor(r);return e.copy(n),n},e6=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t},e4=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,o=[];++r<n;){var i=e[r];t(i,r,e)&&(o[a++]=i)}return o},e8=function(){return[]},e3=Object.prototype.propertyIsEnumerable,e5=Object.getOwnPropertySymbols,e7=e5?function(e){return null==e?[]:e4(e5(e=Object(e)),function(t){return e3.call(e,t)})}:e8,te=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},tt=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)te(t,e7(e)),e=F(e);return t}:e8,tr=function(e,t,r){var n=t(e);return eO(e)?n:te(n,r(e))},tn=function(e){return tr(e,eq,e7)},ta=function(e){return tr(e,eJ,tt)},to=er(E,"DataView"),ti=er(E,"Promise"),tu=er(E,"Set"),tc=er(E,"WeakMap"),tl="[object Map]",ts="[object Promise]",tf="[object Set]",tp="[object WeakMap]",td="[object DataView]",tv=Y(to),ty=Y(en),th=Y(ti),tb=Y(tu),tm=Y(tc),t_=I;(to&&t_(new to(new ArrayBuffer(1)))!=td||en&&t_(new en)!=tl||ti&&t_(ti.resolve())!=ts||tu&&t_(new tu)!=tf||tc&&t_(new tc)!=tp)&&(t_=function(e){var t=I(e),r="[object Object]"==t?e.constructor:void 0,n=r?Y(r):"";if(n)switch(n){case tv:return td;case ty:return tl;case th:return ts;case tb:return tf;case tm:return tp}return t});var tE=t_,tg=Object.prototype.hasOwnProperty,tj=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&tg.call(e,"index")&&(r.index=e.index,r.input=e.input),r},tS=E.Uint8Array,tO=function(e){var t=new e.constructor(e.byteLength);return new tS(t).set(new tS(e)),t},tA=function(e,t){var r=t?tO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)},tw=/\w*$/,tT=function(e){var t=new e.constructor(e.source,tw.exec(e));return t.lastIndex=e.lastIndex,t},tk=g?g.prototype:void 0,tI=tk?tk.valueOf:void 0,tR=function(e,t){var r=t?tO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)},tF=function(e,t,r){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return tO(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return tA(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return tR(e,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return tT(e);case"[object Symbol]":return tI?Object(tI.call(e)):{}}},tC=Object.create,tP=function(){function e(){}return function(t){if(!Z(t))return{};if(tC)return tC(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),tN=eD&&eD.isMap,tM=tN?eP(tN):function(e){return C(e)&&"[object Map]"==tE(e)},tx=eD&&eD.isSet,tD=tx?eP(tx):function(e){return C(e)&&"[object Set]"==tE(e)},tU="[object Arguments]",tL="[object Function]",tV="[object Object]",tB={};tB[tU]=tB["[object Array]"]=tB["[object ArrayBuffer]"]=tB["[object DataView]"]=tB["[object Boolean]"]=tB["[object Date]"]=tB["[object Float32Array]"]=tB["[object Float64Array]"]=tB["[object Int8Array]"]=tB["[object Int16Array]"]=tB["[object Int32Array]"]=tB["[object Map]"]=tB["[object Number]"]=tB[tV]=tB["[object RegExp]"]=tB["[object Set]"]=tB["[object String]"]=tB["[object Symbol]"]=tB["[object Uint8Array]"]=tB["[object Uint8ClampedArray]"]=tB["[object Uint16Array]"]=tB["[object Uint32Array]"]=!0,tB["[object Error]"]=tB[tL]=tB["[object WeakMap]"]=!1;var tz=function e(t,r,n,a,o,i){var u,c=1&r,l=2&r,s=4&r;if(n&&(u=o?n(t,a,o,i):n(t)),void 0!==u)return u;if(!Z(t))return t;var f=eO(t);if(f){if(u=tj(t),!c)return e6(t,u)}else{var p,d,v,y,h=tE(t),b=h==tL||"[object GeneratorFunction]"==h;if(ek(t))return e9(t,c);if(h==tV||h==tU||b&&!o){if(u=l||b?{}:"function"!=typeof t.constructor||eW(t)?{}:tP(F(t)),!c)return l?(d=(p=u)&&eb(t,eJ(t),p),eb(t,tt(t),d)):(y=(v=u)&&eb(t,eq(t),v),eb(t,e7(t),y))}else{if(!tB[h])return o?t:{};u=tF(t,h,c)}}i||(i=new ef);var m=i.get(t);if(m)return m;i.set(t,u),tD(t)?t.forEach(function(a){u.add(e(a,r,n,a,t,i))}):tM(t)&&t.forEach(function(a,o){u.set(o,e(a,r,n,o,t,i))});var _=s?l?ta:tn:l?eJ:eq,E=f?void 0:_(t);return ep(E||t,function(a,o){E&&(a=t[o=a]),eh(u,o,e(a,r,n,o,t,i))}),u},tW=function(e){return tz(e,4)},t$=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},tZ=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==I(e)};function tG(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(tG.Cache||es),r}tG.Cache=es;var tH=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tq=/\\(\\)?/g,tK=(o=(a=tG(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tH,function(e,r,n,a){t.push(n?a.replace(tq,"$1"):r||e)}),t},function(e){return 500===o.size&&o.clear(),e})).cache,a),tY=1/0,tX=function(e){if("string"==typeof e||tZ(e))return e;var t=e+"";return"0"==t&&1/e==-tY?"-0":t},tJ=1/0,tQ=g?g.prototype:void 0,t0=tQ?tQ.toString:void 0,t1=function e(t){if("string"==typeof t)return t;if(eO(t))return t$(t,e)+"";if(tZ(t))return t0?t0.call(t):"";var r=t+"";return"0"==r&&1/t==-tJ?"-0":r},t2=function(e){return eO(e)?t$(e,tX):tZ(e)?[e]:e6(tK(null==e?"":t1(e)))};function t9(){return(t9=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function t6(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function t4(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r(8679);var t8=(0,i.createContext)(void 0);t8.displayName="FormikContext",t8.Provider,t8.Consumer;var t3=function(e){return Array.isArray(e)&&0===e.length},t5=function(e){return"function"==typeof e},t7=function(e){return null!==e&&"object"==typeof e},re=function(e){return"[object String]"===Object.prototype.toString.call(e)},rt=function(e){return t7(e)&&t5(e.then)};function rr(e,t,r,n){void 0===n&&(n=0);for(var a=t2(t);e&&n<a.length;)e=e[a[n++]];return n===a.length||e?void 0===e?r:e:r}function rn(e,t,r){for(var n=tW(e),a=n,o=0,i=t2(t);o<i.length-1;o++){var u=i[o],c=rr(e,i.slice(0,o+1));if(c&&(t7(c)||Array.isArray(c)))a=a[u]=tW(c);else{var l=i[o+1];a=a[u]=String(Math.floor(Number(l)))===l&&Number(l)>=0?[]:{}}}return(0===o?e:a)[i[o]]===r?e:(void 0===r?delete a[i[o]]:a[i[o]]=r,0===o&&void 0===r&&delete n[i[o]],n)}var ra={},ro={};function ri(e,t,r){var n=e.slice();return t.forEach(function(t,a){if(void 0===n[a]){var o=!1!==r.clone&&r.isMergeableObject(t);n[a]=o?b(Array.isArray(t)?[]:{},t,r):t}else r.isMergeableObject(t)?n[a]=b(e[a],t,r):-1===e.indexOf(t)&&n.push(t)}),n}var ru="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect;function rc(e){var t=(0,i.useRef)(e);return ru(function(){t.current=e}),(0,i.useCallback)(function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.apply(void 0,r)},[])}(0,i.forwardRef)(function(e,t){var r,n=e.action,a=t6(e,["action"]),o=((r=(0,i.useContext)(t8))||(0,V.default)(!1),r),u=o.handleReset,c=o.handleSubmit;return(0,i.createElement)("form",t9({onSubmit:c,ref:t,onReset:u,action:null!=n?n:"#"},a))}).displayName="Form";var rl=function(e,t,r){var n=rd(e),a=n[t];return n.splice(t,1),n.splice(r,0,a),n},rs=function(e,t,r){var n=rd(e),a=n[t];return n[t]=n[r],n[r]=a,n},rf=function(e,t,r){var n=rd(e);return n.splice(t,0,r),n},rp=function(e,t,r){var n=rd(e);return n[t]=r,n},rd=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(t9({},e,{length:t+1}))},rv=function(e,t){var r="function"==typeof e?e:t;return function(e){return Array.isArray(e)||t7(e)?r(rd(e)):e}};(function(e){function t(t){var r;return(r=e.call(this,t)||this).updateArrayField=function(e,t,n){var a=r.props,o=a.name;(0,a.formik.setFormikState)(function(r){var a=rv(n,e),i=rv(t,e),u=rn(r.values,o,e(rr(r.values,o))),c=n?a(rr(r.errors,o)):void 0,l=t?i(rr(r.touched,o)):void 0;return t3(c)&&(c=void 0),t3(l)&&(l=void 0),t9({},r,{values:u,errors:n?rn(r.errors,o,c):r.errors,touched:t?rn(r.touched,o,l):r.touched})})},r.push=function(e){return r.updateArrayField(function(t){return[].concat(rd(t),[tz(e,5)])},!1,!1)},r.handlePush=function(e){return function(){return r.push(e)}},r.swap=function(e,t){return r.updateArrayField(function(r){return rs(r,e,t)},!0,!0)},r.handleSwap=function(e,t){return function(){return r.swap(e,t)}},r.move=function(e,t){return r.updateArrayField(function(r){return rl(r,e,t)},!0,!0)},r.handleMove=function(e,t){return function(){return r.move(e,t)}},r.insert=function(e,t){return r.updateArrayField(function(r){return rf(r,e,t)},function(t){return rf(t,e,null)},function(t){return rf(t,e,null)})},r.handleInsert=function(e,t){return function(){return r.insert(e,t)}},r.replace=function(e,t){return r.updateArrayField(function(r){return rp(r,e,t)},!1,!1)},r.handleReplace=function(e,t){return function(){return r.replace(e,t)}},r.unshift=function(e){var t=-1;return r.updateArrayField(function(r){var n=r?[e].concat(r):[e];return t=n.length,n},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},r.handleUnshift=function(e){return function(){return r.unshift(e)}},r.handleRemove=function(e){return function(){return r.remove(e)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(t4(r)),r.pop=r.pop.bind(t4(r)),r}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var r=t.prototype;return r.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!L()(rr(e.formik.values,e.name),rr(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(e){var t;return this.updateArrayField(function(r){var n=r?rd(r):[];return t||(t=n[e]),t5(n.splice)&&n.splice(e,1),t5(n.every)&&n.every(function(e){return void 0===e})?[]:n},!0,!0),t},r.pop=function(){var e;return this.updateArrayField(function(t){var r=t.slice();return e||(e=r&&r.pop&&r.pop()),r},!0,!0),e},r.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,r=t.component,n=t.render,a=t.children,o=t.name,u=t6(t.formik,["validate","validationSchema"]),c=t9({},e,{form:u,name:o});return r?(0,i.createElement)(r,c):n?n(c):a?"function"==typeof a?a(c):0===i.Children.count(a)?null:i.Children.only(a):null},t})(i.Component).defaultProps={validateOnChange:!0};var ry=r(6310);let rh={newName:ry.Z_().min(3).max(255).required("Please enter new name"),subdomain:ry.Z_().min(3).max(255).required("Please enter subdomain")};var rb=()=>i.createElement("div",{className:"edit-workspaces"},i.createElement("div",{className:"edit-workspaces__body"},i.createElement("div",{className:"edit-workspaces__top"},i.createElement(u.Z,{text:"Edit Workspace"})),i.createElement("div",{className:"edit-workspaces__bottom"},i.createElement(r_,null))));let rm={newName:"",subdomain:""},r_=()=>{var e,t,r,n,a,o,u,p,d,v,y,h,m,_,E,g,j,S,O,A,w,T,k,I,R,F,C,P,N,M,x,U,V,B,z,W,$,Z,G,H,q,K,Y,X,J,Q,ee,et,er,en,ea,eo,ei,eu,ec,el;let{values:es,handleBlur:ef,handleChange:ep,handleSubmit:ed,errors:ev}=(r=void 0===(t=(e={initialValues:rm,validationSchema:ry.Ry(rh),onSubmit:e=>{console.log(e)}}).validateOnChange)||t,a=void 0===(n=e.validateOnBlur)||n,u=void 0!==(o=e.validateOnMount)&&o,p=e.isInitialValid,v=void 0!==(d=e.enableReinitialize)&&d,y=e.onSubmit,h=t6(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),m=t9({validateOnChange:r,validateOnBlur:a,validateOnMount:u,onSubmit:y},h),_=(0,i.useRef)(m.initialValues),E=(0,i.useRef)(m.initialErrors||ra),g=(0,i.useRef)(m.initialTouched||ro),j=(0,i.useRef)(m.initialStatus),S=(0,i.useRef)(!1),O=(0,i.useRef)({}),(0,i.useEffect)(function(){return S.current=!0,function(){S.current=!1}},[]),A=(0,i.useState)(0)[1],T=(w=(0,i.useRef)({values:m.initialValues,errors:m.initialErrors||ra,touched:m.initialTouched||ro,status:m.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0})).current,k=(0,i.useCallback)(function(e){var t=w.current;w.current=function(e,t){switch(t.type){case"SET_VALUES":return t9({},e,{values:t.payload});case"SET_TOUCHED":return t9({},e,{touched:t.payload});case"SET_ERRORS":if(L()(e.errors,t.payload))return e;return t9({},e,{errors:t.payload});case"SET_STATUS":return t9({},e,{status:t.payload});case"SET_ISSUBMITTING":return t9({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return t9({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return t9({},e,{values:rn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return t9({},e,{touched:rn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return t9({},e,{errors:rn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return t9({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return t9({},e,{touched:function e(t,r,n,a){void 0===n&&(n=new WeakMap),void 0===a&&(a={});for(var o=0,i=Object.keys(t);o<i.length;o++){var u=i[o],c=t[u];t7(c)?n.get(c)||(n.set(c,!0),a[u]=Array.isArray(c)?[]:{},e(c,r,n,a[u])):a[u]=r}return a}(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return t9({},e,{isSubmitting:!1});default:return e}}(t,e),t!==w.current&&A(function(e){return e+1})},[]),I=(0,i.useCallback)(function(e,t){return new Promise(function(r,n){var a=m.validate(e,t);null==a?r(ra):rt(a)?a.then(function(e){r(e||ra)},function(e){n(e)}):r(a)})},[m.validate]),R=(0,i.useCallback)(function(e,t){var r,n,a=m.validationSchema,o=t5(a)?a(t):a,i=t&&o.validateAt?o.validateAt(t,e):(void 0===r&&(r=!1),n=function e(t){var r=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=String(n);!0===Array.isArray(t[a])?r[a]=t[a].map(function(t){return!0===Array.isArray(t)||D(t)?e(t):""!==t?t:void 0}):D(t[a])?r[a]=e(t[a]):r[a]=""!==t[a]?t[a]:void 0}return r}(e),o[r?"validateSync":"validate"](n,{abortEarly:!1,context:n}));return new Promise(function(e,t){i.then(function(){e(ra)},function(r){"ValidationError"===r.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return rn(t,e.path,e.message);for(var r=e.inner,n=Array.isArray(r),a=0,r=n?r:r[Symbol.iterator]();;){if(n){if(a>=r.length)break;o=r[a++]}else{if((a=r.next()).done)break;o=a.value}var o,i=o;rr(t,i.path)||(t=rn(t,i.path,i.message))}}return t}(r)):t(r)})})},[m.validationSchema]),F=(0,i.useCallback)(function(e,t){return new Promise(function(r){return r(O.current[e].validate(t))})},[]),C=(0,i.useCallback)(function(e){var t=Object.keys(O.current).filter(function(e){return t5(O.current[e].validate)});return Promise.all(t.length>0?t.map(function(t){return F(t,rr(e,t))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(e){return e.reduce(function(e,r,n){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===r||r&&(e=rn(e,t[n],r)),e},{})})},[F]),P=(0,i.useCallback)(function(e){return Promise.all([C(e),m.validationSchema?R(e):{},m.validate?I(e):{}]).then(function(e){var t=e[0],r=e[1],n=e[2];return b.all([t,r,n],{arrayMerge:ri})})},[m.validate,m.validationSchema,C,I,R]),N=rc(function(e){return void 0===e&&(e=T.values),k({type:"SET_ISVALIDATING",payload:!0}),P(e).then(function(e){return S.current&&(k({type:"SET_ISVALIDATING",payload:!1}),k({type:"SET_ERRORS",payload:e})),e})}),(0,i.useEffect)(function(){u&&!0===S.current&&L()(_.current,m.initialValues)&&N(_.current)},[u,N]),M=(0,i.useCallback)(function(e){var t=e&&e.values?e.values:_.current,r=e&&e.errors?e.errors:E.current?E.current:m.initialErrors||{},n=e&&e.touched?e.touched:g.current?g.current:m.initialTouched||{},a=e&&e.status?e.status:j.current?j.current:m.initialStatus;_.current=t,E.current=r,g.current=n,j.current=a;var o=function(){k({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:r,touched:n,status:a,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(m.onReset){var i=m.onReset(T.values,er);rt(i)?i.then(o):o()}else o()},[m.initialErrors,m.initialStatus,m.initialTouched,m.onReset]),(0,i.useEffect)(function(){!0===S.current&&!L()(_.current,m.initialValues)&&v&&(_.current=m.initialValues,M(),u&&N(_.current))},[v,m.initialValues,M,u,N]),(0,i.useEffect)(function(){v&&!0===S.current&&!L()(E.current,m.initialErrors)&&(E.current=m.initialErrors||ra,k({type:"SET_ERRORS",payload:m.initialErrors||ra}))},[v,m.initialErrors]),(0,i.useEffect)(function(){v&&!0===S.current&&!L()(g.current,m.initialTouched)&&(g.current=m.initialTouched||ro,k({type:"SET_TOUCHED",payload:m.initialTouched||ro}))},[v,m.initialTouched]),(0,i.useEffect)(function(){v&&!0===S.current&&!L()(j.current,m.initialStatus)&&(j.current=m.initialStatus,k({type:"SET_STATUS",payload:m.initialStatus}))},[v,m.initialStatus,m.initialTouched]),x=rc(function(e){if(O.current[e]&&t5(O.current[e].validate)){var t=rr(T.values,e),r=O.current[e].validate(t);return rt(r)?(k({type:"SET_ISVALIDATING",payload:!0}),r.then(function(e){return e}).then(function(t){k({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),k({type:"SET_ISVALIDATING",payload:!1})})):(k({type:"SET_FIELD_ERROR",payload:{field:e,value:r}}),Promise.resolve(r))}return m.validationSchema?(k({type:"SET_ISVALIDATING",payload:!0}),R(T.values,e).then(function(e){return e}).then(function(t){k({type:"SET_FIELD_ERROR",payload:{field:e,value:rr(t,e)}}),k({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),U=(0,i.useCallback)(function(e,t){var r=t.validate;O.current[e]={validate:r}},[]),V=(0,i.useCallback)(function(e){delete O.current[e]},[]),B=rc(function(e,t){return k({type:"SET_TOUCHED",payload:e}),(void 0===t?a:t)?N(T.values):Promise.resolve()}),z=(0,i.useCallback)(function(e){k({type:"SET_ERRORS",payload:e})},[]),W=rc(function(e,t){var n=t5(e)?e(T.values):e;return k({type:"SET_VALUES",payload:n}),(void 0===t?r:t)?N(n):Promise.resolve()}),$=(0,i.useCallback)(function(e,t){k({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})},[]),Z=rc(function(e,t,n){return k({type:"SET_FIELD_VALUE",payload:{field:e,value:t}}),(void 0===n?r:n)?N(rn(T.values,e,t)):Promise.resolve()}),G=(0,i.useCallback)(function(e,t){var r,n=t,a=e;if(!re(e)){e.persist&&e.persist();var o=e.target?e.target:e.currentTarget,i=o.type,u=o.name,c=o.id,l=o.value,s=o.checked,f=(o.outerHTML,o.options),p=o.multiple;n=t||u||c,a=/number|range/.test(i)?isNaN(r=parseFloat(l))?"":r:/checkbox/.test(i)?function(e,t,r){if("boolean"==typeof e)return!!t;var n=[],a=!1,o=-1;if(Array.isArray(e))n=e,a=(o=e.indexOf(r))>=0;else if(!r||"true"==r||"false"==r)return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,o).concat(n.slice(o+1)):n}(rr(T.values,n),s,l):f&&p?Array.from(f).filter(function(e){return e.selected}).map(function(e){return e.value}):l}n&&Z(n,a)},[Z,T.values]),H=rc(function(e){if(re(e))return function(t){return G(t,e)};G(e)}),q=rc(function(e,t,r){return void 0===t&&(t=!0),k({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===r?a:r)?N(T.values):Promise.resolve()}),K=(0,i.useCallback)(function(e,t){e.persist&&e.persist();var r=e.target,n=r.name,a=r.id;r.outerHTML,q(t||n||a,!0)},[q]),Y=rc(function(e){if(re(e))return function(t){return K(t,e)};K(e)}),X=(0,i.useCallback)(function(e){t5(e)?k({type:"SET_FORMIK_STATE",payload:e}):k({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),J=(0,i.useCallback)(function(e){k({type:"SET_STATUS",payload:e})},[]),Q=(0,i.useCallback)(function(e){k({type:"SET_ISSUBMITTING",payload:e})},[]),ee=rc(function(){return k({type:"SUBMIT_ATTEMPT"}),N().then(function(e){var t,r=e instanceof Error;if(!r&&0===Object.keys(e).length){try{if(t=en(),void 0===t)return}catch(e){throw e}return Promise.resolve(t).then(function(e){return S.current&&k({type:"SUBMIT_SUCCESS"}),e}).catch(function(e){if(S.current)throw k({type:"SUBMIT_FAILURE"}),e})}if(S.current&&(k({type:"SUBMIT_FAILURE"}),r))throw e})}),et=rc(function(e){e&&e.preventDefault&&t5(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&t5(e.stopPropagation)&&e.stopPropagation(),ee().catch(function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)})}),er={resetForm:M,validateForm:N,validateField:x,setErrors:z,setFieldError:$,setFieldTouched:q,setFieldValue:Z,setStatus:J,setSubmitting:Q,setTouched:B,setValues:W,setFormikState:X,submitForm:ee},en=rc(function(){return y(T.values,er)}),ea=rc(function(e){e&&e.preventDefault&&t5(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&t5(e.stopPropagation)&&e.stopPropagation(),M()}),eo=(0,i.useCallback)(function(e){return{value:rr(T.values,e),error:rr(T.errors,e),touched:!!rr(T.touched,e),initialValue:rr(_.current,e),initialTouched:!!rr(g.current,e),initialError:rr(E.current,e)}},[T.errors,T.touched,T.values]),ei=(0,i.useCallback)(function(e){return{setValue:function(t,r){return Z(e,t,r)},setTouched:function(t,r){return q(e,t,r)},setError:function(t){return $(e,t)}}},[Z,q,$]),eu=(0,i.useCallback)(function(e){var t=t7(e),r=t?e.name:e,n=rr(T.values,r),a={name:r,value:n,onChange:H,onBlur:Y};if(t){var o=e.type,i=e.value,u=e.as,c=e.multiple;"checkbox"===o?void 0===i?a.checked=!!n:(a.checked=!!(Array.isArray(n)&&~n.indexOf(i)),a.value=i):"radio"===o?(a.checked=n===i,a.value=i):"select"===u&&c&&(a.value=a.value||[],a.multiple=!0)}return a},[Y,H,T.values]),ec=(0,i.useMemo)(function(){return!L()(_.current,T.values)},[_.current,T.values]),el=(0,i.useMemo)(function(){return void 0!==p?ec?T.errors&&0===Object.keys(T.errors).length:!1!==p&&t5(p)?p(m):p:T.errors&&0===Object.keys(T.errors).length},[p,ec,T.errors,m]),t9({},T,{initialValues:_.current,initialErrors:E.current,initialTouched:g.current,initialStatus:j.current,handleBlur:Y,handleChange:H,handleReset:ea,handleSubmit:et,resetForm:M,setErrors:z,setFormikState:X,setFieldTouched:q,setFieldValue:Z,setFieldError:$,setStatus:J,setSubmitting:Q,setTouched:B,setValues:W,submitForm:ee,validateForm:N,validateField:x,isValid:el,dirty:ec,unregisterField:V,registerField:U,getFieldProps:eu,getFieldMeta:eo,getFieldHelpers:ei,validateOnBlur:a,validateOnChange:r,validateOnMount:u}));return i.createElement("form",{onSubmit:ed,className:"edit-workspaces__form"},i.createElement("div",{className:"edit-workspaces__form-body"},i.createElement("div",{className:"edit-workspaces__form-left"},i.createElement("div",{className:"edit-workspaces__form-wrapper"},i.createElement("div",{className:"edit-workspaces__form-title"},"New Name"),i.createElement("div",{className:"edit-workspaces__input-wrapper"},i.createElement(f.Z,{type:"text",name:"newName",placeholder:"Name of workspace",onBlur:ef,onChange:ep,value:es.newName,errors:ev.newName}),ev.newName&&i.createElement("small",{className:"edit-workspaces__error"},ev.newName)))),i.createElement("div",{className:"edit-workspaces__form-right"},i.createElement("div",{className:"edit-workspaces__form-wrapper"},i.createElement("div",{className:"edit-workspaces__form-title"},"Subdomain"),i.createElement("div",{className:"edit-workspaces__input-wrapper"},i.createElement(f.Z,{type:"text",name:"subdomain",placeholder:"Name of workspace",onBlur:ef,onChange:ep,value:es.subdomain,errors:ev.subdomain}),ev.subdomain&&i.createElement("small",{className:"edit-workspaces__error"},ev.subdomain))))),i.createElement("div",{className:"edit-workspaces__buttons"},i.createElement(l.Z,{name:"name2",text:"Cancel",to:s.Z.CLIENT_WORKSPACES}),i.createElement(c.Z,{to:s.Z.CLIENT_WORKSPACES_ADD,width:182,text:"Submit",theme:"clientbutton_primary",type:"submit"})))}},667:function(e){var t=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,o){try{return function e(o,i){if(o===i)return!0;if(o&&i&&"object"==typeof o&&"object"==typeof i){var u,c,l,s=t(o),f=t(i);if(s&&f){if((c=o.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(o[u],i[u]))return!1;return!0}if(s!=f)return!1;var p=o instanceof Date,d=i instanceof Date;if(p!=d)return!1;if(p&&d)return o.getTime()==i.getTime();var v=o instanceof RegExp,y=i instanceof RegExp;if(v!=y)return!1;if(v&&y)return o.toString()==i.toString();var h=r(o);if((c=h.length)!==r(i).length)return!1;for(u=c;0!=u--;)if(!n.call(i,h[u]))return!1;if(a&&o instanceof Element&&i instanceof Element)return o===i;for(u=c;0!=u--;)if(("_owner"!==(l=h[u])||!o.$$typeof)&&!e(o[l],i[l]))return!1;return!0}return o!=o&&i!=i}(e,o)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},5298:function(e,t,r){r.r(t),t.default=function(e,t){}}}]);