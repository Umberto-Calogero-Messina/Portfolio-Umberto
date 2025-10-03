(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();function Op(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ia={exports:{}},xi={},Ta={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function ng(){if(Of)return pe;Of=1;var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),C=Symbol.iterator;function I(v){return v===null||typeof v!="object"?null:(v=C&&v[C]||v["@@iterator"],typeof v=="function"?v:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function M(v,R,ue){this.props=v,this.context=R,this.refs=T,this.updater=ue||j}M.prototype.isReactComponent={},M.prototype.setState=function(v,R){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,R,"setState")},M.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function U(){}U.prototype=M.prototype;function W(v,R,ue){this.props=v,this.context=R,this.refs=T,this.updater=ue||j}var V=W.prototype=new U;V.constructor=W,A(V,M.prototype),V.isPureReactComponent=!0;var G=Array.isArray,re=Object.prototype.hasOwnProperty,ie={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function ke(v,R,ue){var b,te={},q=null,ae=null;if(R!=null)for(b in R.ref!==void 0&&(ae=R.ref),R.key!==void 0&&(q=""+R.key),R)re.call(R,b)&&!K.hasOwnProperty(b)&&(te[b]=R[b]);var de=arguments.length-2;if(de===1)te.children=ue;else if(1<de){for(var me=Array(de),Ve=0;Ve<de;Ve++)me[Ve]=arguments[Ve+2];te.children=me}if(v&&v.defaultProps)for(b in de=v.defaultProps,de)te[b]===void 0&&(te[b]=de[b]);return{$$typeof:n,type:v,key:q,ref:ae,props:te,_owner:ie.current}}function we(v,R){return{$$typeof:n,type:v.type,key:R,ref:v.ref,props:v.props,_owner:v._owner}}function Me(v){return typeof v=="object"&&v!==null&&v.$$typeof===n}function Le(v){var R={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(ue){return R[ue]})}var Te=/\/+/g;function Re(v,R){return typeof v=="object"&&v!==null&&v.key!=null?Le(""+v.key):R.toString(36)}function Oe(v,R,ue,b,te){var q=typeof v;(q==="undefined"||q==="boolean")&&(v=null);var ae=!1;if(v===null)ae=!0;else switch(q){case"string":case"number":ae=!0;break;case"object":switch(v.$$typeof){case n:case o:ae=!0}}if(ae)return ae=v,te=te(ae),v=b===""?"."+Re(ae,0):b,G(te)?(ue="",v!=null&&(ue=v.replace(Te,"$&/")+"/"),Oe(te,R,ue,"",function(Ve){return Ve})):te!=null&&(Me(te)&&(te=we(te,ue+(!te.key||ae&&ae.key===te.key?"":(""+te.key).replace(Te,"$&/")+"/")+v)),R.push(te)),1;if(ae=0,b=b===""?".":b+":",G(v))for(var de=0;de<v.length;de++){q=v[de];var me=b+Re(q,de);ae+=Oe(q,R,ue,me,te)}else if(me=I(v),typeof me=="function")for(v=me.call(v),de=0;!(q=v.next()).done;)q=q.value,me=b+Re(q,de++),ae+=Oe(q,R,ue,me,te);else if(q==="object")throw R=String(v),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ae}function nt(v,R,ue){if(v==null)return v;var b=[],te=0;return Oe(v,b,"","",function(q){return R.call(ue,q,te++)}),b}function Fe(v){if(v._status===-1){var R=v._result;R=R(),R.then(function(ue){(v._status===0||v._status===-1)&&(v._status=1,v._result=ue)},function(ue){(v._status===0||v._status===-1)&&(v._status=2,v._result=ue)}),v._status===-1&&(v._status=0,v._result=R)}if(v._status===1)return v._result.default;throw v._result}var Se={current:null},B={transition:null},J={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:B,ReactCurrentOwner:ie};function Q(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:nt,forEach:function(v,R,ue){nt(v,function(){R.apply(this,arguments)},ue)},count:function(v){var R=0;return nt(v,function(){R++}),R},toArray:function(v){return nt(v,function(R){return R})||[]},only:function(v){if(!Me(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},pe.Component=M,pe.Fragment=s,pe.Profiler=d,pe.PureComponent=W,pe.StrictMode=u,pe.Suspense=S,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,pe.act=Q,pe.cloneElement=function(v,R,ue){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var b=A({},v.props),te=v.key,q=v.ref,ae=v._owner;if(R!=null){if(R.ref!==void 0&&(q=R.ref,ae=ie.current),R.key!==void 0&&(te=""+R.key),v.type&&v.type.defaultProps)var de=v.type.defaultProps;for(me in R)re.call(R,me)&&!K.hasOwnProperty(me)&&(b[me]=R[me]===void 0&&de!==void 0?de[me]:R[me])}var me=arguments.length-2;if(me===1)b.children=ue;else if(1<me){de=Array(me);for(var Ve=0;Ve<me;Ve++)de[Ve]=arguments[Ve+2];b.children=de}return{$$typeof:n,type:v.type,key:te,ref:q,props:b,_owner:ae}},pe.createContext=function(v){return v={$$typeof:h,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:f,_context:v},v.Consumer=v},pe.createElement=ke,pe.createFactory=function(v){var R=ke.bind(null,v);return R.type=v,R},pe.createRef=function(){return{current:null}},pe.forwardRef=function(v){return{$$typeof:x,render:v}},pe.isValidElement=Me,pe.lazy=function(v){return{$$typeof:P,_payload:{_status:-1,_result:v},_init:Fe}},pe.memo=function(v,R){return{$$typeof:w,type:v,compare:R===void 0?null:R}},pe.startTransition=function(v){var R=B.transition;B.transition={};try{v()}finally{B.transition=R}},pe.unstable_act=Q,pe.useCallback=function(v,R){return Se.current.useCallback(v,R)},pe.useContext=function(v){return Se.current.useContext(v)},pe.useDebugValue=function(){},pe.useDeferredValue=function(v){return Se.current.useDeferredValue(v)},pe.useEffect=function(v,R){return Se.current.useEffect(v,R)},pe.useId=function(){return Se.current.useId()},pe.useImperativeHandle=function(v,R,ue){return Se.current.useImperativeHandle(v,R,ue)},pe.useInsertionEffect=function(v,R){return Se.current.useInsertionEffect(v,R)},pe.useLayoutEffect=function(v,R){return Se.current.useLayoutEffect(v,R)},pe.useMemo=function(v,R){return Se.current.useMemo(v,R)},pe.useReducer=function(v,R,ue){return Se.current.useReducer(v,R,ue)},pe.useRef=function(v){return Se.current.useRef(v)},pe.useState=function(v){return Se.current.useState(v)},pe.useSyncExternalStore=function(v,R,ue){return Se.current.useSyncExternalStore(v,R,ue)},pe.useTransition=function(){return Se.current.useTransition()},pe.version="18.3.1",pe}var Ff;function wu(){return Ff||(Ff=1,Ta.exports=ng()),Ta.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function rg(){if(Vf)return xi;Vf=1;var n=wu(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(x,S,w){var P,C={},I=null,j=null;w!==void 0&&(I=""+w),S.key!==void 0&&(I=""+S.key),S.ref!==void 0&&(j=S.ref);for(P in S)u.call(S,P)&&!f.hasOwnProperty(P)&&(C[P]=S[P]);if(x&&x.defaultProps)for(P in S=x.defaultProps,S)C[P]===void 0&&(C[P]=S[P]);return{$$typeof:o,type:x,key:I,ref:j,props:C,_owner:d.current}}return xi.Fragment=s,xi.jsx=h,xi.jsxs=h,xi}var Uf;function ig(){return Uf||(Uf=1,Ia.exports=rg()),Ia.exports}var y=ig(),H=wu();const Qt=Op(H);var ts={},$a={exports:{}},ct={},La={exports:{}},Na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function og(){return Bf||(Bf=1,(function(n){function o(B,J){var Q=B.length;B.push(J);e:for(;0<Q;){var v=Q-1>>>1,R=B[v];if(0<d(R,J))B[v]=J,B[Q]=R,Q=v;else break e}}function s(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var J=B[0],Q=B.pop();if(Q!==J){B[0]=Q;e:for(var v=0,R=B.length,ue=R>>>1;v<ue;){var b=2*(v+1)-1,te=B[b],q=b+1,ae=B[q];if(0>d(te,Q))q<R&&0>d(ae,te)?(B[v]=ae,B[q]=Q,v=q):(B[v]=te,B[b]=Q,v=b);else if(q<R&&0>d(ae,Q))B[v]=ae,B[q]=Q,v=q;else break e}}return J}function d(B,J){var Q=B.sortIndex-J.sortIndex;return Q!==0?Q:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var h=Date,x=h.now();n.unstable_now=function(){return h.now()-x}}var S=[],w=[],P=1,C=null,I=3,j=!1,A=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(B){for(var J=s(w);J!==null;){if(J.callback===null)u(w);else if(J.startTime<=B)u(w),J.sortIndex=J.expirationTime,o(S,J);else break;J=s(w)}}function G(B){if(T=!1,V(B),!A)if(s(S)!==null)A=!0,Fe(re);else{var J=s(w);J!==null&&Se(G,J.startTime-B)}}function re(B,J){A=!1,T&&(T=!1,U(ke),ke=-1),j=!0;var Q=I;try{for(V(J),C=s(S);C!==null&&(!(C.expirationTime>J)||B&&!Le());){var v=C.callback;if(typeof v=="function"){C.callback=null,I=C.priorityLevel;var R=v(C.expirationTime<=J);J=n.unstable_now(),typeof R=="function"?C.callback=R:C===s(S)&&u(S),V(J)}else u(S);C=s(S)}if(C!==null)var ue=!0;else{var b=s(w);b!==null&&Se(G,b.startTime-J),ue=!1}return ue}finally{C=null,I=Q,j=!1}}var ie=!1,K=null,ke=-1,we=5,Me=-1;function Le(){return!(n.unstable_now()-Me<we)}function Te(){if(K!==null){var B=n.unstable_now();Me=B;var J=!0;try{J=K(!0,B)}finally{J?Re():(ie=!1,K=null)}}else ie=!1}var Re;if(typeof W=="function")Re=function(){W(Te)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,nt=Oe.port2;Oe.port1.onmessage=Te,Re=function(){nt.postMessage(null)}}else Re=function(){M(Te,0)};function Fe(B){K=B,ie||(ie=!0,Re())}function Se(B,J){ke=M(function(){B(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){A||j||(A=!0,Fe(re))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return s(S)},n.unstable_next=function(B){switch(I){case 1:case 2:case 3:var J=3;break;default:J=I}var Q=I;I=J;try{return B()}finally{I=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=I;I=B;try{return J()}finally{I=Q}},n.unstable_scheduleCallback=function(B,J,Q){var v=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?v+Q:v):Q=v,B){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=Q+R,B={id:P++,callback:J,priorityLevel:B,startTime:Q,expirationTime:R,sortIndex:-1},Q>v?(B.sortIndex=Q,o(w,B),s(S)===null&&B===s(w)&&(T?(U(ke),ke=-1):T=!0,Se(G,Q-v))):(B.sortIndex=R,o(S,B),A||j||(A=!0,Fe(re))),B},n.unstable_shouldYield=Le,n.unstable_wrapCallback=function(B){var J=I;return function(){var Q=I;I=J;try{return B.apply(this,arguments)}finally{I=Q}}}})(Na)),Na}var Hf;function sg(){return Hf||(Hf=1,La.exports=og()),La.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function lg(){if(Wf)return ct;Wf=1;var n=wu(),o=sg();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function f(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},C={};function I(e){return S.call(C,e)?!0:S.call(P,e)?!1:w.test(e)?C[e]=!0:(P[e]=!0,!1)}function j(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,t,r,i){if(t===null||typeof t>"u"||j(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,r,i,l,a,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=c}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(U,W);M[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(U,W);M[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(U,W);M[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function V(e,t,r,i){var l=M.hasOwnProperty(t)?M[t]:null;(l!==null?l.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A(t,r,l,i)&&(r=null),i||l===null?I(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,i=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var G=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),ie=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),Le=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),B=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,v;function R(e){if(v===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var ue=!1;function b(e,t){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var i=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){i=_}e.call(t.prototype)}else{try{throw Error()}catch(_){i=_}e()}}catch(_){if(_&&i&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),a=i.stack.split(`
`),c=l.length-1,p=a.length-1;1<=c&&0<=p&&l[c]!==a[p];)p--;for(;1<=c&&0<=p;c--,p--)if(l[c]!==a[p]){if(c!==1||p!==1)do if(c--,p--,0>p||l[c]!==a[p]){var m=`
`+l[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=p);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function te(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=b(e.type,!1),e;case 11:return e=b(e.type.render,!1),e;case 1:return e=b(e.type,!0),e;default:return""}}function q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case ie:return"Portal";case we:return"Profiler";case ke:return"StrictMode";case Re:return"Suspense";case Oe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Le:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nt:return t=e.displayName||null,t!==null?t:q(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return q(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(t);case 8:return t===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ve(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){i=""+c,a.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(c){i=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yt(e){e._valueTracker||(e._valueTracker=Ve(e))}function jt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=me(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,t){var r=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Wu(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=de(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qu(e,t){t=t.checked,t!=null&&V(e,"checked",t,!1)}function Ms(e,t){Qu(e,t);var r=de(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Os(e,t.type,r):t.hasOwnProperty("defaultValue")&&Os(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Os(e,t,r){(t!=="number"||Wi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Nr=Array.isArray;function Kn(e,t,r,i){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&i&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(Nr(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:de(r)}}function Ku(e,t){var r=de(t.value),i=de(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,Zu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sm=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){sm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function Ju(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function ec(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,l=Ju(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,l):e[r]=l}}var lm=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hs=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,qn=null,Xn=null;function tc(e){if(e=ii(e)){if(typeof Qs!="function")throw Error(s(280));var t=e.stateNode;t&&(t=go(t),Qs(e.stateNode,e.type,t))}}function nc(e){qn?Xn?Xn.push(e):Xn=[e]:qn=e}function rc(){if(qn){var e=qn,t=Xn;if(Xn=qn=null,tc(e),t)for(e=0;e<t.length;e++)tc(t[e])}}function ic(e,t){return e(t)}function oc(){}var Gs=!1;function sc(e,t,r){if(Gs)return e(t,r);Gs=!0;try{return ic(e,t,r)}finally{Gs=!1,(qn!==null||Xn!==null)&&(oc(),rc())}}function br(e,t){var r=e.stateNode;if(r===null)return null;var i=go(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var Ys=!1;if(x)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Ys=!1}function am(e,t,r,i,l,a,c,p,m){var _=Array.prototype.slice.call(arguments,3);try{t.apply(r,_)}catch(N){this.onError(N)}}var Or=!1,Gi=null,Yi=!1,Ks=null,um={onError:function(e){Or=!0,Gi=e}};function cm(e,t,r,i,l,a,c,p,m){Or=!1,Gi=null,am.apply(um,arguments)}function dm(e,t,r,i,l,a,c,p,m){if(cm.apply(this,arguments),Or){if(Or){var _=Gi;Or=!1,Gi=null}else throw Error(s(198));Yi||(Yi=!0,Ks=_)}}function $n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ac(e){if($n(e)!==e)throw Error(s(188))}function fm(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,i=t;;){var l=r.return;if(l===null)break;var a=l.alternate;if(a===null){if(i=l.return,i!==null){r=i;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===r)return ac(l),e;if(a===i)return ac(l),t;a=a.sibling}throw Error(s(188))}if(r.return!==i.return)r=l,i=a;else{for(var c=!1,p=l.child;p;){if(p===r){c=!0,r=l,i=a;break}if(p===i){c=!0,i=l,r=a;break}p=p.sibling}if(!c){for(p=a.child;p;){if(p===r){c=!0,r=a,i=l;break}if(p===i){c=!0,i=a,r=l;break}p=p.sibling}if(!c)throw Error(s(189))}}if(r.alternate!==i)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function uc(e){return e=fm(e),e!==null?cc(e):null}function cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cc(e);if(t!==null)return t;e=e.sibling}return null}var dc=o.unstable_scheduleCallback,fc=o.unstable_cancelCallback,pm=o.unstable_shouldYield,hm=o.unstable_requestPaint,Ne=o.unstable_now,mm=o.unstable_getCurrentPriorityLevel,qs=o.unstable_ImmediatePriority,pc=o.unstable_UserBlockingPriority,Ki=o.unstable_NormalPriority,gm=o.unstable_LowPriority,hc=o.unstable_IdlePriority,qi=null,Ot=null;function vm(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:wm,ym=Math.log,xm=Math.LN2;function wm(e){return e>>>=0,e===0?32:31-(ym(e)/xm|0)|0}var Xi=64,Zi=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,l=e.suspendedLanes,a=e.pingedLanes,c=r&268435455;if(c!==0){var p=c&~l;p!==0?i=Fr(p):(a&=c,a!==0&&(i=Fr(a)))}else c=r&~l,c!==0?i=Fr(c):a!==0&&(i=Fr(a));if(i===0)return 0;if(t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Rt(t),l=1<<r,i|=e[r],t&=~l;return i}function Sm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function km(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-Rt(a),p=1<<c,m=l[c];m===-1?((p&r)===0||(p&i)!==0)&&(l[c]=Sm(p,t)):m<=t&&(e.expiredLanes|=p),a&=~p}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mc(){var e=Xi;return Xi<<=1,(Xi&4194240)===0&&(Xi=64),e}function Zs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=r}function Em(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Rt(r),a=1<<l;t[l]=0,i[l]=-1,e[l]=-1,r&=~a}}function Js(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Rt(r),l=1<<i;l&t|e[i]&t&&(e[i]|=t),r&=~l}}var xe=0;function gc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vc,el,yc,xc,wc,tl=!1,eo=[],sn=null,ln=null,an=null,Ur=new Map,Br=new Map,un=[],_m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function Hr(e,t,r,i,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[l]},t!==null&&(t=ii(t),t!==null&&el(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cm(e,t,r,i,l){switch(t){case"focusin":return sn=Hr(sn,e,t,r,i,l),!0;case"dragenter":return ln=Hr(ln,e,t,r,i,l),!0;case"mouseover":return an=Hr(an,e,t,r,i,l),!0;case"pointerover":var a=l.pointerId;return Ur.set(a,Hr(Ur.get(a)||null,e,t,r,i,l)),!0;case"gotpointercapture":return a=l.pointerId,Br.set(a,Hr(Br.get(a)||null,e,t,r,i,l)),!0}return!1}function kc(e){var t=Ln(e.target);if(t!==null){var r=$n(t);if(r!==null){if(t=r.tag,t===13){if(t=lc(r),t!==null){e.blockedOn=t,wc(e.priority,function(){yc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Hs=i,r.target.dispatchEvent(i),Hs=null}else return t=ii(r),t!==null&&el(t),e.blockedOn=r,!1;t.shift()}return!0}function Ec(e,t,r){to(e)&&r.delete(t)}function Pm(){tl=!1,sn!==null&&to(sn)&&(sn=null),ln!==null&&to(ln)&&(ln=null),an!==null&&to(an)&&(an=null),Ur.forEach(Ec),Br.forEach(Ec)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Pm)))}function Qr(e){function t(l){return Wr(l,e)}if(0<eo.length){Wr(eo[0],e);for(var r=1;r<eo.length;r++){var i=eo[r];i.blockedOn===e&&(i.blockedOn=null)}}for(sn!==null&&Wr(sn,e),ln!==null&&Wr(ln,e),an!==null&&Wr(an,e),Ur.forEach(t),Br.forEach(t),r=0;r<un.length;r++)i=un[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<un.length&&(r=un[0],r.blockedOn===null);)kc(r),r.blockedOn===null&&un.shift()}var Zn=G.ReactCurrentBatchConfig,no=!0;function jm(e,t,r,i){var l=xe,a=Zn.transition;Zn.transition=null;try{xe=1,nl(e,t,r,i)}finally{xe=l,Zn.transition=a}}function Rm(e,t,r,i){var l=xe,a=Zn.transition;Zn.transition=null;try{xe=4,nl(e,t,r,i)}finally{xe=l,Zn.transition=a}}function nl(e,t,r,i){if(no){var l=rl(e,t,r,i);if(l===null)wl(e,t,i,ro,r),Sc(e,i);else if(Cm(l,e,t,r,i))i.stopPropagation();else if(Sc(e,i),t&4&&-1<_m.indexOf(e)){for(;l!==null;){var a=ii(l);if(a!==null&&vc(a),a=rl(e,t,r,i),a===null&&wl(e,t,i,ro,r),a===l)break;l=a}l!==null&&i.stopPropagation()}else wl(e,t,i,null,r)}}var ro=null;function rl(e,t,r,i){if(ro=null,e=Ws(i),e=Ln(e),e!==null)if(t=$n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=lc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ro=e,null}function _c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mm()){case qs:return 1;case pc:return 4;case Ki:case gm:return 16;case hc:return 536870912;default:return 16}default:return 16}}var cn=null,il=null,io=null;function Cc(){if(io)return io;var e,t=il,r=t.length,i,l="value"in cn?cn.value:cn.textContent,a=l.length;for(e=0;e<r&&t[e]===l[e];e++);var c=r-e;for(i=1;i<=c&&t[r-i]===l[a-i];i++);return io=l.slice(e,1<i?1-i:void 0)}function oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function Pc(){return!1}function ft(e){function t(r,i,l,a,c){this._reactName=r,this._targetInst=l,this.type=i,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?so:Pc,this.isPropagationStopped=Pc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=ft(Jn),Gr=Q({},Jn,{view:0,detail:0}),zm=ft(Gr),sl,ll,Yr,lo=Q({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(sl=e.screenX-Yr.screenX,ll=e.screenY-Yr.screenY):ll=sl=0,Yr=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),jc=ft(lo),Im=Q({},lo,{dataTransfer:0}),Tm=ft(Im),$m=Q({},Gr,{relatedTarget:0}),al=ft($m),Lm=Q({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nm=ft(Lm),Am=Q({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dm=ft(Am),bm=Q({},Jn,{data:0}),Rc=ft(bm),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fm[e])?!!t[e]:!1}function ul(){return Vm}var Um=Q({},Gr,{key:function(e){if(e.key){var t=Mm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bm=ft(Um),Hm=Q({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=ft(Hm),Wm=Q({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),Qm=ft(Wm),Gm=Q({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=ft(Gm),Km=Q({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qm=ft(Km),Xm=[9,13,27,32],cl=x&&"CompositionEvent"in window,Kr=null;x&&"documentMode"in document&&(Kr=document.documentMode);var Zm=x&&"TextEvent"in window&&!Kr,Ic=x&&(!cl||Kr&&8<Kr&&11>=Kr),Tc=" ",$c=!1;function Lc(e,t){switch(e){case"keyup":return Xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Jm(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:($c=!0,Tc);case"textInput":return e=t.data,e===Tc&&$c?null:e;default:return null}}function e0(e,t){if(er)return e==="compositionend"||!cl&&Lc(e,t)?(e=Cc(),io=il=cn=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ic&&t.locale!=="ko"?null:t.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t0[e.type]:t==="textarea"}function Dc(e,t,r,i){nc(i),t=po(t,"onChange"),0<t.length&&(r=new ol("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var qr=null,Xr=null;function n0(e){ed(e,0)}function ao(e){var t=or(e);if(jt(t))return e}function r0(e,t){if(e==="change")return t}var bc=!1;if(x){var dl;if(x){var fl="oninput"in document;if(!fl){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),fl=typeof Mc.oninput=="function"}dl=fl}else dl=!1;bc=dl&&(!document.documentMode||9<document.documentMode)}function Oc(){qr&&(qr.detachEvent("onpropertychange",Fc),Xr=qr=null)}function Fc(e){if(e.propertyName==="value"&&ao(Xr)){var t=[];Dc(t,Xr,e,Ws(e)),sc(n0,t)}}function i0(e,t,r){e==="focusin"?(Oc(),qr=t,Xr=r,qr.attachEvent("onpropertychange",Fc)):e==="focusout"&&Oc()}function o0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(Xr)}function s0(e,t){if(e==="click")return ao(t)}function l0(e,t){if(e==="input"||e==="change")return ao(t)}function a0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:a0;function Zr(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var l=r[i];if(!S.call(t,l)||!zt(e[l],t[l]))return!1}return!0}function Vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uc(e,t){var r=Vc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vc(r)}}function Bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hc(){for(var e=window,t=Wi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Wi(e.document)}return t}function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u0(e){var t=Hc(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bc(r.ownerDocument.documentElement,r)){if(i!==null&&pl(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,a=Math.min(i.start,l);i=i.end===void 0?a:Math.min(i.end,l),!e.extend&&a>i&&(l=i,i=a,a=l),l=Uc(r,a);var c=Uc(r,i);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var c0=x&&"documentMode"in document&&11>=document.documentMode,tr=null,hl=null,Jr=null,ml=!1;function Wc(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ml||tr==null||tr!==Wi(i)||(i=tr,"selectionStart"in i&&pl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jr&&Zr(Jr,i)||(Jr=i,i=po(hl,"onSelect"),0<i.length&&(t=new ol("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=tr)))}function uo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var nr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},gl={},Qc={};x&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function co(e){if(gl[e])return gl[e];if(!nr[e])return e;var t=nr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Qc)return gl[e]=t[r];return e}var Gc=co("animationend"),Yc=co("animationiteration"),Kc=co("animationstart"),qc=co("transitionend"),Xc=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Xc.set(e,t),f(t,[e])}for(var vl=0;vl<Zc.length;vl++){var yl=Zc[vl],d0=yl.toLowerCase(),f0=yl[0].toUpperCase()+yl.slice(1);dn(d0,"on"+f0)}dn(Gc,"onAnimationEnd"),dn(Yc,"onAnimationIteration"),dn(Kc,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(qc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Jc(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,dm(i,t,void 0,e),e.currentTarget=null}function ed(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],l=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var c=i.length-1;0<=c;c--){var p=i[c],m=p.instance,_=p.currentTarget;if(p=p.listener,m!==a&&l.isPropagationStopped())break e;Jc(l,p,_),a=m}else for(c=0;c<i.length;c++){if(p=i[c],m=p.instance,_=p.currentTarget,p=p.listener,m!==a&&l.isPropagationStopped())break e;Jc(l,p,_),a=m}}}if(Yi)throw e=Ks,Yi=!1,Ks=null,e}function _e(e,t){var r=t[Pl];r===void 0&&(r=t[Pl]=new Set);var i=e+"__bubble";r.has(i)||(td(t,e,2,!1),r.add(i))}function xl(e,t,r){var i=0;t&&(i|=4),td(r,e,i,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[fo]){e[fo]=!0,u.forEach(function(r){r!=="selectionchange"&&(p0.has(r)||xl(r,!1,e),xl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,xl("selectionchange",!1,t))}}function td(e,t,r,i){switch(_c(t)){case 1:var l=jm;break;case 4:l=Rm;break;default:l=nl}r=l.bind(null,t,r,e),l=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function wl(e,t,r,i,l){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var p=i.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(c===4)for(c=i.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;c=c.return}for(;p!==null;){if(c=Ln(p),c===null)return;if(m=c.tag,m===5||m===6){i=a=c;continue e}p=p.parentNode}}i=i.return}sc(function(){var _=a,N=Ws(r),D=[];e:{var $=Xc.get(e);if($!==void 0){var Y=ol,Z=e;switch(e){case"keypress":if(oo(r)===0)break e;case"keydown":case"keyup":Y=Bm;break;case"focusin":Z="focus",Y=al;break;case"focusout":Z="blur",Y=al;break;case"beforeblur":case"afterblur":Y=al;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Qm;break;case Gc:case Yc:case Kc:Y=Nm;break;case qc:Y=Ym;break;case"scroll":Y=zm;break;case"wheel":Y=qm;break;case"copy":case"cut":case"paste":Y=Dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=zc}var ee=(t&4)!==0,Ae=!ee&&e==="scroll",k=ee?$!==null?$+"Capture":null:$;ee=[];for(var g=_,E;g!==null;){E=g;var O=E.stateNode;if(E.tag===5&&O!==null&&(E=O,k!==null&&(O=br(g,k),O!=null&&ee.push(ni(g,O,E)))),Ae)break;g=g.return}0<ee.length&&($=new Y($,Z,null,r,N),D.push({event:$,listeners:ee}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",$&&r!==Hs&&(Z=r.relatedTarget||r.fromElement)&&(Ln(Z)||Z[Kt]))break e;if((Y||$)&&($=N.window===N?N:($=N.ownerDocument)?$.defaultView||$.parentWindow:window,Y?(Z=r.relatedTarget||r.toElement,Y=_,Z=Z?Ln(Z):null,Z!==null&&(Ae=$n(Z),Z!==Ae||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(Y=null,Z=_),Y!==Z)){if(ee=jc,O="onMouseLeave",k="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(ee=zc,O="onPointerLeave",k="onPointerEnter",g="pointer"),Ae=Y==null?$:or(Y),E=Z==null?$:or(Z),$=new ee(O,g+"leave",Y,r,N),$.target=Ae,$.relatedTarget=E,O=null,Ln(N)===_&&(ee=new ee(k,g+"enter",Z,r,N),ee.target=E,ee.relatedTarget=Ae,O=ee),Ae=O,Y&&Z)t:{for(ee=Y,k=Z,g=0,E=ee;E;E=rr(E))g++;for(E=0,O=k;O;O=rr(O))E++;for(;0<g-E;)ee=rr(ee),g--;for(;0<E-g;)k=rr(k),E--;for(;g--;){if(ee===k||k!==null&&ee===k.alternate)break t;ee=rr(ee),k=rr(k)}ee=null}else ee=null;Y!==null&&nd(D,$,Y,ee,!1),Z!==null&&Ae!==null&&nd(D,Ae,Z,ee,!0)}}e:{if($=_?or(_):window,Y=$.nodeName&&$.nodeName.toLowerCase(),Y==="select"||Y==="input"&&$.type==="file")var ne=r0;else if(Ac($))if(bc)ne=l0;else{ne=o0;var oe=i0}else(Y=$.nodeName)&&Y.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(ne=s0);if(ne&&(ne=ne(e,_))){Dc(D,ne,r,N);break e}oe&&oe(e,$,_),e==="focusout"&&(oe=$._wrapperState)&&oe.controlled&&$.type==="number"&&Os($,"number",$.value)}switch(oe=_?or(_):window,e){case"focusin":(Ac(oe)||oe.contentEditable==="true")&&(tr=oe,hl=_,Jr=null);break;case"focusout":Jr=hl=tr=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Wc(D,r,N);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":Wc(D,r,N)}var se;if(cl)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else er?Lc(e,r)&&(le="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(le="onCompositionStart");le&&(Ic&&r.locale!=="ko"&&(er||le!=="onCompositionStart"?le==="onCompositionEnd"&&er&&(se=Cc()):(cn=N,il="value"in cn?cn.value:cn.textContent,er=!0)),oe=po(_,le),0<oe.length&&(le=new Rc(le,e,null,r,N),D.push({event:le,listeners:oe}),se?le.data=se:(se=Nc(r),se!==null&&(le.data=se)))),(se=Zm?Jm(e,r):e0(e,r))&&(_=po(_,"onBeforeInput"),0<_.length&&(N=new Rc("onBeforeInput","beforeinput",null,r,N),D.push({event:N,listeners:_}),N.data=se))}ed(D,t)})}function ni(e,t,r){return{instance:e,listener:t,currentTarget:r}}function po(e,t){for(var r=t+"Capture",i=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=br(e,r),a!=null&&i.unshift(ni(e,a,l)),a=br(e,t),a!=null&&i.push(ni(e,a,l))),e=e.return}return i}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nd(e,t,r,i,l){for(var a=t._reactName,c=[];r!==null&&r!==i;){var p=r,m=p.alternate,_=p.stateNode;if(m!==null&&m===i)break;p.tag===5&&_!==null&&(p=_,l?(m=br(r,a),m!=null&&c.unshift(ni(r,m,p))):l||(m=br(r,a),m!=null&&c.push(ni(r,m,p)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var h0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function rd(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(m0,"")}function ho(e,t,r){if(t=rd(t),rd(e)!==t&&r)throw Error(s(425))}function mo(){}var Sl=null,kl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(y0)}:_l;function y0(e){setTimeout(function(){throw e})}function Cl(e,t){var r=t,i=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(i===0){e.removeChild(l),Qr(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=l}while(r);Qr(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),Ft="__reactFiber$"+ir,ri="__reactProps$"+ir,Kt="__reactContainer$"+ir,Pl="__reactEvents$"+ir,x0="__reactListeners$"+ir,w0="__reactHandles$"+ir;function Ln(e){var t=e[Ft];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Kt]||r[Ft]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=od(e);e!==null;){if(r=e[Ft])return r;e=od(e)}return t}e=r,r=e.parentNode}return null}function ii(e){return e=e[Ft]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function go(e){return e[ri]||null}var jl=[],sr=-1;function pn(e){return{current:e}}function Ce(e){0>sr||(e.current=jl[sr],jl[sr]=null,sr--)}function Ee(e,t){sr++,jl[sr]=e.current,e.current=t}var hn={},Xe=pn(hn),ot=pn(!1),Nn=hn;function lr(e,t){var r=e.type.contextTypes;if(!r)return hn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in r)l[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function st(e){return e=e.childContextTypes,e!=null}function vo(){Ce(ot),Ce(Xe)}function sd(e,t,r){if(Xe.current!==hn)throw Error(s(168));Ee(Xe,t),Ee(ot,r)}function ld(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var l in i)if(!(l in t))throw Error(s(108,ae(e)||"Unknown",l));return Q({},r,i)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Nn=Xe.current,Ee(Xe,e),Ee(ot,ot.current),!0}function ad(e,t,r){var i=e.stateNode;if(!i)throw Error(s(169));r?(e=ld(e,t,Nn),i.__reactInternalMemoizedMergedChildContext=e,Ce(ot),Ce(Xe),Ee(Xe,e)):Ce(ot),Ee(ot,r)}var qt=null,xo=!1,Rl=!1;function ud(e){qt===null?qt=[e]:qt.push(e)}function S0(e){xo=!0,ud(e)}function mn(){if(!Rl&&qt!==null){Rl=!0;var e=0,t=xe;try{var r=qt;for(xe=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}qt=null,xo=!1}catch(l){throw qt!==null&&(qt=qt.slice(e+1)),dc(qs,mn),l}finally{xe=t,Rl=!1}}return null}var ar=[],ur=0,wo=null,So=0,yt=[],xt=0,An=null,Xt=1,Zt="";function Dn(e,t){ar[ur++]=So,ar[ur++]=wo,wo=e,So=t}function cd(e,t,r){yt[xt++]=Xt,yt[xt++]=Zt,yt[xt++]=An,An=e;var i=Xt;e=Zt;var l=32-Rt(i)-1;i&=~(1<<l),r+=1;var a=32-Rt(t)+l;if(30<a){var c=l-l%5;a=(i&(1<<c)-1).toString(32),i>>=c,l-=c,Xt=1<<32-Rt(t)+l|r<<l|i,Zt=a+e}else Xt=1<<a|r<<l|i,Zt=e}function zl(e){e.return!==null&&(Dn(e,1),cd(e,1,0))}function Il(e){for(;e===wo;)wo=ar[--ur],ar[ur]=null,So=ar[--ur],ar[ur]=null;for(;e===An;)An=yt[--xt],yt[xt]=null,Zt=yt[--xt],yt[xt]=null,Xt=yt[--xt],yt[xt]=null}var pt=null,ht=null,je=!1,It=null;function dd(e,t){var r=Et(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function fd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ht=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=An!==null?{id:Xt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Et(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,pt=e,ht=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(je){var t=ht;if(t){var r=t;if(!fd(e,t)){if(Tl(e))throw Error(s(418));t=fn(r.nextSibling);var i=pt;t&&fd(e,t)?dd(i,r):(e.flags=e.flags&-4097|2,je=!1,pt=e)}}else{if(Tl(e))throw Error(s(418));e.flags=e.flags&-4097|2,je=!1,pt=e}}}function pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function ko(e){if(e!==pt)return!1;if(!je)return pd(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=ht)){if(Tl(e))throw hd(),Error(s(418));for(;t;)dd(e,t),t=fn(t.nextSibling)}if(pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ht=fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=pt?fn(e.stateNode.nextSibling):null;return!0}function hd(){for(var e=ht;e;)e=fn(e.nextSibling)}function cr(){ht=pt=null,je=!1}function Ll(e){It===null?It=[e]:It.push(e)}var k0=G.ReactCurrentBatchConfig;function oi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var i=r.stateNode}if(!i)throw Error(s(147,e));var l=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(c){var p=l.refs;c===null?delete p[a]:p[a]=c},t._stringRef=a,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function gd(e){function t(k,g){if(e){var E=k.deletions;E===null?(k.deletions=[g],k.flags|=16):E.push(g)}}function r(k,g){if(!e)return null;for(;g!==null;)t(k,g),g=g.sibling;return null}function i(k,g){for(k=new Map;g!==null;)g.key!==null?k.set(g.key,g):k.set(g.index,g),g=g.sibling;return k}function l(k,g){return k=En(k,g),k.index=0,k.sibling=null,k}function a(k,g,E){return k.index=E,e?(E=k.alternate,E!==null?(E=E.index,E<g?(k.flags|=2,g):E):(k.flags|=2,g)):(k.flags|=1048576,g)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function p(k,g,E,O){return g===null||g.tag!==6?(g=_a(E,k.mode,O),g.return=k,g):(g=l(g,E),g.return=k,g)}function m(k,g,E,O){var ne=E.type;return ne===K?N(k,g,E.props.children,O,E.key):g!==null&&(g.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Fe&&md(ne)===g.type)?(O=l(g,E.props),O.ref=oi(k,g,E),O.return=k,O):(O=Go(E.type,E.key,E.props,null,k.mode,O),O.ref=oi(k,g,E),O.return=k,O)}function _(k,g,E,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Ca(E,k.mode,O),g.return=k,g):(g=l(g,E.children||[]),g.return=k,g)}function N(k,g,E,O,ne){return g===null||g.tag!==7?(g=Hn(E,k.mode,O,ne),g.return=k,g):(g=l(g,E),g.return=k,g)}function D(k,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_a(""+g,k.mode,E),g.return=k,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case re:return E=Go(g.type,g.key,g.props,null,k.mode,E),E.ref=oi(k,null,g),E.return=k,E;case ie:return g=Ca(g,k.mode,E),g.return=k,g;case Fe:var O=g._init;return D(k,O(g._payload),E)}if(Nr(g)||J(g))return g=Hn(g,k.mode,E,null),g.return=k,g;Eo(k,g)}return null}function $(k,g,E,O){var ne=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return ne!==null?null:p(k,g,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case re:return E.key===ne?m(k,g,E,O):null;case ie:return E.key===ne?_(k,g,E,O):null;case Fe:return ne=E._init,$(k,g,ne(E._payload),O)}if(Nr(E)||J(E))return ne!==null?null:N(k,g,E,O,null);Eo(k,E)}return null}function Y(k,g,E,O,ne){if(typeof O=="string"&&O!==""||typeof O=="number")return k=k.get(E)||null,p(g,k,""+O,ne);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case re:return k=k.get(O.key===null?E:O.key)||null,m(g,k,O,ne);case ie:return k=k.get(O.key===null?E:O.key)||null,_(g,k,O,ne);case Fe:var oe=O._init;return Y(k,g,E,oe(O._payload),ne)}if(Nr(O)||J(O))return k=k.get(E)||null,N(g,k,O,ne,null);Eo(g,O)}return null}function Z(k,g,E,O){for(var ne=null,oe=null,se=g,le=g=0,Qe=null;se!==null&&le<E.length;le++){se.index>le?(Qe=se,se=null):Qe=se.sibling;var ve=$(k,se,E[le],O);if(ve===null){se===null&&(se=Qe);break}e&&se&&ve.alternate===null&&t(k,se),g=a(ve,g,le),oe===null?ne=ve:oe.sibling=ve,oe=ve,se=Qe}if(le===E.length)return r(k,se),je&&Dn(k,le),ne;if(se===null){for(;le<E.length;le++)se=D(k,E[le],O),se!==null&&(g=a(se,g,le),oe===null?ne=se:oe.sibling=se,oe=se);return je&&Dn(k,le),ne}for(se=i(k,se);le<E.length;le++)Qe=Y(se,k,le,E[le],O),Qe!==null&&(e&&Qe.alternate!==null&&se.delete(Qe.key===null?le:Qe.key),g=a(Qe,g,le),oe===null?ne=Qe:oe.sibling=Qe,oe=Qe);return e&&se.forEach(function(_n){return t(k,_n)}),je&&Dn(k,le),ne}function ee(k,g,E,O){var ne=J(E);if(typeof ne!="function")throw Error(s(150));if(E=ne.call(E),E==null)throw Error(s(151));for(var oe=ne=null,se=g,le=g=0,Qe=null,ve=E.next();se!==null&&!ve.done;le++,ve=E.next()){se.index>le?(Qe=se,se=null):Qe=se.sibling;var _n=$(k,se,ve.value,O);if(_n===null){se===null&&(se=Qe);break}e&&se&&_n.alternate===null&&t(k,se),g=a(_n,g,le),oe===null?ne=_n:oe.sibling=_n,oe=_n,se=Qe}if(ve.done)return r(k,se),je&&Dn(k,le),ne;if(se===null){for(;!ve.done;le++,ve=E.next())ve=D(k,ve.value,O),ve!==null&&(g=a(ve,g,le),oe===null?ne=ve:oe.sibling=ve,oe=ve);return je&&Dn(k,le),ne}for(se=i(k,se);!ve.done;le++,ve=E.next())ve=Y(se,k,le,ve.value,O),ve!==null&&(e&&ve.alternate!==null&&se.delete(ve.key===null?le:ve.key),g=a(ve,g,le),oe===null?ne=ve:oe.sibling=ve,oe=ve);return e&&se.forEach(function(tg){return t(k,tg)}),je&&Dn(k,le),ne}function Ae(k,g,E,O){if(typeof E=="object"&&E!==null&&E.type===K&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case re:e:{for(var ne=E.key,oe=g;oe!==null;){if(oe.key===ne){if(ne=E.type,ne===K){if(oe.tag===7){r(k,oe.sibling),g=l(oe,E.props.children),g.return=k,k=g;break e}}else if(oe.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Fe&&md(ne)===oe.type){r(k,oe.sibling),g=l(oe,E.props),g.ref=oi(k,oe,E),g.return=k,k=g;break e}r(k,oe);break}else t(k,oe);oe=oe.sibling}E.type===K?(g=Hn(E.props.children,k.mode,O,E.key),g.return=k,k=g):(O=Go(E.type,E.key,E.props,null,k.mode,O),O.ref=oi(k,g,E),O.return=k,k=O)}return c(k);case ie:e:{for(oe=E.key;g!==null;){if(g.key===oe)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){r(k,g.sibling),g=l(g,E.children||[]),g.return=k,k=g;break e}else{r(k,g);break}else t(k,g);g=g.sibling}g=Ca(E,k.mode,O),g.return=k,k=g}return c(k);case Fe:return oe=E._init,Ae(k,g,oe(E._payload),O)}if(Nr(E))return Z(k,g,E,O);if(J(E))return ee(k,g,E,O);Eo(k,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(r(k,g.sibling),g=l(g,E),g.return=k,k=g):(r(k,g),g=_a(E,k.mode,O),g.return=k,k=g),c(k)):r(k,g)}return Ae}var dr=gd(!0),vd=gd(!1),_o=pn(null),Co=null,fr=null,Nl=null;function Al(){Nl=fr=Co=null}function Dl(e){var t=_o.current;Ce(_o),e._currentValue=t}function bl(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){Co=e,Nl=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(Co===null)throw Error(s(308));fr=e,Co.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var bn=null;function Ml(e){bn===null?bn=[e]:bn.push(e)}function yd(e,t,r,i){var l=t.interleaved;return l===null?(r.next=r,Ml(t)):(r.next=l.next,l.next=r),t.interleaved=r,Jt(e,i)}function Jt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gn=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ge&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,Jt(e,r)}return l=i.interleaved,l===null?(t.next=t,Ml(i)):(t.next=l.next,l.next=t),i.interleaved=t,Jt(e,r)}function Po(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Js(e,r)}}function wd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var l=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?l=a=c:a=a.next=c,r=r.next}while(r!==null);a===null?l=a=t:a=a.next=t}else l=a=t;r={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function jo(e,t,r,i){var l=e.updateQueue;gn=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var m=p,_=m.next;m.next=null,c===null?a=_:c.next=_,c=m;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==c&&(p===null?N.firstBaseUpdate=_:p.next=_,N.lastBaseUpdate=m))}if(a!==null){var D=l.baseState;c=0,N=_=m=null,p=a;do{var $=p.lane,Y=p.eventTime;if((i&$)===$){N!==null&&(N=N.next={eventTime:Y,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var Z=e,ee=p;switch($=t,Y=r,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){D=Z.call(Y,D,$);break e}D=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,$=typeof Z=="function"?Z.call(Y,D,$):Z,$==null)break e;D=Q({},D,$);break e;case 2:gn=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,$=l.effects,$===null?l.effects=[p]:$.push(p))}else Y={eventTime:Y,lane:$,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(_=N=Y,m=D):N=N.next=Y,c|=$;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;$=p,p=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);if(N===null&&(m=D),l.baseState=m,l.firstBaseUpdate=_,l.lastBaseUpdate=N,t=l.shared.interleaved,t!==null){l=t;do c|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Fn|=c,e.lanes=c,e.memoizedState=D}}function Sd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],l=i.callback;if(l!==null){if(i.callback=null,i=r,typeof l!="function")throw Error(s(191,l));l.call(i)}}}var si={},Vt=pn(si),li=pn(si),ai=pn(si);function Mn(e){if(e===si)throw Error(s(174));return e}function Fl(e,t){switch(Ee(ai,t),Ee(li,e),Ee(Vt,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vs(t,e)}Ce(Vt),Ee(Vt,t)}function hr(){Ce(Vt),Ce(li),Ce(ai)}function kd(e){Mn(ai.current);var t=Mn(Vt.current),r=Vs(t,e.type);t!==r&&(Ee(li,e),Ee(Vt,r))}function Vl(e){li.current===e&&(Ce(Vt),Ce(li))}var ze=pn(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Bl(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var zo=G.ReactCurrentDispatcher,Hl=G.ReactCurrentBatchConfig,On=0,Ie=null,Ue=null,He=null,Io=!1,ui=!1,ci=0,E0=0;function Ze(){throw Error(s(321))}function Wl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!zt(e[r],t[r]))return!1;return!0}function Ql(e,t,r,i,l,a){if(On=a,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?j0:R0,e=r(i,l),ui){a=0;do{if(ui=!1,ci=0,25<=a)throw Error(s(301));a+=1,He=Ue=null,t.updateQueue=null,zo.current=z0,e=r(i,l)}while(ui)}if(zo.current=Lo,t=Ue!==null&&Ue.next!==null,On=0,He=Ue=Ie=null,Io=!1,t)throw Error(s(300));return e}function Gl(){var e=ci!==0;return ci=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ie.memoizedState=He=e:He=He.next=e,He}function St(){if(Ue===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=He===null?Ie.memoizedState:He.next;if(t!==null)He=t,Ue=e;else{if(e===null)throw Error(s(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ie.memoizedState=He=e:He=He.next=e}return He}function di(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=St(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=Ue,l=i.baseQueue,a=r.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}i.baseQueue=l=a,r.pending=null}if(l!==null){a=l.next,i=i.baseState;var p=c=null,m=null,_=a;do{var N=_.lane;if((On&N)===N)m!==null&&(m=m.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),i=_.hasEagerState?_.eagerState:e(i,_.action);else{var D={lane:N,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};m===null?(p=m=D,c=i):m=m.next=D,Ie.lanes|=N,Fn|=N}_=_.next}while(_!==null&&_!==a);m===null?c=i:m.next=p,zt(i,t.memoizedState)||(lt=!0),t.memoizedState=i,t.baseState=c,t.baseQueue=m,r.lastRenderedState=i}if(e=r.interleaved,e!==null){l=e;do a=l.lane,Ie.lanes|=a,Fn|=a,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Kl(e){var t=St(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=r.dispatch,l=r.pending,a=t.memoizedState;if(l!==null){r.pending=null;var c=l=l.next;do a=e(a,c.action),c=c.next;while(c!==l);zt(a,t.memoizedState)||(lt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,i]}function Ed(){}function _d(e,t){var r=Ie,i=St(),l=t(),a=!zt(i.memoizedState,l);if(a&&(i.memoizedState=l,lt=!0),i=i.queue,ql(jd.bind(null,r,i,e),[e]),i.getSnapshot!==t||a||He!==null&&He.memoizedState.tag&1){if(r.flags|=2048,fi(9,Pd.bind(null,r,i,l,t),void 0,null),We===null)throw Error(s(349));(On&30)!==0||Cd(r,t,l)}return l}function Cd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Pd(e,t,r,i){t.value=r,t.getSnapshot=i,Rd(t)&&zd(e)}function jd(e,t,r){return r(function(){Rd(t)&&zd(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!zt(e,r)}catch{return!0}}function zd(e){var t=Jt(e,1);t!==null&&Nt(t,e,1,-1)}function Id(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=P0.bind(null,Ie,e),[t.memoizedState,e]}function fi(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Td(){return St().memoizedState}function To(e,t,r,i){var l=Ut();Ie.flags|=e,l.memoizedState=fi(1|t,r,void 0,i===void 0?null:i)}function $o(e,t,r,i){var l=St();i=i===void 0?null:i;var a=void 0;if(Ue!==null){var c=Ue.memoizedState;if(a=c.destroy,i!==null&&Wl(i,c.deps)){l.memoizedState=fi(t,r,a,i);return}}Ie.flags|=e,l.memoizedState=fi(1|t,r,a,i)}function $d(e,t){return To(8390656,8,e,t)}function ql(e,t){return $o(2048,8,e,t)}function Ld(e,t){return $o(4,2,e,t)}function Nd(e,t){return $o(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dd(e,t,r){return r=r!=null?r.concat([e]):null,$o(4,4,Ad.bind(null,t,e),r)}function Xl(){}function bd(e,t){var r=St();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Wl(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Md(e,t){var r=St();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Wl(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Od(e,t,r){return(On&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=r):(zt(r,t)||(r=mc(),Ie.lanes|=r,Fn|=r,e.baseState=!0),t)}function _0(e,t){var r=xe;xe=r!==0&&4>r?r:4,e(!0);var i=Hl.transition;Hl.transition={};try{e(!1),t()}finally{xe=r,Hl.transition=i}}function Fd(){return St().memoizedState}function C0(e,t,r){var i=Sn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Vd(e))Ud(t,r);else if(r=yd(e,t,r,i),r!==null){var l=it();Nt(r,e,i,l),Bd(r,t,i)}}function P0(e,t,r){var i=Sn(e),l={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vd(e))Ud(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var c=t.lastRenderedState,p=a(c,r);if(l.hasEagerState=!0,l.eagerState=p,zt(p,c)){var m=t.interleaved;m===null?(l.next=l,Ml(t)):(l.next=m.next,m.next=l),t.interleaved=l;return}}catch{}finally{}r=yd(e,t,l,i),r!==null&&(l=it(),Nt(r,e,i,l),Bd(r,t,i))}}function Vd(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function Ud(e,t){ui=Io=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bd(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Js(e,r)}}var Lo={readContext:wt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},j0={readContext:wt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:$d,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,To(4194308,4,Ad.bind(null,t,e),r)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Ut();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=C0.bind(null,Ie,e),[i.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Id,useDebugValue:Xl,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Id(!1),t=e[0];return e=_0.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Ie,l=Ut();if(je){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),We===null)throw Error(s(349));(On&30)!==0||Cd(i,t,r)}l.memoizedState=r;var a={value:r,getSnapshot:t};return l.queue=a,$d(jd.bind(null,i,a,e),[e]),i.flags|=2048,fi(9,Pd.bind(null,i,a,r,t),void 0,null),r},useId:function(){var e=Ut(),t=We.identifierPrefix;if(je){var r=Zt,i=Xt;r=(i&~(1<<32-Rt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=ci++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=E0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R0={readContext:wt,useCallback:bd,useContext:wt,useEffect:ql,useImperativeHandle:Dd,useInsertionEffect:Ld,useLayoutEffect:Nd,useMemo:Md,useReducer:Yl,useRef:Td,useState:function(){return Yl(di)},useDebugValue:Xl,useDeferredValue:function(e){var t=St();return Od(t,Ue.memoizedState,e)},useTransition:function(){var e=Yl(di)[0],t=St().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:_d,useId:Fd,unstable_isNewReconciler:!1},z0={readContext:wt,useCallback:bd,useContext:wt,useEffect:ql,useImperativeHandle:Dd,useInsertionEffect:Ld,useLayoutEffect:Nd,useMemo:Md,useReducer:Kl,useRef:Td,useState:function(){return Kl(di)},useDebugValue:Xl,useDeferredValue:function(e){var t=St();return Ue===null?t.memoizedState=e:Od(t,Ue.memoizedState,e)},useTransition:function(){var e=Kl(di)[0],t=St().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:_d,useId:Fd,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zl(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:Q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var No={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=it(),l=Sn(e),a=en(i,l);a.payload=t,r!=null&&(a.callback=r),t=vn(e,a,l),t!==null&&(Nt(t,e,l,i),Po(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=it(),l=Sn(e),a=en(i,l);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=vn(e,a,l),t!==null&&(Nt(t,e,l,i),Po(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=it(),i=Sn(e),l=en(r,i);l.tag=2,t!=null&&(l.callback=t),t=vn(e,l,i),t!==null&&(Nt(t,e,i,r),Po(t,e,i))}};function Hd(e,t,r,i,l,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,c):t.prototype&&t.prototype.isPureReactComponent?!Zr(r,i)||!Zr(l,a):!0}function Wd(e,t,r){var i=!1,l=hn,a=t.contextType;return typeof a=="object"&&a!==null?a=wt(a):(l=st(t)?Nn:Xe.current,i=t.contextTypes,a=(i=i!=null)?lr(e,l):hn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=No,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Qd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function Jl(e,t,r,i){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Ol(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=wt(a):(a=st(t)?Nn:Xe.current,l.context=lr(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Zl(e,t,a,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&No.enqueueReplaceState(l,l.state,null),jo(e,r,l,i),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var r="",i=t;do r+=te(i),i=i.return;while(i);var l=r}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function ea(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ta(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,t,r){r=en(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Vo||(Vo=!0,ga=i),ta(e,t)},r}function Yd(e,t,r){r=en(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;r.payload=function(){return i(l)},r.callback=function(){ta(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){ta(e,t),typeof i!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function Kd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new I0;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(r)||(l.add(r),e=H0.bind(null,e,t,r),t.then(e,e))}function qd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xd(e,t,r,i,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=en(-1,1),t.tag=2,vn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var T0=G.ReactCurrentOwner,lt=!1;function rt(e,t,r,i){t.child=e===null?vd(t,null,r,i):dr(t,e.child,r,i)}function Zd(e,t,r,i,l){r=r.render;var a=t.ref;return pr(t,l),i=Ql(e,t,r,i,a,l),r=Gl(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tn(e,t,l)):(je&&r&&zl(t),t.flags|=1,rt(e,t,i,l),t.child)}function Jd(e,t,r,i,l){if(e===null){var a=r.type;return typeof a=="function"&&!Ea(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,ef(e,t,a,i,l)):(e=Go(r.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&l)===0){var c=a.memoizedProps;if(r=r.compare,r=r!==null?r:Zr,r(c,i)&&e.ref===t.ref)return tn(e,t,l)}return t.flags|=1,e=En(a,i),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,r,i,l){if(e!==null){var a=e.memoizedProps;if(Zr(a,i)&&e.ref===t.ref)if(lt=!1,t.pendingProps=i=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,tn(e,t,l)}return na(e,t,r,i,l)}function tf(e,t,r){var i=t.pendingProps,l=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(vr,mt),mt|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(vr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,Ee(vr,mt),mt|=i}else a!==null?(i=a.baseLanes|r,t.memoizedState=null):i=r,Ee(vr,mt),mt|=i;return rt(e,t,l,r),t.child}function nf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function na(e,t,r,i,l){var a=st(r)?Nn:Xe.current;return a=lr(t,a),pr(t,l),r=Ql(e,t,r,i,a,l),i=Gl(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tn(e,t,l)):(je&&i&&zl(t),t.flags|=1,rt(e,t,r,l),t.child)}function rf(e,t,r,i,l){if(st(r)){var a=!0;yo(t)}else a=!1;if(pr(t,l),t.stateNode===null)Do(e,t),Wd(t,r,i),Jl(t,r,i,l),i=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var m=c.context,_=r.contextType;typeof _=="object"&&_!==null?_=wt(_):(_=st(r)?Nn:Xe.current,_=lr(t,_));var N=r.getDerivedStateFromProps,D=typeof N=="function"||typeof c.getSnapshotBeforeUpdate=="function";D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==i||m!==_)&&Qd(t,c,i,_),gn=!1;var $=t.memoizedState;c.state=$,jo(t,i,c,l),m=t.memoizedState,p!==i||$!==m||ot.current||gn?(typeof N=="function"&&(Zl(t,r,N,i),m=t.memoizedState),(p=gn||Hd(t,r,p,i,$,m,_))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=m),c.props=i,c.state=m,c.context=_,i=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,xd(e,t),p=t.memoizedProps,_=t.type===t.elementType?p:Tt(t.type,p),c.props=_,D=t.pendingProps,$=c.context,m=r.contextType,typeof m=="object"&&m!==null?m=wt(m):(m=st(r)?Nn:Xe.current,m=lr(t,m));var Y=r.getDerivedStateFromProps;(N=typeof Y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==D||$!==m)&&Qd(t,c,i,m),gn=!1,$=t.memoizedState,c.state=$,jo(t,i,c,l);var Z=t.memoizedState;p!==D||$!==Z||ot.current||gn?(typeof Y=="function"&&(Zl(t,r,Y,i),Z=t.memoizedState),(_=gn||Hd(t,r,_,i,$,Z,m)||!1)?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,Z,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,Z,m)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Z),c.props=i,c.state=Z,c.context=m,i=_):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),i=!1)}return ra(e,t,r,i,a,l)}function ra(e,t,r,i,l,a){nf(e,t);var c=(t.flags&128)!==0;if(!i&&!c)return l&&ad(t,r,!1),tn(e,t,a);i=t.stateNode,T0.current=t;var p=c&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&c?(t.child=dr(t,e.child,null,a),t.child=dr(t,null,p,a)):rt(e,t,p,a),t.memoizedState=i.state,l&&ad(t,r,!0),t.child}function of(e){var t=e.stateNode;t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),Fl(e,t.containerInfo)}function sf(e,t,r,i,l){return cr(),Ll(l),t.flags|=256,rt(e,t,r,i),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,t,r){var i=t.pendingProps,l=ze.current,a=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ee(ze,l&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=i.children,e=i.fallback,a?(i=t.mode,a=t.child,c={mode:"hidden",children:c},(i&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=Yo(c,i,0,null),e=Hn(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=oa(r),t.memoizedState=ia,e):sa(t,c));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return $0(e,t,c,i,p,l,r);if(a){a=i.fallback,c=t.mode,l=e.child,p=l.sibling;var m={mode:"hidden",children:i.children};return(c&1)===0&&t.child!==l?(i=t.child,i.childLanes=0,i.pendingProps=m,t.deletions=null):(i=En(l,m),i.subtreeFlags=l.subtreeFlags&14680064),p!==null?a=En(p,a):(a=Hn(a,c,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,c=e.child.memoizedState,c=c===null?oa(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~r,t.memoizedState=ia,i}return a=e.child,e=a.sibling,i=En(a,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function sa(e,t){return t=Yo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ao(e,t,r,i){return i!==null&&Ll(i),dr(t,e.child,null,r),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $0(e,t,r,i,l,a,c){if(r)return t.flags&256?(t.flags&=-257,i=ea(Error(s(422))),Ao(e,t,c,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,l=t.mode,i=Yo({mode:"visible",children:i.children},l,0,null),a=Hn(a,l,c,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,(t.mode&1)!==0&&dr(t,e.child,null,c),t.child.memoizedState=oa(c),t.memoizedState=ia,a);if((t.mode&1)===0)return Ao(e,t,c,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var p=i.dgst;return i=p,a=Error(s(419)),i=ea(a,i,void 0),Ao(e,t,c,i)}if(p=(c&e.childLanes)!==0,lt||p){if(i=We,i!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(i.suspendedLanes|c))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,Jt(e,l),Nt(i,e,l,-1))}return ka(),i=ea(Error(s(421))),Ao(e,t,c,i)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=W0.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,ht=fn(l.nextSibling),pt=t,je=!0,It=null,e!==null&&(yt[xt++]=Xt,yt[xt++]=Zt,yt[xt++]=An,Xt=e.id,Zt=e.overflow,An=t),t=sa(t,i.children),t.flags|=4096,t)}function af(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bl(e.return,t,r)}function la(e,t,r,i,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=l)}function uf(e,t,r){var i=t.pendingProps,l=i.revealOrder,a=i.tail;if(rt(e,t,i.children,r),i=ze.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&af(e,r,t);else if(e.tag===19)af(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ee(ze,i),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Ro(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),la(t,!1,l,r,a);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ro(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}la(t,!0,r,null,a);break;case"together":la(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=En(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=En(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function L0(e,t,r){switch(t.tag){case 3:of(t),cr();break;case 5:kd(t);break;case 1:st(t.type)&&yo(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,l=t.memoizedProps.value;Ee(_o,i._currentValue),i._currentValue=l;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Ee(ze,ze.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?lf(e,t,r):(Ee(ze,ze.current&1),e=tn(e,t,r),e!==null?e.sibling:null);Ee(ze,ze.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return uf(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ee(ze,ze.current),i)break;return null;case 22:case 23:return t.lanes=0,tf(e,t,r)}return tn(e,t,r)}var cf,aa,df,ff;cf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},aa=function(){},df=function(e,t,r,i){var l=e.memoizedProps;if(l!==i){e=t.stateNode,Mn(Vt.current);var a=null;switch(r){case"input":l=bs(e,l),i=bs(e,i),a=[];break;case"select":l=Q({},l,{value:void 0}),i=Q({},i,{value:void 0}),a=[];break;case"textarea":l=Fs(e,l),i=Fs(e,i),a=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=mo)}Us(r,i);var c;r=null;for(_ in l)if(!i.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var p=l[_];for(c in p)p.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(d.hasOwnProperty(_)?a||(a=[]):(a=a||[]).push(_,null));for(_ in i){var m=i[_];if(p=l?.[_],i.hasOwnProperty(_)&&m!==p&&(m!=null||p!=null))if(_==="style")if(p){for(c in p)!p.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in m)m.hasOwnProperty(c)&&p[c]!==m[c]&&(r||(r={}),r[c]=m[c])}else r||(a||(a=[]),a.push(_,r)),r=m;else _==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,p=p?p.__html:void 0,m!=null&&p!==m&&(a=a||[]).push(_,m)):_==="children"?typeof m!="string"&&typeof m!="number"||(a=a||[]).push(_,""+m):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(d.hasOwnProperty(_)?(m!=null&&_==="onScroll"&&_e("scroll",e),a||p===m||(a=[])):(a=a||[]).push(_,m))}r&&(a=a||[]).push("style",r);var _=a;(t.updateQueue=_)&&(t.flags|=4)}},ff=function(e,t,r,i){r!==i&&(t.flags|=4)};function pi(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function N0(e,t,r){var i=t.pendingProps;switch(Il(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return st(t.type)&&vo(),Je(t),null;case 3:return i=t.stateNode,hr(),Ce(ot),Ce(Xe),Bl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,It!==null&&(xa(It),It=null))),aa(e,t),Je(t),null;case 5:Vl(t);var l=Mn(ai.current);if(r=t.type,e!==null&&t.stateNode!=null)df(e,t,r,i,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Je(t),null}if(e=Mn(Vt.current),ko(t)){i=t.stateNode,r=t.type;var a=t.memoizedProps;switch(i[Ft]=t,i[ri]=a,e=(t.mode&1)!==0,r){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(l=0;l<ei.length;l++)_e(ei[l],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":Wu(i,a),_e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},_e("invalid",i);break;case"textarea":Yu(i,a),_e("invalid",i)}Us(r,a),l=null;for(var c in a)if(a.hasOwnProperty(c)){var p=a[c];c==="children"?typeof p=="string"?i.textContent!==p&&(a.suppressHydrationWarning!==!0&&ho(i.textContent,p,e),l=["children",p]):typeof p=="number"&&i.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&ho(i.textContent,p,e),l=["children",""+p]):d.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&_e("scroll",i)}switch(r){case"input":Yt(i),Gu(i,a,!0);break;case"textarea":Yt(i),qu(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=mo)}i=l,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=c.createElement(r,{is:i.is}):(e=c.createElement(r),r==="select"&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,r),e[Ft]=t,e[ri]=i,cf(e,t,!1,!1),t.stateNode=e;e:{switch(c=Bs(r,i),r){case"dialog":_e("cancel",e),_e("close",e),l=i;break;case"iframe":case"object":case"embed":_e("load",e),l=i;break;case"video":case"audio":for(l=0;l<ei.length;l++)_e(ei[l],e);l=i;break;case"source":_e("error",e),l=i;break;case"img":case"image":case"link":_e("error",e),_e("load",e),l=i;break;case"details":_e("toggle",e),l=i;break;case"input":Wu(e,i),l=bs(e,i),_e("invalid",e);break;case"option":l=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},l=Q({},i,{value:void 0}),_e("invalid",e);break;case"textarea":Yu(e,i),l=Fs(e,i),_e("invalid",e);break;default:l=i}Us(r,l),p=l;for(a in p)if(p.hasOwnProperty(a)){var m=p[a];a==="style"?ec(e,m):a==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Zu(e,m)):a==="children"?typeof m=="string"?(r!=="textarea"||m!=="")&&Ar(e,m):typeof m=="number"&&Ar(e,""+m):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?m!=null&&a==="onScroll"&&_e("scroll",e):m!=null&&V(e,a,m,c))}switch(r){case"input":Yt(e),Gu(e,i,!1);break;case"textarea":Yt(e),qu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+de(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Kn(e,!!i.multiple,a,!1):i.defaultValue!=null&&Kn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=mo)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(r=Mn(ai.current),Mn(Vt.current),ko(t)){if(i=t.stateNode,r=t.memoizedProps,i[Ft]=t,(a=i.nodeValue!==r)&&(e=pt,e!==null))switch(e.tag){case 3:ho(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ft]=t,t.stateNode=i}return Je(t),null;case 13:if(Ce(ze),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ht!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hd(),cr(),t.flags|=98560,a=!1;else if(a=ko(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Ft]=t}else cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else It!==null&&(xa(It),It=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?Be===0&&(Be=3):ka())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return hr(),aa(e,t),e===null&&ti(t.stateNode.containerInfo),Je(t),null;case 10:return Dl(t.type._context),Je(t),null;case 17:return st(t.type)&&vo(),Je(t),null;case 19:if(Ce(ze),a=t.memoizedState,a===null)return Je(t),null;if(i=(t.flags&128)!==0,c=a.rendering,c===null)if(i)pi(a,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Ro(e),c!==null){for(t.flags|=128,pi(a,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)a=r,e=i,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(ze,ze.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ne()>yr&&(t.flags|=128,i=!0,pi(a,!1),t.lanes=4194304)}else{if(!i)if(e=Ro(c),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),pi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!je)return Je(t),null}else 2*Ne()-a.renderingStartTime>yr&&r!==1073741824&&(t.flags|=128,i=!0,pi(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(r=a.last,r!==null?r.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ne(),t.sibling=null,r=ze.current,Ee(ze,i?r&1|2:r&1),t):(Je(t),null);case 22:case 23:return Sa(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(mt&1073741824)!==0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function A0(e,t){switch(Il(t),t.tag){case 1:return st(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),Ce(ot),Ce(Xe),Bl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vl(t),null;case 13:if(Ce(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(ze),null;case 4:return hr(),null;case 10:return Dl(t.type._context),null;case 22:case 23:return Sa(),null;case 24:return null;default:return null}}var bo=!1,et=!1,D0=typeof WeakSet=="function"?WeakSet:Set,X=null;function gr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){$e(e,t,i)}else r.current=null}function ua(e,t,r){try{r()}catch(i){$e(e,t,i)}}var pf=!1;function b0(e,t){if(Sl=no,e=Hc(),pl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var l=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var c=0,p=-1,m=-1,_=0,N=0,D=e,$=null;t:for(;;){for(var Y;D!==r||l!==0&&D.nodeType!==3||(p=c+l),D!==a||i!==0&&D.nodeType!==3||(m=c+i),D.nodeType===3&&(c+=D.nodeValue.length),(Y=D.firstChild)!==null;)$=D,D=Y;for(;;){if(D===e)break t;if($===r&&++_===l&&(p=c),$===a&&++N===i&&(m=c),(Y=D.nextSibling)!==null)break;D=$,$=D.parentNode}D=Y}r=p===-1||m===-1?null:{start:p,end:m}}else r=null}r=r||{start:0,end:0}}else r=null;for(kl={focusedElem:e,selectionRange:r},no=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Ae=Z.memoizedState,k=t.stateNode,g=k.getSnapshotBeforeUpdate(t.elementType===t.type?ee:Tt(t.type,ee),Ae);k.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(O){$e(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return Z=pf,pf=!1,Z}function hi(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&ua(t,r,a)}l=l.next}while(l!==i)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function ca(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[ri],delete t[Pl],delete t[x0],delete t[w0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function da(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=mo));else if(i!==4&&(e=e.child,e!==null))for(da(e,t,r),e=e.sibling;e!==null;)da(e,t,r),e=e.sibling}function fa(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(fa(e,t,r),e=e.sibling;e!==null;)fa(e,t,r),e=e.sibling}var Ye=null,$t=!1;function yn(e,t,r){for(r=r.child;r!==null;)vf(e,t,r),r=r.sibling}function vf(e,t,r){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(qi,r)}catch{}switch(r.tag){case 5:et||gr(r,t);case 6:var i=Ye,l=$t;Ye=null,yn(e,t,r),Ye=i,$t=l,Ye!==null&&($t?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&($t?(e=Ye,r=r.stateNode,e.nodeType===8?Cl(e.parentNode,r):e.nodeType===1&&Cl(e,r),Qr(e)):Cl(Ye,r.stateNode));break;case 4:i=Ye,l=$t,Ye=r.stateNode.containerInfo,$t=!0,yn(e,t,r),Ye=i,$t=l;break;case 0:case 11:case 14:case 15:if(!et&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var a=l,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&ua(r,t,c),l=l.next}while(l!==i)}yn(e,t,r);break;case 1:if(!et&&(gr(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(p){$e(r,t,p)}yn(e,t,r);break;case 21:yn(e,t,r);break;case 22:r.mode&1?(et=(i=et)||r.memoizedState!==null,yn(e,t,r),et=i):yn(e,t,r);break;default:yn(e,t,r)}}function yf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new D0),t.forEach(function(i){var l=Q0.bind(null,e,i);r.has(i)||(r.add(i),i.then(l,l))})}}function Lt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var l=r[i];try{var a=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:Ye=p.stateNode,$t=!1;break e;case 3:Ye=p.stateNode.containerInfo,$t=!0;break e;case 4:Ye=p.stateNode.containerInfo,$t=!0;break e}p=p.return}if(Ye===null)throw Error(s(160));vf(a,c,l),Ye=null,$t=!1;var m=l.alternate;m!==null&&(m.return=null),l.return=null}catch(_){$e(l,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xf(t,e),t=t.sibling}function xf(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Bt(e),i&4){try{hi(3,e,e.return),Mo(3,e)}catch(ee){$e(e,e.return,ee)}try{hi(5,e,e.return)}catch(ee){$e(e,e.return,ee)}}break;case 1:Lt(t,e),Bt(e),i&512&&r!==null&&gr(r,r.return);break;case 5:if(Lt(t,e),Bt(e),i&512&&r!==null&&gr(r,r.return),e.flags&32){var l=e.stateNode;try{Ar(l,"")}catch(ee){$e(e,e.return,ee)}}if(i&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,c=r!==null?r.memoizedProps:a,p=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&Qu(l,a),Bs(p,c);var _=Bs(p,a);for(c=0;c<m.length;c+=2){var N=m[c],D=m[c+1];N==="style"?ec(l,D):N==="dangerouslySetInnerHTML"?Zu(l,D):N==="children"?Ar(l,D):V(l,N,D,_)}switch(p){case"input":Ms(l,a);break;case"textarea":Ku(l,a);break;case"select":var $=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var Y=a.value;Y!=null?Kn(l,!!a.multiple,Y,!1):$!==!!a.multiple&&(a.defaultValue!=null?Kn(l,!!a.multiple,a.defaultValue,!0):Kn(l,!!a.multiple,a.multiple?[]:"",!1))}l[ri]=a}catch(ee){$e(e,e.return,ee)}}break;case 6:if(Lt(t,e),Bt(e),i&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(ee){$e(e,e.return,ee)}}break;case 3:if(Lt(t,e),Bt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(ee){$e(e,e.return,ee)}break;case 4:Lt(t,e),Bt(e);break;case 13:Lt(t,e),Bt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(ma=Ne())),i&4&&yf(e);break;case 22:if(N=r!==null&&r.memoizedState!==null,e.mode&1?(et=(_=et)||N,Lt(t,e),et=_):Lt(t,e),Bt(e),i&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!N&&(e.mode&1)!==0)for(X=e,N=e.child;N!==null;){for(D=X=N;X!==null;){switch($=X,Y=$.child,$.tag){case 0:case 11:case 14:case 15:hi(4,$,$.return);break;case 1:gr($,$.return);var Z=$.stateNode;if(typeof Z.componentWillUnmount=="function"){i=$,r=$.return;try{t=i,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(ee){$e(i,r,ee)}}break;case 5:gr($,$.return);break;case 22:if($.memoizedState!==null){kf(D);continue}}Y!==null?(Y.return=$,X=Y):kf(D)}N=N.sibling}e:for(N=null,D=e;;){if(D.tag===5){if(N===null){N=D;try{l=D.stateNode,_?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=D.stateNode,m=D.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,p.style.display=Ju("display",c))}catch(ee){$e(e,e.return,ee)}}}else if(D.tag===6){if(N===null)try{D.stateNode.nodeValue=_?"":D.memoizedProps}catch(ee){$e(e,e.return,ee)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;N===D&&(N=null),D=D.return}N===D&&(N=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Lt(t,e),Bt(e),i&4&&yf(e);break;case 21:break;default:Lt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(mf(r)){var i=r;break e}r=r.return}throw Error(s(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Ar(l,""),i.flags&=-33);var a=gf(e);fa(e,a,l);break;case 3:case 4:var c=i.stateNode.containerInfo,p=gf(e);da(e,p,c);break;default:throw Error(s(161))}}catch(m){$e(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M0(e,t,r){X=e,wf(e)}function wf(e,t,r){for(var i=(e.mode&1)!==0;X!==null;){var l=X,a=l.child;if(l.tag===22&&i){var c=l.memoizedState!==null||bo;if(!c){var p=l.alternate,m=p!==null&&p.memoizedState!==null||et;p=bo;var _=et;if(bo=c,(et=m)&&!_)for(X=l;X!==null;)c=X,m=c.child,c.tag===22&&c.memoizedState!==null?Ef(l):m!==null?(m.return=c,X=m):Ef(l);for(;a!==null;)X=a,wf(a),a=a.sibling;X=l,bo=p,et=_}Sf(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,X=a):Sf(e)}}function Sf(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||Mo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!et)if(r===null)i.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Tt(t.type,r.memoizedProps);i.componentDidUpdate(l,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Sd(t,a,i);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Sd(t,c,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&r.focus();break;case"img":m.src&&(r.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var N=_.memoizedState;if(N!==null){var D=N.dehydrated;D!==null&&Qr(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}et||t.flags&512&&ca(t)}catch($){$e(t,t.return,$)}}if(t===e){X=null;break}if(r=t.sibling,r!==null){r.return=t.return,X=r;break}X=t.return}}function kf(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var r=t.sibling;if(r!==null){r.return=t.return,X=r;break}X=t.return}}function Ef(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Mo(4,t)}catch(m){$e(t,r,m)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var l=t.return;try{i.componentDidMount()}catch(m){$e(t,l,m)}}var a=t.return;try{ca(t)}catch(m){$e(t,a,m)}break;case 5:var c=t.return;try{ca(t)}catch(m){$e(t,c,m)}}}catch(m){$e(t,t.return,m)}if(t===e){X=null;break}var p=t.sibling;if(p!==null){p.return=t.return,X=p;break}X=t.return}}var O0=Math.ceil,Oo=G.ReactCurrentDispatcher,pa=G.ReactCurrentOwner,kt=G.ReactCurrentBatchConfig,ge=0,We=null,De=null,Ke=0,mt=0,vr=pn(0),Be=0,mi=null,Fn=0,Fo=0,ha=0,gi=null,at=null,ma=0,yr=1/0,nn=null,Vo=!1,ga=null,xn=null,Uo=!1,wn=null,Bo=0,vi=0,va=null,Ho=-1,Wo=0;function it(){return(ge&6)!==0?Ne():Ho!==-1?Ho:Ho=Ne()}function Sn(e){return(e.mode&1)===0?1:(ge&2)!==0&&Ke!==0?Ke&-Ke:k0.transition!==null?(Wo===0&&(Wo=mc()),Wo):(e=xe,e!==0||(e=window.event,e=e===void 0?16:_c(e.type)),e)}function Nt(e,t,r,i){if(50<vi)throw vi=0,va=null,Error(s(185));Vr(e,r,i),((ge&2)===0||e!==We)&&(e===We&&((ge&2)===0&&(Fo|=r),Be===4&&kn(e,Ke)),ut(e,i),r===1&&ge===0&&(t.mode&1)===0&&(yr=Ne()+500,xo&&mn()))}function ut(e,t){var r=e.callbackNode;km(e,t);var i=Ji(e,e===We?Ke:0);if(i===0)r!==null&&fc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&fc(r),t===1)e.tag===0?S0(Cf.bind(null,e)):ud(Cf.bind(null,e)),v0(function(){(ge&6)===0&&mn()}),r=null;else{switch(gc(i)){case 1:r=qs;break;case 4:r=pc;break;case 16:r=Ki;break;case 536870912:r=hc;break;default:r=Ki}r=Lf(r,_f.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function _f(e,t){if(Ho=-1,Wo=0,(ge&6)!==0)throw Error(s(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var i=Ji(e,e===We?Ke:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Qo(e,i);else{t=i;var l=ge;ge|=2;var a=jf();(We!==e||Ke!==t)&&(nn=null,yr=Ne()+500,Un(e,t));do try{U0();break}catch(p){Pf(e,p)}while(!0);Al(),Oo.current=a,ge=l,De!==null?t=0:(We=null,Ke=0,t=Be)}if(t!==0){if(t===2&&(l=Xs(e),l!==0&&(i=l,t=ya(e,l))),t===1)throw r=mi,Un(e,0),kn(e,i),ut(e,Ne()),r;if(t===6)kn(e,i);else{if(l=e.current.alternate,(i&30)===0&&!F0(l)&&(t=Qo(e,i),t===2&&(a=Xs(e),a!==0&&(i=a,t=ya(e,a))),t===1))throw r=mi,Un(e,0),kn(e,i),ut(e,Ne()),r;switch(e.finishedWork=l,e.finishedLanes=i,t){case 0:case 1:throw Error(s(345));case 2:Bn(e,at,nn);break;case 3:if(kn(e,i),(i&130023424)===i&&(t=ma+500-Ne(),10<t)){if(Ji(e,0)!==0)break;if(l=e.suspendedLanes,(l&i)!==i){it(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_l(Bn.bind(null,e,at,nn),t);break}Bn(e,at,nn);break;case 4:if(kn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,l=-1;0<i;){var c=31-Rt(i);a=1<<c,c=t[c],c>l&&(l=c),i&=~a}if(i=l,i=Ne()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O0(i/1960))-i,10<i){e.timeoutHandle=_l(Bn.bind(null,e,at,nn),i);break}Bn(e,at,nn);break;case 5:Bn(e,at,nn);break;default:throw Error(s(329))}}}return ut(e,Ne()),e.callbackNode===r?_f.bind(null,e):null}function ya(e,t){var r=gi;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=at,at=r,t!==null&&xa(t)),e}function xa(e){at===null?at=e:at.push.apply(at,e)}function F0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var l=r[i],a=l.getSnapshot;l=l.value;try{if(!zt(a(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~ha,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Rt(t),i=1<<r;e[r]=-1,t&=~i}}function Cf(e){if((ge&6)!==0)throw Error(s(327));xr();var t=Ji(e,0);if((t&1)===0)return ut(e,Ne()),null;var r=Qo(e,t);if(e.tag!==0&&r===2){var i=Xs(e);i!==0&&(t=i,r=ya(e,i))}if(r===1)throw r=mi,Un(e,0),kn(e,t),ut(e,Ne()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,at,nn),ut(e,Ne()),null}function wa(e,t){var r=ge;ge|=1;try{return e(t)}finally{ge=r,ge===0&&(yr=Ne()+500,xo&&mn())}}function Vn(e){wn!==null&&wn.tag===0&&(ge&6)===0&&xr();var t=ge;ge|=1;var r=kt.transition,i=xe;try{if(kt.transition=null,xe=1,e)return e()}finally{xe=i,kt.transition=r,ge=t,(ge&6)===0&&mn()}}function Sa(){mt=vr.current,Ce(vr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,g0(r)),De!==null)for(r=De.return;r!==null;){var i=r;switch(Il(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vo();break;case 3:hr(),Ce(ot),Ce(Xe),Bl();break;case 5:Vl(i);break;case 4:hr();break;case 13:Ce(ze);break;case 19:Ce(ze);break;case 10:Dl(i.type._context);break;case 22:case 23:Sa()}r=r.return}if(We=e,De=e=En(e.current,null),Ke=mt=t,Be=0,mi=null,ha=Fo=Fn=0,at=gi=null,bn!==null){for(t=0;t<bn.length;t++)if(r=bn[t],i=r.interleaved,i!==null){r.interleaved=null;var l=i.next,a=r.pending;if(a!==null){var c=a.next;a.next=l,i.next=c}r.pending=i}bn=null}return e}function Pf(e,t){do{var r=De;try{if(Al(),zo.current=Lo,Io){for(var i=Ie.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}Io=!1}if(On=0,He=Ue=Ie=null,ui=!1,ci=0,pa.current=null,r===null||r.return===null){Be=1,mi=t,De=null;break}e:{var a=e,c=r.return,p=r,m=t;if(t=Ke,p.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var _=m,N=p,D=N.tag;if((N.mode&1)===0&&(D===0||D===11||D===15)){var $=N.alternate;$?(N.updateQueue=$.updateQueue,N.memoizedState=$.memoizedState,N.lanes=$.lanes):(N.updateQueue=null,N.memoizedState=null)}var Y=qd(c);if(Y!==null){Y.flags&=-257,Xd(Y,c,p,a,t),Y.mode&1&&Kd(a,_,t),t=Y,m=_;var Z=t.updateQueue;if(Z===null){var ee=new Set;ee.add(m),t.updateQueue=ee}else Z.add(m);break e}else{if((t&1)===0){Kd(a,_,t),ka();break e}m=Error(s(426))}}else if(je&&p.mode&1){var Ae=qd(c);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),Xd(Ae,c,p,a,t),Ll(mr(m,p));break e}}a=m=mr(m,p),Be!==4&&(Be=2),gi===null?gi=[a]:gi.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var k=Gd(a,m,t);wd(a,k);break e;case 1:p=m;var g=a.type,E=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(xn===null||!xn.has(E)))){a.flags|=65536,t&=-t,a.lanes|=t;var O=Yd(a,p,t);wd(a,O);break e}}a=a.return}while(a!==null)}zf(r)}catch(ne){t=ne,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function jf(){var e=Oo.current;return Oo.current=Lo,e===null?Lo:e}function ka(){(Be===0||Be===3||Be===2)&&(Be=4),We===null||(Fn&268435455)===0&&(Fo&268435455)===0||kn(We,Ke)}function Qo(e,t){var r=ge;ge|=2;var i=jf();(We!==e||Ke!==t)&&(nn=null,Un(e,t));do try{V0();break}catch(l){Pf(e,l)}while(!0);if(Al(),ge=r,Oo.current=i,De!==null)throw Error(s(261));return We=null,Ke=0,Be}function V0(){for(;De!==null;)Rf(De)}function U0(){for(;De!==null&&!pm();)Rf(De)}function Rf(e){var t=$f(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?zf(e):De=t,pa.current=null}function zf(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=N0(r,t,mt),r!==null){De=r;return}}else{if(r=A0(r,t),r!==null){r.flags&=32767,De=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Be===0&&(Be=5)}function Bn(e,t,r){var i=xe,l=kt.transition;try{kt.transition=null,xe=1,B0(e,t,r,i)}finally{kt.transition=l,xe=i}return null}function B0(e,t,r,i){do xr();while(wn!==null);if((ge&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Em(e,a),e===We&&(De=We=null,Ke=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Uo||(Uo=!0,Lf(Ki,function(){return xr(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=kt.transition,kt.transition=null;var c=xe;xe=1;var p=ge;ge|=4,pa.current=null,b0(e,r),xf(r,e),u0(kl),no=!!Sl,kl=Sl=null,e.current=r,M0(r),hm(),ge=p,xe=c,kt.transition=a}else e.current=r;if(Uo&&(Uo=!1,wn=e,Bo=l),a=e.pendingLanes,a===0&&(xn=null),vm(r.stateNode),ut(e,Ne()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],i(l.value,{componentStack:l.stack,digest:l.digest});if(Vo)throw Vo=!1,e=ga,ga=null,e;return(Bo&1)!==0&&e.tag!==0&&xr(),a=e.pendingLanes,(a&1)!==0?e===va?vi++:(vi=0,va=e):vi=0,mn(),null}function xr(){if(wn!==null){var e=gc(Bo),t=kt.transition,r=xe;try{if(kt.transition=null,xe=16>e?16:e,wn===null)var i=!1;else{if(e=wn,wn=null,Bo=0,(ge&6)!==0)throw Error(s(331));var l=ge;for(ge|=4,X=e.current;X!==null;){var a=X,c=a.child;if((X.flags&16)!==0){var p=a.deletions;if(p!==null){for(var m=0;m<p.length;m++){var _=p[m];for(X=_;X!==null;){var N=X;switch(N.tag){case 0:case 11:case 15:hi(8,N,a)}var D=N.child;if(D!==null)D.return=N,X=D;else for(;X!==null;){N=X;var $=N.sibling,Y=N.return;if(hf(N),N===_){X=null;break}if($!==null){$.return=Y,X=$;break}X=Y}}}var Z=a.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Ae=ee.sibling;ee.sibling=null,ee=Ae}while(ee!==null)}}X=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,X=c;else e:for(;X!==null;){if(a=X,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:hi(9,a,a.return)}var k=a.sibling;if(k!==null){k.return=a.return,X=k;break e}X=a.return}}var g=e.current;for(X=g;X!==null;){c=X;var E=c.child;if((c.subtreeFlags&2064)!==0&&E!==null)E.return=c,X=E;else e:for(c=g;X!==null;){if(p=X,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Mo(9,p)}}catch(ne){$e(p,p.return,ne)}if(p===c){X=null;break e}var O=p.sibling;if(O!==null){O.return=p.return,X=O;break e}X=p.return}}if(ge=l,mn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(qi,e)}catch{}i=!0}return i}finally{xe=r,kt.transition=t}}return!1}function If(e,t,r){t=mr(r,t),t=Gd(e,t,1),e=vn(e,t,1),t=it(),e!==null&&(Vr(e,1,t),ut(e,t))}function $e(e,t,r){if(e.tag===3)If(e,e,r);else for(;t!==null;){if(t.tag===3){If(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xn===null||!xn.has(i))){e=mr(r,e),e=Yd(t,e,1),t=vn(t,e,1),e=it(),t!==null&&(Vr(t,1,e),ut(t,e));break}}t=t.return}}function H0(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&r,We===e&&(Ke&r)===r&&(Be===4||Be===3&&(Ke&130023424)===Ke&&500>Ne()-ma?Un(e,0):ha|=r),ut(e,t)}function Tf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Zi,Zi<<=1,(Zi&130023424)===0&&(Zi=4194304)));var r=it();e=Jt(e,t),e!==null&&(Vr(e,t,r),ut(e,r))}function W0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Tf(e,r)}function Q0(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(t),Tf(e,r)}var $f;$f=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)lt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return lt=!1,L0(e,t,r);lt=(e.flags&131072)!==0}else lt=!1,je&&(t.flags&1048576)!==0&&cd(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Do(e,t),e=t.pendingProps;var l=lr(t,Xe.current);pr(t,r),l=Ql(null,t,i,e,l,r);var a=Gl();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(i)?(a=!0,yo(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ol(t),l.updater=No,t.stateNode=l,l._reactInternals=t,Jl(t,i,e,r),t=ra(null,t,i,!0,a,r)):(t.tag=0,je&&a&&zl(t),rt(null,t,l,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,l=i._init,i=l(i._payload),t.type=i,l=t.tag=Y0(i),e=Tt(i,e),l){case 0:t=na(null,t,i,e,r);break e;case 1:t=rf(null,t,i,e,r);break e;case 11:t=Zd(null,t,i,e,r);break e;case 14:t=Jd(null,t,i,Tt(i.type,e),r);break e}throw Error(s(306,i,""))}return t;case 0:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Tt(i,l),na(e,t,i,l,r);case 1:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Tt(i,l),rf(e,t,i,l,r);case 3:e:{if(of(t),e===null)throw Error(s(387));i=t.pendingProps,a=t.memoizedState,l=a.element,xd(e,t),jo(t,i,null,r);var c=t.memoizedState;if(i=c.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=mr(Error(s(423)),t),t=sf(e,t,i,r,l);break e}else if(i!==l){l=mr(Error(s(424)),t),t=sf(e,t,i,r,l);break e}else for(ht=fn(t.stateNode.containerInfo.firstChild),pt=t,je=!0,It=null,r=vd(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(cr(),i===l){t=tn(e,t,r);break e}rt(e,t,i,r)}t=t.child}return t;case 5:return kd(t),e===null&&$l(t),i=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,c=l.children,El(i,l)?c=null:a!==null&&El(i,a)&&(t.flags|=32),nf(e,t),rt(e,t,c,r),t.child;case 6:return e===null&&$l(t),null;case 13:return lf(e,t,r);case 4:return Fl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=dr(t,null,i,r):rt(e,t,i,r),t.child;case 11:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Tt(i,l),Zd(e,t,i,l,r);case 7:return rt(e,t,t.pendingProps,r),t.child;case 8:return rt(e,t,t.pendingProps.children,r),t.child;case 12:return rt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,l=t.pendingProps,a=t.memoizedProps,c=l.value,Ee(_o,i._currentValue),i._currentValue=c,a!==null)if(zt(a.value,c)){if(a.children===l.children&&!ot.current){t=tn(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var p=a.dependencies;if(p!==null){c=a.child;for(var m=p.firstContext;m!==null;){if(m.context===i){if(a.tag===1){m=en(-1,r&-r),m.tag=2;var _=a.updateQueue;if(_!==null){_=_.shared;var N=_.pending;N===null?m.next=m:(m.next=N.next,N.next=m),_.pending=m}}a.lanes|=r,m=a.alternate,m!==null&&(m.lanes|=r),bl(a.return,r,t),p.lanes|=r;break}m=m.next}}else if(a.tag===10)c=a.type===t.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(s(341));c.lanes|=r,p=c.alternate,p!==null&&(p.lanes|=r),bl(c,r,t),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}rt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,i=t.pendingProps.children,pr(t,r),l=wt(l),i=i(l),t.flags|=1,rt(e,t,i,r),t.child;case 14:return i=t.type,l=Tt(i,t.pendingProps),l=Tt(i.type,l),Jd(e,t,i,l,r);case 15:return ef(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Tt(i,l),Do(e,t),t.tag=1,st(i)?(e=!0,yo(t)):e=!1,pr(t,r),Wd(t,i,l),Jl(t,i,l,r),ra(null,t,i,!0,e,r);case 19:return uf(e,t,r);case 22:return tf(e,t,r)}throw Error(s(156,t.tag))};function Lf(e,t){return dc(e,t)}function G0(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,r,i){return new G0(e,t,r,i)}function Ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Y0(e){if(typeof e=="function")return Ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===nt)return 14}return 2}function En(e,t){var r=e.alternate;return r===null?(r=Et(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Go(e,t,r,i,l,a){var c=2;if(i=e,typeof e=="function")Ea(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case K:return Hn(r.children,l,a,t);case ke:c=8,l|=8;break;case we:return e=Et(12,r,t,l|2),e.elementType=we,e.lanes=a,e;case Re:return e=Et(13,r,t,l),e.elementType=Re,e.lanes=a,e;case Oe:return e=Et(19,r,t,l),e.elementType=Oe,e.lanes=a,e;case Se:return Yo(r,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:c=10;break e;case Le:c=9;break e;case Te:c=11;break e;case nt:c=14;break e;case Fe:c=16,i=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Et(c,r,t,l),t.elementType=e,t.type=i,t.lanes=a,t}function Hn(e,t,r,i){return e=Et(7,e,i,t),e.lanes=r,e}function Yo(e,t,r,i){return e=Et(22,e,i,t),e.elementType=Se,e.lanes=r,e.stateNode={isHidden:!1},e}function _a(e,t,r){return e=Et(6,e,null,t),e.lanes=r,e}function Ca(e,t,r){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function K0(e,t,r,i,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pa(e,t,r,i,l,a,c,p,m){return e=new K0(e,t,r,p,m),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Et(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(a),e}function q0(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Nf(e){if(!e)return hn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(st(r))return ld(e,r,t)}return t}function Af(e,t,r,i,l,a,c,p,m){return e=Pa(r,i,!0,e,l,a,c,p,m),e.context=Nf(null),r=e.current,i=it(),l=Sn(r),a=en(i,l),a.callback=t??null,vn(r,a,l),e.current.lanes=l,Vr(e,l,i),ut(e,i),e}function Ko(e,t,r,i){var l=t.current,a=it(),c=Sn(l);return r=Nf(r),t.context===null?t.context=r:t.pendingContext=r,t=en(a,c),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=vn(l,t,c),e!==null&&(Nt(e,l,c,a),Po(e,l,c)),c}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ja(e,t){Df(e,t),(e=e.alternate)&&Df(e,t)}function X0(){return null}var bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ra(e){this._internalRoot=e}Xo.prototype.render=Ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ko(e,t,null,null)},Xo.prototype.unmount=Ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){Ko(null,e,null,null)}),t[Kt]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<un.length&&t!==0&&t<un[r].priority;r++);un.splice(r,0,e),r===0&&kc(e)}};function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mf(){}function Z0(e,t,r,i,l){if(l){if(typeof i=="function"){var a=i;i=function(){var _=qo(c);a.call(_)}}var c=Af(t,i,e,0,null,!1,!1,"",Mf);return e._reactRootContainer=c,e[Kt]=c.current,ti(e.nodeType===8?e.parentNode:e),Vn(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof i=="function"){var p=i;i=function(){var _=qo(m);p.call(_)}}var m=Pa(e,0,!1,null,null,!1,!1,"",Mf);return e._reactRootContainer=m,e[Kt]=m.current,ti(e.nodeType===8?e.parentNode:e),Vn(function(){Ko(t,m,r,i)}),m}function Jo(e,t,r,i,l){var a=r._reactRootContainer;if(a){var c=a;if(typeof l=="function"){var p=l;l=function(){var m=qo(c);p.call(m)}}Ko(t,c,e,l)}else c=Z0(r,t,e,l,i);return qo(c)}vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fr(t.pendingLanes);r!==0&&(Js(t,r|1),ut(t,Ne()),(ge&6)===0&&(yr=Ne()+500,mn()))}break;case 13:Vn(function(){var i=Jt(e,1);if(i!==null){var l=it();Nt(i,e,1,l)}}),ja(e,1)}},el=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var r=it();Nt(t,e,134217728,r)}ja(e,134217728)}},yc=function(e){if(e.tag===13){var t=Sn(e),r=Jt(e,t);if(r!==null){var i=it();Nt(r,e,t,i)}ja(e,t)}},xc=function(){return xe},wc=function(e,t){var r=xe;try{return xe=e,t()}finally{xe=r}},Qs=function(e,t,r){switch(t){case"input":if(Ms(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var l=go(i);if(!l)throw Error(s(90));jt(i),Ms(i,l)}}}break;case"textarea":Ku(e,r);break;case"select":t=r.value,t!=null&&Kn(e,!!r.multiple,t,!1)}},ic=wa,oc=Vn;var J0={usingClientEntryPoint:!1,Events:[ii,or,go,nc,rc,wa]},yi={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eg={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uc(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||X0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!es.isDisabled&&es.supportsFiber)try{qi=es.inject(eg),Ot=es}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0,ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(t))throw Error(s(200));return q0(e,t,null,r)},ct.createRoot=function(e,t){if(!za(e))throw Error(s(299));var r=!1,i="",l=bf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Pa(e,1,!1,null,null,r,!1,i,l),e[Kt]=t.current,ti(e.nodeType===8?e.parentNode:e),new Ra(t)},ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=uc(t),e=e===null?null:e.stateNode,e},ct.flushSync=function(e){return Vn(e)},ct.hydrate=function(e,t,r){if(!Zo(t))throw Error(s(200));return Jo(null,e,t,!0,r)},ct.hydrateRoot=function(e,t,r){if(!za(e))throw Error(s(405));var i=r!=null&&r.hydratedSources||null,l=!1,a="",c=bf;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=Af(t,null,e,1,r??null,l,!1,a,c),e[Kt]=t.current,ti(e),i)for(e=0;e<i.length;e++)r=i[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Xo(t)},ct.render=function(e,t,r){if(!Zo(t))throw Error(s(200));return Jo(null,e,t,!1,r)},ct.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(s(40));return e._reactRootContainer?(Vn(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1},ct.unstable_batchedUpdates=wa,ct.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Zo(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Jo(e,t,r,!1,i)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var Qf;function Fp(){if(Qf)return $a.exports;Qf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),$a.exports=lg(),$a.exports}var Gf;function ag(){if(Gf)return ts;Gf=1;var n=Fp();return ts.createRoot=n.createRoot,ts.hydrateRoot=n.hydrateRoot,ts}var ug=ag();const cg=Op(ug);var tt=function(){return tt=Object.assign||function(o){for(var s,u=1,d=arguments.length;u<d;u++){s=arguments[u];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(o[f]=s[f])}return o},tt.apply(this,arguments)};function Cr(n,o,s){if(s||arguments.length===2)for(var u=0,d=o.length,f;u<d;u++)(f||!(u in o))&&(f||(f=Array.prototype.slice.call(o,0,u)),f[u]=o[u]);return n.concat(f||Array.prototype.slice.call(o))}var Pe="-ms-",ji="-moz-",ye="-webkit-",Vp="comm",ks="rule",Su="decl",dg="@import",Up="@keyframes",fg="@layer",Bp=Math.abs,ku=String.fromCharCode,Ja=Object.assign;function pg(n,o){return Ge(n,0)^45?(((o<<2^Ge(n,0))<<2^Ge(n,1))<<2^Ge(n,2))<<2^Ge(n,3):0}function Hp(n){return n.trim()}function rn(n,o){return(n=o.exec(n))?n[0]:n}function fe(n,o,s){return n.replace(o,s)}function ss(n,o,s){return n.indexOf(o,s)}function Ge(n,o){return n.charCodeAt(o)|0}function Pr(n,o,s){return n.slice(o,s)}function Wt(n){return n.length}function Wp(n){return n.length}function _i(n,o){return o.push(n),n}function hg(n,o){return n.map(o).join("")}function Yf(n,o){return n.filter(function(s){return!rn(s,o)})}var Es=1,jr=1,Qp=0,Pt=0,be=0,$r="";function _s(n,o,s,u,d,f,h,x){return{value:n,root:o,parent:s,type:u,props:d,children:f,line:Es,column:jr,length:h,return:"",siblings:x}}function Pn(n,o){return Ja(_s("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function wr(n){for(;n.root;)n=Pn(n.root,{children:[n]});_i(n,n.siblings)}function mg(){return be}function gg(){return be=Pt>0?Ge($r,--Pt):0,jr--,be===10&&(jr=1,Es--),be}function bt(){return be=Pt<Qp?Ge($r,Pt++):0,jr++,be===10&&(jr=1,Es++),be}function Gn(){return Ge($r,Pt)}function ls(){return Pt}function Cs(n,o){return Pr($r,n,o)}function eu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vg(n){return Es=jr=1,Qp=Wt($r=n),Pt=0,[]}function yg(n){return $r="",n}function Aa(n){return Hp(Cs(Pt-1,tu(n===91?n+2:n===40?n+1:n)))}function xg(n){for(;(be=Gn())&&be<33;)bt();return eu(n)>2||eu(be)>3?"":" "}function wg(n,o){for(;--o&&bt()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Cs(n,ls()+(o<6&&Gn()==32&&bt()==32))}function tu(n){for(;bt();)switch(be){case n:return Pt;case 34:case 39:n!==34&&n!==39&&tu(be);break;case 40:n===41&&tu(n);break;case 92:bt();break}return Pt}function Sg(n,o){for(;bt()&&n+be!==57;)if(n+be===84&&Gn()===47)break;return"/*"+Cs(o,Pt-1)+"*"+ku(n===47?n:bt())}function kg(n){for(;!eu(Gn());)bt();return Cs(n,Pt)}function Eg(n){return yg(as("",null,null,null,[""],n=vg(n),0,[0],n))}function as(n,o,s,u,d,f,h,x,S){for(var w=0,P=0,C=h,I=0,j=0,A=0,T=1,M=1,U=1,W=0,V="",G=d,re=f,ie=u,K=V;M;)switch(A=W,W=bt()){case 40:if(A!=108&&Ge(K,C-1)==58){ss(K+=fe(Aa(W),"&","&\f"),"&\f",Bp(w?x[w-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:K+=Aa(W);break;case 9:case 10:case 13:case 32:K+=xg(A);break;case 92:K+=wg(ls()-1,7);continue;case 47:switch(Gn()){case 42:case 47:_i(_g(Sg(bt(),ls()),o,s,S),S);break;default:K+="/"}break;case 123*T:x[w++]=Wt(K)*U;case 125*T:case 59:case 0:switch(W){case 0:case 125:M=0;case 59+P:U==-1&&(K=fe(K,/\f/g,"")),j>0&&Wt(K)-C&&_i(j>32?qf(K+";",u,s,C-1,S):qf(fe(K," ","")+";",u,s,C-2,S),S);break;case 59:K+=";";default:if(_i(ie=Kf(K,o,s,w,P,d,x,V,G=[],re=[],C,f),f),W===123)if(P===0)as(K,o,ie,ie,G,f,C,x,re);else switch(I===99&&Ge(K,3)===110?100:I){case 100:case 108:case 109:case 115:as(n,ie,ie,u&&_i(Kf(n,ie,ie,0,0,d,x,V,d,G=[],C,re),re),d,re,C,x,u?G:re);break;default:as(K,ie,ie,ie,[""],re,0,x,re)}}w=P=j=0,T=U=1,V=K="",C=h;break;case 58:C=1+Wt(K),j=A;default:if(T<1){if(W==123)--T;else if(W==125&&T++==0&&gg()==125)continue}switch(K+=ku(W),W*T){case 38:U=P>0?1:(K+="\f",-1);break;case 44:x[w++]=(Wt(K)-1)*U,U=1;break;case 64:Gn()===45&&(K+=Aa(bt())),I=Gn(),P=C=Wt(V=K+=kg(ls())),W++;break;case 45:A===45&&Wt(K)==2&&(T=0)}}return f}function Kf(n,o,s,u,d,f,h,x,S,w,P,C){for(var I=d-1,j=d===0?f:[""],A=Wp(j),T=0,M=0,U=0;T<u;++T)for(var W=0,V=Pr(n,I+1,I=Bp(M=h[T])),G=n;W<A;++W)(G=Hp(M>0?j[W]+" "+V:fe(V,/&\f/g,j[W])))&&(S[U++]=G);return _s(n,o,s,d===0?ks:x,S,w,P,C)}function _g(n,o,s,u){return _s(n,o,s,Vp,ku(mg()),Pr(n,2,-2),0,u)}function qf(n,o,s,u,d){return _s(n,o,s,Su,Pr(n,0,u),Pr(n,u+1,-1),u,d)}function Gp(n,o,s){switch(pg(n,o)){case 5103:return ye+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+n+n;case 4789:return ji+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+n+ji+n+Pe+n+n;case 5936:switch(Ge(n,o+11)){case 114:return ye+n+Pe+fe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ye+n+Pe+fe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ye+n+Pe+fe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ye+n+Pe+n+n;case 6165:return ye+n+Pe+"flex-"+n+n;case 5187:return ye+n+fe(n,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Pe+"flex-$1$2")+n;case 5443:return ye+n+Pe+"flex-item-"+fe(n,/flex-|-self/g,"")+(rn(n,/flex-|baseline/)?"":Pe+"grid-row-"+fe(n,/flex-|-self/g,""))+n;case 4675:return ye+n+Pe+"flex-line-pack"+fe(n,/align-content|flex-|-self/g,"")+n;case 5548:return ye+n+Pe+fe(n,"shrink","negative")+n;case 5292:return ye+n+Pe+fe(n,"basis","preferred-size")+n;case 6060:return ye+"box-"+fe(n,"-grow","")+ye+n+Pe+fe(n,"grow","positive")+n;case 4554:return ye+fe(n,/([^-])(transform)/g,"$1"+ye+"$2")+n;case 6187:return fe(fe(fe(n,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),n,"")+n;case 5495:case 3959:return fe(n,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return fe(fe(n,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+n+n;case 4200:if(!rn(n,/flex-|baseline/))return Pe+"grid-column-align"+Pr(n,o)+n;break;case 2592:case 3360:return Pe+fe(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(u,d){return o=d,rn(u.props,/grid-\w+-end/)})?~ss(n+(s=s[o].value),"span",0)?n:Pe+fe(n,"-start","")+n+Pe+"grid-row-span:"+(~ss(s,"span",0)?rn(s,/\d+/):+rn(s,/\d+/)-+rn(n,/\d+/))+";":Pe+fe(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(u){return rn(u.props,/grid-\w+-start/)})?n:Pe+fe(fe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return fe(n,/(.+)-inline(.+)/,ye+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(n)-1-o>6)switch(Ge(n,o+1)){case 109:if(Ge(n,o+4)!==45)break;case 102:return fe(n,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+ji+(Ge(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~ss(n,"stretch",0)?Gp(fe(n,"stretch","fill-available"),o,s)+n:n}break;case 5152:case 5920:return fe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,f,h,x,S,w){return Pe+d+":"+f+w+(h?Pe+d+"-span:"+(x?S:+S-+f)+w:"")+n});case 4949:if(Ge(n,o+6)===121)return fe(n,":",":"+ye)+n;break;case 6444:switch(Ge(n,Ge(n,14)===45?18:11)){case 120:return fe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Ge(n,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Pe+"$2box$3")+n;case 100:return fe(n,":",":"+Pe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(n,"scroll-","scroll-snap-")+n}return n}function ps(n,o){for(var s="",u=0;u<n.length;u++)s+=o(n[u],u,n,o)||"";return s}function Cg(n,o,s,u){switch(n.type){case fg:if(n.children.length)break;case dg:case Su:return n.return=n.return||n.value;case Vp:return"";case Up:return n.return=n.value+"{"+ps(n.children,u)+"}";case ks:if(!Wt(n.value=n.props.join(",")))return""}return Wt(s=ps(n.children,u))?n.return=n.value+"{"+s+"}":""}function Pg(n){var o=Wp(n);return function(s,u,d,f){for(var h="",x=0;x<o;x++)h+=n[x](s,u,d,f)||"";return h}}function jg(n){return function(o){o.root||(o=o.return)&&n(o)}}function Rg(n,o,s,u){if(n.length>-1&&!n.return)switch(n.type){case Su:n.return=Gp(n.value,n.length,s);return;case Up:return ps([Pn(n,{value:fe(n.value,"@","@"+ye)})],u);case ks:if(n.length)return hg(s=n.props,function(d){switch(rn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wr(Pn(n,{props:[fe(d,/:(read-\w+)/,":"+ji+"$1")]})),wr(Pn(n,{props:[d]})),Ja(n,{props:Yf(s,u)});break;case"::placeholder":wr(Pn(n,{props:[fe(d,/:(plac\w+)/,":"+ye+"input-$1")]})),wr(Pn(n,{props:[fe(d,/:(plac\w+)/,":"+ji+"$1")]})),wr(Pn(n,{props:[fe(d,/:(plac\w+)/,Pe+"input-$1")]})),wr(Pn(n,{props:[d]})),Ja(n,{props:Yf(s,u)});break}return""})}}var zg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gt={},Rr=typeof process<"u"&&gt!==void 0&&(gt.REACT_APP_SC_ATTR||gt.SC_ATTR)||"data-styled",Yp="active",Kp="data-styled-version",Ps="6.1.19",Eu=`/*!sc*/
`,hs=typeof window<"u"&&typeof document<"u",Ig=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&gt!==void 0&&gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&gt.REACT_APP_SC_DISABLE_SPEEDY!==""?gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&gt!==void 0&&gt.SC_DISABLE_SPEEDY!==void 0&&gt.SC_DISABLE_SPEEDY!==""&&gt.SC_DISABLE_SPEEDY!=="false"&&gt.SC_DISABLE_SPEEDY),Tg={},js=Object.freeze([]),zr=Object.freeze({});function qp(n,o,s){return s===void 0&&(s=zr),n.theme!==s.theme&&n.theme||o||s.theme}var Xp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$g=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lg=/(^-|-$)/g;function Xf(n){return n.replace($g,"-").replace(Lg,"")}var Ng=/(a)(d)/gi,ns=52,Zf=function(n){return String.fromCharCode(n+(n>25?39:97))};function nu(n){var o,s="";for(o=Math.abs(n);o>ns;o=o/ns|0)s=Zf(o%ns)+s;return(Zf(o%ns)+s).replace(Ng,"$1-$2")}var Da,Zp=5381,kr=function(n,o){for(var s=o.length;s;)n=33*n^o.charCodeAt(--s);return n},Jp=function(n){return kr(Zp,n)};function _u(n){return nu(Jp(n)>>>0)}function Ag(n){return n.displayName||n.name||"Component"}function ba(n){return typeof n=="string"&&!0}var eh=typeof Symbol=="function"&&Symbol.for,th=eh?Symbol.for("react.memo"):60115,Dg=eh?Symbol.for("react.forward_ref"):60112,bg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Og=((Da={})[Dg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Da[th]=nh,Da);function Jf(n){return("type"in(o=n)&&o.type.$$typeof)===th?nh:"$$typeof"in n?Og[n.$$typeof]:bg;var o}var Fg=Object.defineProperty,Vg=Object.getOwnPropertyNames,ep=Object.getOwnPropertySymbols,Ug=Object.getOwnPropertyDescriptor,Bg=Object.getPrototypeOf,tp=Object.prototype;function rh(n,o,s){if(typeof o!="string"){if(tp){var u=Bg(o);u&&u!==tp&&rh(n,u,s)}var d=Vg(o);ep&&(d=d.concat(ep(o)));for(var f=Jf(n),h=Jf(o),x=0;x<d.length;++x){var S=d[x];if(!(S in Mg||s&&s[S]||h&&S in h||f&&S in f)){var w=Ug(o,S);try{Fg(n,S,w)}catch{}}}}return n}function Ir(n){return typeof n=="function"}function Cu(n){return typeof n=="object"&&"styledComponentId"in n}function Qn(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function ms(n,o){if(n.length===0)return"";for(var s=n[0],u=1;u<n.length;u++)s+=n[u];return s}function $i(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ru(n,o,s){if(s===void 0&&(s=!1),!s&&!$i(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)n[u]=ru(n[u],o[u]);else if($i(o))for(var u in o)n[u]=ru(n[u],o[u]);return n}function Pu(n,o){Object.defineProperty(n,"toString",{value:o})}function Vi(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Hg=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var s=0,u=0;u<o;u++)s+=this.groupSizes[u];return s},n.prototype.insertRules=function(o,s){if(o>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,f=d;o>=f;)if((f<<=1)<0)throw Vi(16,"".concat(o));this.groupSizes=new Uint32Array(f),this.groupSizes.set(u),this.length=f;for(var h=d;h<f;h++)this.groupSizes[h]=0}for(var x=this.indexOfGroup(o+1),S=(h=0,s.length);h<S;h++)this.tag.insertRule(x,s[h])&&(this.groupSizes[o]++,x++)},n.prototype.clearGroup=function(o){if(o<this.length){var s=this.groupSizes[o],u=this.indexOfGroup(o),d=u+s;this.groupSizes[o]=0;for(var f=u;f<d;f++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(o){var s="";if(o>=this.length||this.groupSizes[o]===0)return s;for(var u=this.groupSizes[o],d=this.indexOfGroup(o),f=d+u,h=d;h<f;h++)s+="".concat(this.tag.getRule(h)).concat(Eu);return s},n})(),us=new Map,gs=new Map,cs=1,rs=function(n){if(us.has(n))return us.get(n);for(;gs.has(cs);)cs++;var o=cs++;return us.set(n,o),gs.set(o,n),o},Wg=function(n,o){cs=o+1,us.set(n,o),gs.set(o,n)},Qg="style[".concat(Rr,"][").concat(Kp,'="').concat(Ps,'"]'),Gg=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yg=function(n,o,s){for(var u,d=s.split(","),f=0,h=d.length;f<h;f++)(u=d[f])&&n.registerName(o,u)},Kg=function(n,o){for(var s,u=((s=o.textContent)!==null&&s!==void 0?s:"").split(Eu),d=[],f=0,h=u.length;f<h;f++){var x=u[f].trim();if(x){var S=x.match(Gg);if(S){var w=0|parseInt(S[1],10),P=S[2];w!==0&&(Wg(P,w),Yg(n,P,S[3]),n.getTag().insertRules(w,d)),d.length=0}else d.push(x)}}},np=function(n){for(var o=document.querySelectorAll(Qg),s=0,u=o.length;s<u;s++){var d=o[s];d&&d.getAttribute(Rr)!==Yp&&(Kg(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function qg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ih=function(n){var o=document.head,s=n||o,u=document.createElement("style"),d=(function(x){var S=Array.from(x.querySelectorAll("style[".concat(Rr,"]")));return S[S.length-1]})(s),f=d!==void 0?d.nextSibling:null;u.setAttribute(Rr,Yp),u.setAttribute(Kp,Ps);var h=qg();return h&&u.setAttribute("nonce",h),s.insertBefore(u,f),u},Xg=(function(){function n(o){this.element=ih(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var u=document.styleSheets,d=0,f=u.length;d<f;d++){var h=u[d];if(h.ownerNode===s)return h}throw Vi(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,s){try{return this.sheet.insertRule(s,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var s=this.sheet.cssRules[o];return s&&s.cssText?s.cssText:""},n})(),Zg=(function(){function n(o){this.element=ih(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,s){if(o<=this.length&&o>=0){var u=document.createTextNode(s);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),Jg=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,s){return o<=this.length&&(this.rules.splice(o,0,s),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),rp=hs,ev={isServer:!hs,useCSSOMInjection:!Ig},vs=(function(){function n(o,s,u){o===void 0&&(o=zr),s===void 0&&(s={});var d=this;this.options=tt(tt({},ev),o),this.gs=s,this.names=new Map(u),this.server=!!o.isServer,!this.server&&hs&&rp&&(rp=!1,np(this)),Pu(this,function(){return(function(f){for(var h=f.getTag(),x=h.length,S="",w=function(C){var I=(function(U){return gs.get(U)})(C);if(I===void 0)return"continue";var j=f.names.get(I),A=h.getGroup(C);if(j===void 0||!j.size||A.length===0)return"continue";var T="".concat(Rr,".g").concat(C,'[id="').concat(I,'"]'),M="";j!==void 0&&j.forEach(function(U){U.length>0&&(M+="".concat(U,","))}),S+="".concat(A).concat(T,'{content:"').concat(M,'"}').concat(Eu)},P=0;P<x;P++)w(P);return S})(d)})}return n.registerId=function(o){return rs(o)},n.prototype.rehydrate=function(){!this.server&&hs&&np(this)},n.prototype.reconstructWithOptions=function(o,s){return s===void 0&&(s=!0),new n(tt(tt({},this.options),o),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(s){var u=s.useCSSOMInjection,d=s.target;return s.isServer?new Jg(d):u?new Xg(d):new Zg(d)})(this.options),new Hg(o)));var o},n.prototype.hasNameForId=function(o,s){return this.names.has(o)&&this.names.get(o).has(s)},n.prototype.registerName=function(o,s){if(rs(o),this.names.has(o))this.names.get(o).add(s);else{var u=new Set;u.add(s),this.names.set(o,u)}},n.prototype.insertRules=function(o,s,u){this.registerName(o,s),this.getTag().insertRules(rs(o),u)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(rs(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),tv=/&/g,nv=/^\s*\/\/.*$/gm;function oh(n,o){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(o," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(o," ")),s.props=s.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=oh(s.children,o)),s})}function rv(n){var o,s,u,d=zr,f=d.options,h=f===void 0?zr:f,x=d.plugins,S=x===void 0?js:x,w=function(I,j,A){return A.startsWith(s)&&A.endsWith(s)&&A.replaceAll(s,"").length>0?".".concat(o):I},P=S.slice();P.push(function(I){I.type===ks&&I.value.includes("&")&&(I.props[0]=I.props[0].replace(tv,s).replace(u,w))}),h.prefix&&P.push(Rg),P.push(Cg);var C=function(I,j,A,T){j===void 0&&(j=""),A===void 0&&(A=""),T===void 0&&(T="&"),o=T,s=j,u=new RegExp("\\".concat(s,"\\b"),"g");var M=I.replace(nv,""),U=Eg(A||j?"".concat(A," ").concat(j," { ").concat(M," }"):M);h.namespace&&(U=oh(U,h.namespace));var W=[];return ps(U,Pg(P.concat(jg(function(V){return W.push(V)})))),W};return C.hash=S.length?S.reduce(function(I,j){return j.name||Vi(15),kr(I,j.name)},Zp).toString():"",C}var iv=new vs,iu=rv(),sh=Qt.createContext({shouldForwardProp:void 0,styleSheet:iv,stylis:iu});sh.Consumer;Qt.createContext(void 0);function ou(){return H.useContext(sh)}var lh=(function(){function n(o,s){var u=this;this.inject=function(d,f){f===void 0&&(f=iu);var h=u.name+f.hash;d.hasNameForId(u.id,h)||d.insertRules(u.id,h,f(u.rules,h,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=s,Pu(this,function(){throw Vi(12,String(u.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=iu),this.name+o.hash},n})(),ov=function(n){return n>="A"&&n<="Z"};function ip(n){for(var o="",s=0;s<n.length;s++){var u=n[s];if(s===1&&u==="-"&&n[0]==="-")return n;ov(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var ah=function(n){return n==null||n===!1||n===""},uh=function(n){var o,s,u=[];for(var d in n){var f=n[d];n.hasOwnProperty(d)&&!ah(f)&&(Array.isArray(f)&&f.isCss||Ir(f)?u.push("".concat(ip(d),":"),f,";"):$i(f)?u.push.apply(u,Cr(Cr(["".concat(d," {")],uh(f),!1),["}"],!1)):u.push("".concat(ip(d),": ").concat((o=d,(s=f)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||o in zg||o.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return u};function zn(n,o,s,u){if(ah(n))return[];if(Cu(n))return[".".concat(n.styledComponentId)];if(Ir(n)){if(!Ir(f=n)||f.prototype&&f.prototype.isReactComponent||!o)return[n];var d=n(o);return zn(d,o,s,u)}var f;return n instanceof lh?s?(n.inject(s,u),[n.getName(u)]):[n]:$i(n)?uh(n):Array.isArray(n)?Array.prototype.concat.apply(js,n.map(function(h){return zn(h,o,s,u)})):[n.toString()]}function ch(n){for(var o=0;o<n.length;o+=1){var s=n[o];if(Ir(s)&&!Cu(s))return!1}return!0}var sv=Jp(Ps),lv=(function(){function n(o,s,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&ch(o),this.componentId=s,this.baseHash=kr(sv,s),this.baseStyle=u,vs.registerId(s)}return n.prototype.generateAndInjectStyles=function(o,s,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,s,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))d=Qn(d,this.staticRulesId);else{var f=ms(zn(this.rules,o,s,u)),h=nu(kr(this.baseHash,f)>>>0);if(!s.hasNameForId(this.componentId,h)){var x=u(f,".".concat(h),void 0,this.componentId);s.insertRules(this.componentId,h,x)}d=Qn(d,h),this.staticRulesId=h}else{for(var S=kr(this.baseHash,u.hash),w="",P=0;P<this.rules.length;P++){var C=this.rules[P];if(typeof C=="string")w+=C;else if(C){var I=ms(zn(C,o,s,u));S=kr(S,I+P),w+=I}}if(w){var j=nu(S>>>0);s.hasNameForId(this.componentId,j)||s.insertRules(this.componentId,j,u(w,".".concat(j),void 0,this.componentId)),d=Qn(d,j)}}return d},n})(),ju=Qt.createContext(void 0);ju.Consumer;var Ma={};function av(n,o,s){var u=Cu(n),d=n,f=!ba(n),h=o.attrs,x=h===void 0?js:h,S=o.componentId,w=S===void 0?(function(G,re){var ie=typeof G!="string"?"sc":Xf(G);Ma[ie]=(Ma[ie]||0)+1;var K="".concat(ie,"-").concat(_u(Ps+ie+Ma[ie]));return re?"".concat(re,"-").concat(K):K})(o.displayName,o.parentComponentId):S,P=o.displayName,C=P===void 0?(function(G){return ba(G)?"styled.".concat(G):"Styled(".concat(Ag(G),")")})(n):P,I=o.displayName&&o.componentId?"".concat(Xf(o.displayName),"-").concat(o.componentId):o.componentId||w,j=u&&d.attrs?d.attrs.concat(x).filter(Boolean):x,A=o.shouldForwardProp;if(u&&d.shouldForwardProp){var T=d.shouldForwardProp;if(o.shouldForwardProp){var M=o.shouldForwardProp;A=function(G,re){return T(G,re)&&M(G,re)}}else A=T}var U=new lv(s,I,u?d.componentStyle:void 0);function W(G,re){return(function(ie,K,ke){var we=ie.attrs,Me=ie.componentStyle,Le=ie.defaultProps,Te=ie.foldedComponentIds,Re=ie.styledComponentId,Oe=ie.target,nt=Qt.useContext(ju),Fe=ou(),Se=ie.shouldForwardProp||Fe.shouldForwardProp,B=qp(K,nt,Le)||zr,J=(function(te,q,ae){for(var de,me=tt(tt({},q),{className:void 0,theme:ae}),Ve=0;Ve<te.length;Ve+=1){var Yt=Ir(de=te[Ve])?de(me):de;for(var jt in Yt)me[jt]=jt==="className"?Qn(me[jt],Yt[jt]):jt==="style"?tt(tt({},me[jt]),Yt[jt]):Yt[jt]}return q.className&&(me.className=Qn(me.className,q.className)),me})(we,K,B),Q=J.as||Oe,v={};for(var R in J)J[R]===void 0||R[0]==="$"||R==="as"||R==="theme"&&J.theme===B||(R==="forwardedAs"?v.as=J.forwardedAs:Se&&!Se(R,Q)||(v[R]=J[R]));var ue=(function(te,q){var ae=ou(),de=te.generateAndInjectStyles(q,ae.styleSheet,ae.stylis);return de})(Me,J),b=Qn(Te,Re);return ue&&(b+=" "+ue),J.className&&(b+=" "+J.className),v[ba(Q)&&!Xp.has(Q)?"class":"className"]=b,ke&&(v.ref=ke),H.createElement(Q,v)})(V,G,re)}W.displayName=C;var V=Qt.forwardRef(W);return V.attrs=j,V.componentStyle=U,V.displayName=C,V.shouldForwardProp=A,V.foldedComponentIds=u?Qn(d.foldedComponentIds,d.styledComponentId):"",V.styledComponentId=I,V.target=u?d.target:n,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(G){this._foldedDefaultProps=u?(function(re){for(var ie=[],K=1;K<arguments.length;K++)ie[K-1]=arguments[K];for(var ke=0,we=ie;ke<we.length;ke++)ru(re,we[ke],!0);return re})({},d.defaultProps,G):G}}),Pu(V,function(){return".".concat(V.styledComponentId)}),f&&rh(V,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function op(n,o){for(var s=[n[0]],u=0,d=o.length;u<d;u+=1)s.push(o[u],n[u+1]);return s}var sp=function(n){return Object.assign(n,{isCss:!0})};function Rs(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];if(Ir(n)||$i(n))return sp(zn(op(js,Cr([n],o,!0))));var u=n;return o.length===0&&u.length===1&&typeof u[0]=="string"?zn(u):sp(zn(op(u,o)))}function su(n,o,s){if(s===void 0&&(s=zr),!o)throw Vi(1,o);var u=function(d){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return n(o,s,Rs.apply(void 0,Cr([d],f,!1)))};return u.attrs=function(d){return su(n,o,tt(tt({},s),{attrs:Array.prototype.concat(s.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return su(n,o,tt(tt({},s),d))},u}var dh=function(n){return su(av,n)},z=dh;Xp.forEach(function(n){z[n]=dh(n)});var uv=(function(){function n(o,s){this.rules=o,this.componentId=s,this.isStatic=ch(o),vs.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,s,u,d){var f=d(ms(zn(this.rules,s,u,d)),""),h=this.componentId+o;u.insertRules(h,h,f)},n.prototype.removeStyles=function(o,s){s.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,s,u,d){o>2&&vs.registerId(this.componentId+o),this.removeStyles(o,u),this.createStyles(o,s,u,d)},n})();function cv(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var u=Rs.apply(void 0,Cr([n],o,!1)),d="sc-global-".concat(_u(JSON.stringify(u))),f=new uv(u,d),h=function(S){var w=ou(),P=Qt.useContext(ju),C=Qt.useRef(w.styleSheet.allocateGSInstance(d)).current;return w.styleSheet.server&&x(C,S,w.styleSheet,P,w.stylis),Qt.useLayoutEffect(function(){if(!w.styleSheet.server)return x(C,S,w.styleSheet,P,w.stylis),function(){return f.removeStyles(C,w.styleSheet)}},[C,S,w.styleSheet,P,w.stylis]),null};function x(S,w,P,C,I){if(f.isStatic)f.renderStyles(S,Tg,P,I);else{var j=tt(tt({},w),{theme:qp(w,C,h.defaultProps)});f.renderStyles(S,j,P,I)}}return Qt.memo(h)}function fh(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var u=ms(Rs.apply(void 0,Cr([n],o,!1))),d=_u(u);return new lh(d,u)}const dv={home:"Home",about:"About",projects:"Projects",contact:"Contact"},fv={greeting:"Hi, I'm",description:"I am a Front-End Web Developer with 8 years of experience in the web and video game industry, specializing in system development. I focus on writing clean, scalable, and intuitive code, making collaboration between developers easier and ensuring efficient maintenance.",downloadCV:"Download CV",roles:["Umberto Calogero","Front-End Developer","Creative","Player"]},pv={title:"Education & Skills",subtitle:"Showcasing your talent, amplifying your impact",items:[{title:"2014 - 2018",description:"Brief description of project 1.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Brief description of project 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Brief description of project 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"2012 - 2014",description:"Brief description of project 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]},hv={title:"My Works",items:[{title:"Project 1",description:"Description of project 1"},{title:"Project 2",description:"Description of project 2"},{title:"Project 3",description:"Description of project 3"},{title:"Project 4",description:"Description of project 4"},{title:"Project 5",description:"Description of project 5"},{title:"Project 6",description:"Description of project 6"}]},mv={title:"Get in Touch",subtitle:"Let's work together! Feel free to reach out for collaborations or just to say hello.",name:"Your Name",email:"Your Email",message:"Your Message",sendMessage:"SEND MESSAGE",sending:"SENDING...",messageSent:"✅ Message sent successfully!",messageError:"❌ Failed to send message:",fillAllFields:"Please fill all required fields.",securityViolation:"Security violation detected.",location:"Madrid, Spain",phone:"+34 647 14 08 18"},gv={allRightsReserved:"All rights reserved.",terms:"Terms & Conditions",privacy:"Privacy Policy",sitemap:"Site Map"},vv={italian:"Italian",spanish:"Spanish",english:"English",portuguese:"Portuguese"},yv={navbar:dv,presentation:fv,education:pv,portfolio:hv,contact:mv,footer:gv,languages:vv},xv={home:"Home",about:"Chi Sono",projects:"Progetti",contact:"Contatti"},wv={greeting:"Ciao, sono",description:"Sono uno Sviluppatore Web Front-End con 8 anni di esperienza nel settore web e dei videogiochi, specializzato nello sviluppo di sistemi. Mi concentro nella scrittura di codice pulito, scalabile e intuitivo, rendendo più facile la collaborazione tra sviluppatori e garantendo una manutenzione efficiente.",downloadCV:"Scarica CV",roles:["Umberto Calogero","Sviluppatore Front","Creativo","Giocatore"]},Sv={title:"Istruzione e competenze",subtitle:"Mostrando il tuo talento amplificando il tuo impatto",items:[{title:"2014 - 2018",description:"Breve descrizione del progetto 1.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Breve descrizione del progetto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Breve descrizione del progetto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"2012 - 2014",description:"Breve descrizione del progetto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]},kv={title:"I miei lavori",items:[{title:"Progetto 1",description:"Descrizione progetto 1"},{title:"Progetto 2",description:"Descrizione progetto 2"},{title:"Progetto 3",description:"Descrizione progetto 3"},{title:"Progetto 4",description:"Descrizione progetto 4"},{title:"Progetto 5",description:"Descrizione progetto 5"},{title:"Progetto 6",description:"Descrizione progetto 6"}]},Ev={title:"Contattami",subtitle:"Lavoriamo insieme! Sentiti libero di contattarmi per collaborazioni o semplicemente per salutare.",name:"Il Tuo Nome",email:"La Tua Email",message:"Il Tuo Messaggio",sendMessage:"INVIA MESSAGGIO",sending:"INVIO IN CORSO...",messageSent:"✅ Messaggio inviato con successo!",messageError:"❌ Invio messaggio fallito:",fillAllFields:"Si prega di compilare tutti i campi obbligatori.",securityViolation:"Violazione di sicurezza rilevata.",location:"Madrid, Spagna",phone:"+34 647 14 08 18"},_v={allRightsReserved:"Tutti i diritti riservati.",terms:"Termini e Condizioni",privacy:"Privacy Policy",sitemap:"Mappa del Sito"},Cv={italian:"Italiano",spanish:"Spagnolo",english:"Inglese",portuguese:"Portoghese"},Pv={navbar:xv,presentation:wv,education:Sv,portfolio:kv,contact:Ev,footer:_v,languages:Cv},jv={home:"Inicio",about:"Sobre mí",projects:"Proyectos",contact:"Contacto"},Rv={greeting:"Hola, soy",description:"Soy un Desarrollador Web Front-End con 8 años de experiencia en la industria web y de videojuegos, especializado en el desarrollo de sistemas. Me enfoco en escribir código limpio, escalable e intuitivo, facilitando la colaboración entre desarrolladores y garantizando un mantenimiento eficiente.",downloadCV:"Descargar CV",roles:["Umberto Calogero","Desarrollador Front-End","Creativo","Jugador"]},zv={title:"Educación y habilidades",subtitle:"Mostrando tu talento amplificando tu impacto",items:[{title:"2014 - 2018",description:"Breve descripción del proyecto 1.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Breve descripción del proyecto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Breve descripción del proyecto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"2012 - 2014",description:"Breve descripción del proyecto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]},Iv={title:"Mis trabajos",items:[{title:"Proyecto 1",description:"Descripción del proyecto 1"},{title:"Proyecto 2",description:"Descripción del proyecto 2"},{title:"Proyecto 3",description:"Descripción del proyecto 3"},{title:"Proyecto 4",description:"Descripción del proyecto 4"},{title:"Proyecto 5",description:"Descripción del proyecto 5"},{title:"Proyecto 6",description:"Descripción del proyecto 6"}]},Tv={title:"Ponte en contacto",subtitle:"¡Trabajemos juntos! No dudes en contactarme para colaboraciones o simplemente para saludar.",name:"Tu Nombre",email:"Tu Email",message:"Tu Mensaje",sendMessage:"ENVIAR MENSAJE",sending:"ENVIANDO...",messageSent:"✅ Mensaje enviado con éxito!",messageError:"❌ Error al enviar mensaje:",fillAllFields:"Por favor complete todos los campos obligatorios.",securityViolation:"Violación de seguridad detectada.",location:"Madrid, España",phone:"+34 647 14 08 18"},$v={allRightsReserved:"Todos los derechos reservados.",terms:"Términos y Condiciones",privacy:"Política de Privacidad",sitemap:"Mapa del Sitio"},Lv={italian:"Italiano",spanish:"Español",english:"Inglés",portuguese:"Portugués"},Nv={navbar:jv,presentation:Rv,education:zv,portfolio:Iv,contact:Tv,footer:$v,languages:Lv},Av={home:"Início",about:"Sobre Mim",projects:"Projetos",contact:"Contato"},Dv={greeting:"Olá, eu sou",description:"Sou um Desenvolvedor Web Front-End com 8 anos de experiência na indústria web e de videojogos, especializado no desenvolvimento de sistemas. Foco-me em escrever código limpo, escalável e intuitivo, facilitando a colaboração entre desenvolvedores e garantindo uma manutenção eficiente.",downloadCV:"Baixar CV",roles:["Umberto Calogero","Desenvolvedor Front-End","Criativo","Jogador"]},bv={title:"Educação e competências",subtitle:"Mostrando seu talento, amplificando seu impacto",items:[{title:"2014 - 2018",description:"Breve descrição do projeto 1.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Breve descrição do projeto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc"},{title:"2012 - 2014",description:"Breve descrição do projeto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"2012 - 2014",description:"Breve descrição do projeto 2.",subtitle:"Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]},Mv={title:"Meus trabalhos",items:[{title:"Projeto 1",description:"Descrição do projeto 1"},{title:"Projeto 2",description:"Descrição do projeto 2"},{title:"Projeto 3",description:"Descrição do projeto 3"},{title:"Projeto 4",description:"Descrição do projeto 4"},{title:"Projeto 5",description:"Descrição do projeto 5"},{title:"Projeto 6",description:"Descrição do projeto 6"}]},Ov={title:"Entre em contato",subtitle:"Vamos trabalhar juntos! Sinta-se à vontade para me contatar para colaborações ou apenas para dizer olá.",name:"Seu Nome",email:"Seu Email",message:"Sua Mensagem",sendMessage:"ENVIAR MENSAGEM",sending:"ENVIANDO...",messageSent:"✅ Mensagem enviada com sucesso!",messageError:"❌ Falha ao enviar mensagem:",fillAllFields:"Por favor, preencha todos os campos obrigatórios.",securityViolation:"Violação de segurança detectada.",location:"Madrid, Espanha",phone:"+34 647 14 08 18"},Fv={allRightsReserved:"Todos os direitos reservados.",terms:"Termos e Condições",privacy:"Política de Privacidade",sitemap:"Mapa do Site"},Vv={italian:"Italiano",spanish:"Espanhol",english:"Inglês",portuguese:"Português"},Uv={navbar:Av,presentation:Dv,education:bv,portfolio:Mv,contact:Ov,footer:Fv,languages:Vv},Bv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--twemoji'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cpath%20fill='%23CE2B37'%20d='M36%2027a4%204%200%200%201-4%204h-8V5h8a4%204%200%200%201%204%204v18z'%3e%3c/path%3e%3cpath%20fill='%23009246'%20d='M4%205a4%204%200%200%200-4%204v18a4%204%200%200%200%204%204h8V5H4z'%3e%3c/path%3e%3cpath%20fill='%23EEE'%20d='M12%205h12v26H12z'%3e%3c/path%3e%3c/svg%3e",Hv=""+new URL("es-Mt7v7oGZ.svg",import.meta.url).href,Wv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--twemoji'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cpath%20fill='%2300247D'%20d='M0%209.059V13h5.628zM4.664%2031H13v-5.837zM23%2025.164V31h8.335zM0%2023v3.941L5.63%2023zM31.337%205H23v5.837zM36%2026.942V23h-5.631zM36%2013V9.059L30.371%2013zM13%205H4.664L13%2010.837z'%3e%3c/path%3e%3cpath%20fill='%23CF1B2B'%20d='M25.14%2023l9.712%206.801a3.977%203.977%200%200%200%20.99-1.749L28.627%2023H25.14zM13%2023h-2.141l-9.711%206.8c.521.53%201.189.909%201.938%201.085L13%2023.943V23zm10-10h2.141l9.711-6.8a3.988%203.988%200%200%200-1.937-1.085L23%2012.057V13zm-12.141%200L1.148%206.2a3.994%203.994%200%200%200-.991%201.749L7.372%2013h3.487z'%3e%3c/path%3e%3cpath%20fill='%23EEE'%20d='M36%2021H21v10h2v-5.836L31.335%2031H32a3.99%203.99%200%200%200%202.852-1.199L25.14%2023h3.487l7.215%205.052c.093-.337.158-.686.158-1.052v-.058L30.369%2023H36v-2zM0%2021v2h5.63L0%2026.941V27c0%201.091.439%202.078%201.148%202.8l9.711-6.8H13v.943l-9.914%206.941c.294.07.598.116.914.116h.664L13%2025.163V31h2V21H0zM36%209a3.983%203.983%200%200%200-1.148-2.8L25.141%2013H23v-.943l9.915-6.942A4.001%204.001%200%200%200%2032%205h-.663L23%2010.837V5h-2v10h15v-2h-5.629L36%209.059V9zM13%205v5.837L4.664%205H4a3.985%203.985%200%200%200-2.852%201.2l9.711%206.8H7.372L.157%207.949A3.968%203.968%200%200%200%200%209v.059L5.628%2013H0v2h15V5h-2z'%3e%3c/path%3e%3cpath%20fill='%23CF1B2B'%20d='M21%2015V5h-6v10H0v6h15v10h6V21h15v-6z'%3e%3c/path%3e%3c/svg%3e",Qv=""+new URL("pt-BgMfjKbN.svg",import.meta.url).href,lp={en:yv,it:Pv,es:Nv,pt:Uv},ph=H.createContext(),Tn=()=>{const n=H.useContext(ph);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n},hh=({children:n})=>{const[o,s]=H.useState(()=>localStorage.getItem("language")||"it");H.useEffect(()=>{localStorage.setItem("language",o)},[o]);const f={currentLanguage:o,changeLanguage:h=>{lp[h]&&s(h)},t:(h,x="")=>{const S=h.split(".");let w=lp[o];for(const P of S)w=w?.[P];return w||x},availableLanguages:[{code:"it",name:"Italiano",flag:Bv},{code:"es",name:"Español",flag:Hv},{code:"en",name:"English",flag:Wv},{code:"pt",name:"Português",flag:Qv}]};return y.jsx(ph.Provider,{value:f,children:n})},Gv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABUUExURVXmpSFZRAIFCg0hHkvKkjWRakW8iErKkSx2WDaSawwhHVDYmyt1V0CtfjugdEW7iCdoTgcTFBIvJyZnTTufdECufhc9MTGEYhEvJhxLOxtLOjCDYZ8S/l4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEhSURBVFhH7ZXJEoJADERZxA03FPf//0+rTMdDV81MBuRC5d3eQTIderBwHMdxnKkpqy/1QrQRrZaiK+ha1ID+YgPdipaiv3EtPA0eUEN3ohXOu4dinAFNeBDlhDTOQDwhLdQAJTxCkbClcWk04QkeX6iBiSvDCXUc1EA8IS3UwL8rE0pIlbG/kXhCvoMGGgGBAwvt7AckRleGCH1loPnQQvO/MkSgMmdoPqMrQ1DCAZUhqDIX6Hwrg4T6CnrofCtDCXmhvXxCrlADVBk9Lw6o57UvlBIGFnqDpklUJv+PlCpDCfPvYCIhLdQAJQws9C5qIFGZh2jGHcQDpq6MJsS4JzQNJ3yJDq8MEoYq04mOrowmHF2Zt+jwyjiO4zjOIIriA0PLDOZ2IQNtAAAAAElFTkSuQmCC",Yv={tablet:640,laptop:1024,desktop:1440},L=Object.fromEntries(Object.entries(Yv).map(([n,o])=>[n,`@media screen and (min-width: ${o}px)`])),Kv=z.nav`
  background-color: var(--color-bg-dark);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  ${L.tablet} {
    padding-inline: var(--spacing-xl);
  }
`,qv=z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--spacing-md);
  ${L.desktop} {
    max-width: 1440px;
    margin-inline: auto;
  }
`,Xv=z.div``,Zv=z.img``,Jv=z.ul`
  border-block: 4px solid var(--color-accent);
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transform-origin: top;
  transform: scaleY(${n=>n.open?1:0});
  opacity: ${n=>n.open?1:0};
  transition: transform var(--transition-normal), opacity var(--transition-normal);
  padding: ${n=>n.open?"var(--spacing-md) 0":"0"};

  ${L.laptop} {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    background: transparent;
    padding: 0;
    transform: none;
    opacity: 1;
    pointer-events: auto;
    transition: none;
    border-block: none;
  }
`,is=z.a`
  color: #fff;
  font-size: var(--font-size-base);
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  transition: color var(--transition-fast);
  padding-inline: var(--spacing-lg);

  ${L.tablet} {
    padding-inline: var(--spacing-2xl);
  }
  ${L.laptop} {
    padding-inline: var(--spacing-xs);
  }

  @media (hover: hover) {
    &:hover { color: var(--color-accent); }
  }
`,e1=z.div`
  background-color: var(--color-accent);
  width: 80px;
  height: 80px;
  position: relative;
  transition: all var(--transition-normal);
  cursor: pointer;
  ${L.laptop} { display: none; }
`,t1=z.span`
  position: absolute;
  top: 38px;
  left: 24px;
  width: 32px;
  height: 4px;
  background-color: var(--color-bg-light);
  border-radius: 2px;
  transition: all var(--transition-normal);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 4px;
    left: 0;
    border-radius: 2px;
    background-color: var(--color-bg-light);
    transition: all var(--transition-normal);
  }
  &::before { top: -12px; }
  &::after { top: 12px; }

  ${n=>n.open&&`
    background-color: transparent;
    &::before { transform: translateY(12px) rotate(45deg); }
    &::after { transform: translateY(-12px) rotate(-45deg); }
  `}
`,n1=z.div`
  position: relative;
  padding:4px 24px;

  ${L.tablet} {
   padding:4px 48px;
  }

  ${L.laptop} {
   right:0;
   padding:0;
  }
`,r1=z.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid #4a5568; /* Grigio scuro */
  border-radius: 8px;
  width:150px;
  height:40px;
  padding-inline:15px;
  cursor: pointer;
  color: #e2e8f0; /* Grigio chiaro per il testo */
  font-family: inherit;
  font-size: 0.9rem;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  min-width: 120px;

  &:hover {
    background-color: #2d3748; /* Sfondo più scuro al passaggio del mouse */
    border-color: #718096;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(99, 179, 237, 0.5); /* Ombra per il focus */
  }
`,ap=z.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`,up=z.span`
  margin-right: auto;
  margin-left: 4px;
`,i1=z.span`
  font-size: 0.8rem;
  transition: transform 0.2s ease-in-out;
  transform: ${({$isOpen:n})=>n?"rotate(180deg)":"rotate(0deg)"};
`,o1=z.div`
  position: absolute;
  top: calc(100% + 5px);
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
  overflow: hidden;
  opacity: ${({$isOpen:n})=>n?"1":"0"};
  transform: ${({$isOpen:n})=>n?"translateY(0)":"translateY(-10px)"};
  visibility: ${({$isOpen:n})=>n?"visible":"hidden"};
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  ${L.laptop} {
    right:0;
    }
`,s1=z.div`
  width:150px;
  height:40px;
  padding-inline:25px;
  display: grid;
  grid-template-columns: 20px 1fr;
  gap:10px;
  align-items:center;
  cursor: pointer;
  color: #e2e8f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4a5568;
  }

  ${({$isActive:n})=>n&&Rs`
      background-color: #4299e1; /* Blu per l'elemento attivo */
      color: white;
    `}
`,l1=()=>{const{currentLanguage:n,changeLanguage:o,availableLanguages:s}=Tn(),[u,d]=H.useState(!1),f=s.find(S=>S.code===n),h=S=>{o(S),d(!1)},x=()=>{d(!u)};return y.jsxs(n1,{children:[y.jsxs(r1,{onClick:x,$isOpen:u,children:[y.jsx(ap,{src:f?.flag,alt:f?.name}),y.jsx(up,{children:f?.name}),y.jsx(i1,{$isOpen:u,children:"▼"})]}),y.jsx(o1,{$isOpen:u,children:s.map(S=>y.jsxs(s1,{onClick:()=>h(S.code),$isActive:S.code===n,children:[y.jsx(ap,{src:S.flag,alt:S.name}),y.jsx(up,{children:S.name})]},S.code))})]})},a1=()=>{const{t:n}=Tn(),[o,s]=H.useState(!1);return y.jsx(Kv,{children:y.jsxs(qv,{children:[y.jsx(Xv,{children:y.jsx(Zv,{src:Gv,alt:"Logo"})}),y.jsxs(Jv,{open:o,children:[y.jsx("li",{children:y.jsx(is,{href:"#home",onClick:()=>s(!1),children:n("navbar.home")})}),y.jsx("li",{children:y.jsx(is,{href:"#about",onClick:()=>s(!1),children:n("navbar.about")})}),y.jsx("li",{children:y.jsx(is,{href:"#portfolio",onClick:()=>s(!1),children:n("navbar.projects")})}),y.jsx("li",{children:y.jsx(is,{href:"#contact",onClick:()=>s(!1),children:n("navbar.contact")})}),y.jsx("li",{children:y.jsx(l1,{})})]}),y.jsx(e1,{onClick:()=>s(!o),"aria-label":"Toggle menu",children:y.jsx(t1,{open:o})})]})})},u1="Loading",cp=700,c1=1500,d1=z.div`
  background-color: var(--color-bg-dark);
  z-index: var(--z-preloader);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s;
  opacity: 1;
  transform: translateY(${n=>n.$hide?"-100vh":"0"});
`,f1=fh`
  0% { clip-path: circle(80px at -80px 50%); }
  100% { clip-path: circle(80px at calc(100% + 80px) 50%); }
`,p1=z.h5`
  font-size: clamp(2.5rem, 10vw, 6.25rem);
  font-weight: bold;
  position: relative;
  margin: 0;
  color: var(--color-text-dark);
  opacity: ${n=>n.hide?0:1};
  transition: opacity 0.7s;

  &::after {
    content: 'Loading';
    position: absolute;
    left: 0;
    top: 0;
    animation: ${f1} 2s infinite alternate;
    color: var(--color-accent);
  }
`,h1=({hideText:n,hidePreloader:o})=>y.jsx(d1,{$hide:o,children:y.jsx(p1,{$hide:n,className:"text-large-bold",children:u1})}),m1=""+new URL("foto-profilo-DWdMLUV2.png",import.meta.url).href,g1=""+new URL("CV-UmbertoCalogeroMessina-D2KoQh-k.pdf",import.meta.url).href,v1=z.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height:40px;
  cursor: pointer;
  opacity: ${n=>n.isVisible?1:0};
  visibility: ${n=>n.isVisible?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateX(-50%) translateY(-5px);
    background-color: var(--color-accent);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,y1=z.span`
  font-size: 16px;
  color: white;
  font-weight: bold;
`,x1=({isLoading:n=!1})=>{const[o,s]=H.useState(!1);H.useEffect(()=>{const d=()=>{const f=window.scrollY;s(!n&&f<50)};return s(!n&&window.scrollY<50),window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[n]);const u=()=>{const d=document.getElementById("about");d&&d.scrollIntoView({behavior:"smooth"})};return y.jsx(v1,{onClick:u,isVisible:o,children:y.jsx(y1,{children:"↓"})})},w1=""+new URL("banner-scaled-DA2aLGsP.jpg",import.meta.url).href,S1=""+new URL("banner_shape-C0Aeru38.png",import.meta.url).href,k1=z.section`
  background-image: url(${w1});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 180px;

  ${L.laptop} {
    background-position: center;
    padding-bottom: 100px;
  }
  ${L.desktop} {
    padding-top: 0;
    height: 100vh;
    display: grid;
  }
`,E1=z.div`
  display: grid;
  gap: var(--spacing-2xl);
  align-items: center;
  padding-inline: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);

  ${L.tablet} { 
    padding-top: var(--spacing-2xl);

   }
  ${L.laptop} {
    max-width: 1500px;
    margin-inline: auto;
    padding-inline: var(--spacing-3xl);
    padding-bottom: 0;
    grid-template-columns: 1.5fr 0.5fr;
  }
`,_1=z.div`
  order: 1; /* testo prima dell'immagine su mobile */
  ${L.laptop} {
    padding-block: var(--spacing-xl);
    order: 0; /* testo prima dell'immagine su desktop */
  }
`,C1=z.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  line-height: 1.15;
  font-weight: 800;
  color: var(--color-accent);
  ${L.tablet} { font-size: 30px; }
  ${L.desktop} { font-size: 50px; }
`,P1=z.h1`
  color: var(--color-accent);
  height: 1.15em;
  font-size: 20px;
  line-height: 1.15;
  font-weight: 800;
  ${L.tablet} { font-size: 30px; }
  ${L.desktop} { font-size: 50px; }
`,j1=z.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 15px;
  margin-bottom: 30px;
  ${L.tablet} {
    font-size: 20px;
    margin-bottom: 60px;
  }
  ${L.desktop} { font-size: 25px; }
`,R1=z.div`
  display: flex;
  justify-content: center;
  ${L.tablet} { justify-content: flex-start; }
`,z1=z.a`
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: opacity var(--transition-fast);
  @media (hover: hover) {
    &:hover { opacity: 0.75; }
  }
`,I1=z(z1)`
  background: var(--color-accent);
  color: #111;
`,T1=z.div`
  ${L.laptop} {
    display: grid;
    place-items: center;
  }
`,$1=z.div`
  position: relative;
  width: clamp(220px, 40vw, 520px);
  aspect-ratio: 1/1;
  display: grid;
`,L1=fh`
  0% { transform: translate(0, 0); }
  25% { transform: translate(20px, -20px); }
  50% { transform: translate(60px, 0); }
  75% { transform: translate(20px, 20px); }
  100% { transform: translate(0, 0); }
`,N1=z.img`
  width: 70%;
  background-image: url(${S1});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 15px;
  position: absolute;
  top: -30px;
  left: 0;
  ${L.laptop} {
    position: static; /* rientra nel flusso */
    display: block;
    width: 100%;
    padding: 35px;
    animation: ${L1} 4s infinite linear;
  }
`,A1=150,D1=100,b1=900,M1=({isLoading:n=!1})=>{const{t:o}=Tn(),[s,u]=H.useState(0),[d,f]=H.useState(""),[h,x]=H.useState(!1),S=o("presentation.roles",{returnObjects:!0})||[];return H.useEffect(()=>{const w=S[s];let P;return h?d.length>0?P=setTimeout(()=>{f(w.slice(0,d.length-1))},D1):(x(!1),u(C=>(C+1)%S.length)):d.length<w.length?P=setTimeout(()=>{f(w.slice(0,d.length+1))},A1):P=setTimeout(()=>x(!0),b1),()=>clearTimeout(P)},[d,h,s]),y.jsxs(k1,{id:"home",children:[y.jsxs(E1,{children:[y.jsxs(_1,{children:[y.jsxs(C1,{children:[y.jsx("span",{children:o("presentation.greeting")}),y.jsx(P1,{children:d})]}),y.jsx(j1,{children:o("presentation.description")}),y.jsx(R1,{children:y.jsx(I1,{href:g1,download:!0,children:o("presentation.downloadCV")})})]}),y.jsx(T1,{children:y.jsx($1,{children:y.jsx(N1,{src:m1,alt:"profile"})})})]}),y.jsx(x1,{isLoading:n})]})};function Ci(n={threshold:.15,rootMargin:"0px 0px -10% 0px"}){const o=H.useRef(null),[s,u]=H.useState(!1);return H.useEffect(()=>{const d=o.current;if(!d)return;const f=new IntersectionObserver(([h])=>{h.isIntersecting&&(u(!0),f.disconnect())},n);return f.observe(d),()=>f.disconnect()},[n]),{ref:o,isVisible:s}}const O1=z.section`
  padding-block: 80px 150px;
  padding-inline: 32px;
  background-color: var(--color-bg-dark);
`,F1=z.h3`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: var(--color-accent);
  text-align: center;
  opacity: ${n=>n.$revealed?1:0};
  transform: translateY(${n=>n.$revealed?"0":"20px"});
  transition: opacity var(--transition-normal), transform var(--transition-normal);
`,V1=z.h1`
  margin-inline: auto;
  font-size: 38px;
  line-height: 45px;
  font-weight: 600;
  color: var(--color-bg-light);
  text-align: center;
  margin-bottom: 60px;
  opacity: ${n=>n.$revealed?1:0};
  transform: translateY(${n=>n.$revealed?"0":"20px"});
  transition: opacity var(--transition-normal) 80ms, transform var(--transition-normal) 80ms;
  ${L.laptop} { width: 900px; }
`,U1=z.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  column-gap: 100px;
  margin-bottom: 60px;
  ${L.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    column-gap: 100px;
  }
  ${L.desktop} { max-width: 1440px; margin-inline: auto; }
`,B1=z.div`
  padding-inline: 16px;
  opacity: ${n=>n.$revealed?1:0};
`,H1=z.h3`
  font-size: 18px;
  display: inline-block;
  border: 1px solid var(--color-accent);
  padding: 11px 24px;
  color: var(--color-accent);
`,W1=z.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--color-bg-light);
`,Q1=z.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
  color: var(--color-text-grey);
`,G1=z.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  ${L.laptop} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }
  ${L.desktop} { max-width: 1440px; margin-inline: auto; }
`,Y1=z.div`
  padding-inline: 16px;
  opacity: ${n=>n.$revealed?1:0};
  transform: translateY(${n=>n.$revealed?"0":"24px"});
  transition: opacity var(--transition-normal) ${n=>n.$delay}ms, transform var(--transition-normal) ${n=>n.$delay}ms;
`,K1=z.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,q1=z.img`
  width: 32px;
  height: 32px;
`,X1=z.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-bg-light);
  margin-right: auto;
`,Z1=z.div`
  width: 100%;
  height: 10px;
  background-color: var(--border);
  border-radius: 6px;
  overflow: hidden;
`,J1=z.div`
  height: 100%;
  background-color: var(--color-accent);
  width: ${n=>n.$width}%;
  transition: width var(--transition-normal);
`,ey=""+new URL("html-CKyDEyeN.png",import.meta.url).href,ty=""+new URL("css-RpqVc-72.png",import.meta.url).href,ny=""+new URL("javascript-Bu6ZFjaT.png",import.meta.url).href,ry=""+new URL("python-BIwUd1eo.png",import.meta.url).href,iy=""+new URL("photoshop-DCnsx6Sy.png",import.meta.url).href,oy=""+new URL("c__-B6GPfZhS.png",import.meta.url).href,sy=[{id:1,name:"HTML",score:90,icon:"html"},{id:2,name:"CSS",score:85,icon:"css"},{id:3,name:"JavaScript",score:80,icon:"javascript"},{id:4,name:"Python",score:70,icon:"python"},{id:5,name:"Photoshop",score:60,icon:"photoshop"},{id:6,name:"C++",score:50,icon:"c++"}],ly={html:ey,css:ty,javascript:ny,python:ry,photoshop:iy,"c++":oy},ay=()=>{const n=Ci(),o=Ci(),s=Ci(),u=Ci(),{t:d}=Tn(),f=d("education.items",{returnObjects:!0})||[];return y.jsxs(O1,{id:"about",children:[y.jsx(F1,{ref:n.ref,$revealed:n.isVisible,children:d("education.title")}),y.jsx(V1,{ref:o.ref,$revealed:o.isVisible,children:d("education.subtitle")}),y.jsx(U1,{ref:s.ref,children:f.map(({title:h,description:x,subtitle:S},w)=>y.jsxs(B1,{$revealed:s.isVisible,$delay:w*90,$dir:w%2===0?"left":"right",children:[y.jsx(H1,{children:h}),y.jsx(W1,{children:x}),y.jsx(Q1,{children:S})]},w))}),y.jsx(G1,{ref:u.ref,children:sy.map(({id:h,name:x,score:S,icon:w},P)=>y.jsxs(Y1,{$revealed:u.isVisible,$delay:P*90,children:[y.jsxs(K1,{children:[y.jsx(q1,{src:ly[w],alt:`${x} icon`}),y.jsx(X1,{children:x})]}),y.jsx(Z1,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":S,children:y.jsx(J1,{$width:u.isVisible?S:0})})]},h))})]})};class Ui{constructor(o=0,s="Network Error"){this.status=o,this.text=s}}const uy=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,o)=>Promise.resolve(localStorage.setItem(n,o)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},qe={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:uy()},Ru=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},cy=(n,o="https://api.emailjs.com")=>{if(!n)return;const s=Ru(n);qe.publicKey=s.publicKey,qe.blockHeadless=s.blockHeadless,qe.storageProvider=s.storageProvider,qe.blockList=s.blockList,qe.limitRate=s.limitRate,qe.origin=s.origin||o},mh=async(n,o,s={})=>{const u=await fetch(qe.origin+n,{method:"POST",headers:s,body:o}),d=await u.text(),f=new Ui(u.status,d);if(u.ok)return f;throw f},gh=(n,o,s)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!o||typeof o!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},dy=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},vh=n=>n.webdriver||!n.languages||n.languages.length===0,yh=()=>new Ui(451,"Unavailable For Headless Browser"),fy=(n,o)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof o!="string")throw"The BlockList watchVariable has to be a string"},py=n=>!n.list?.length||!n.watchVariable,hy=(n,o)=>n instanceof FormData?n.get(o):n[o],xh=(n,o)=>{if(py(n))return!1;fy(n.list,n.watchVariable);const s=hy(o,n.watchVariable);return typeof s!="string"?!1:n.list.includes(s)},wh=()=>new Ui(403,"Forbidden"),my=(n,o)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(o&&typeof o!="string")throw"The LimitRate ID has to be a non-empty string"},gy=async(n,o,s)=>{const u=Number(await s.get(n)||0);return o-Date.now()+u},Sh=async(n,o,s)=>{if(!o.throttle||!s)return!1;my(o.throttle,o.id);const u=o.id||n;return await gy(u,o.throttle,s)>0?!0:(await s.set(u,Date.now().toString()),!1)},kh=()=>new Ui(429,"Too Many Requests"),vy=async(n,o,s,u)=>{const d=Ru(u),f=d.publicKey||qe.publicKey,h=d.blockHeadless||qe.blockHeadless,x=d.storageProvider||qe.storageProvider,S={...qe.blockList,...d.blockList},w={...qe.limitRate,...d.limitRate};return h&&vh(navigator)?Promise.reject(yh()):(gh(f,n,o),dy(s),s&&xh(S,s)?Promise.reject(wh()):await Sh(location.pathname,w,x)?Promise.reject(kh()):mh("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:f,service_id:n,template_id:o,template_params:s}),{"Content-type":"application/json"}))},yy=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},xy=n=>typeof n=="string"?document.querySelector(n):n,wy=async(n,o,s,u)=>{const d=Ru(u),f=d.publicKey||qe.publicKey,h=d.blockHeadless||qe.blockHeadless,x=qe.storageProvider||d.storageProvider,S={...qe.blockList,...d.blockList},w={...qe.limitRate,...d.limitRate};if(h&&vh(navigator))return Promise.reject(yh());const P=xy(s);gh(f,n,o),yy(P);const C=new FormData(P);return xh(S,C)?Promise.reject(wh()):await Sh(location.pathname,w,x)?Promise.reject(kh()):(C.append("lib_version","4.4.1"),C.append("service_id",n),C.append("template_id",o),C.append("user_id",f),mh("/api/v1.0/email/send-form",C))},Sy={init:cy,send:vy,sendForm:wy,EmailJSResponseStatus:Ui},ky=z.section`
    height: 950px;
    background-color: var(--color-bg-dark);
    display: flex;
    align-items: center;
    padding-bottom:50px;

  
  ${L.tablet} {
  }
  
  ${L.laptop} {
    height: 750px;
     padding-bottom:0px;
  }
`,Ey=z.div`

  
  ${L.desktop} {
    max-width: 1440px;
    margin-inline: auto;
  }
`,_y=z.h1`
    font-size: 38px;
    line-height: 45px;
    font-weight: 600;
    text-align: center;
    color: var(--color-bg-light);
    margin-bottom:50px;
  
    ${L.laptop} {
      margin-bottom:100px;
    }
`,Cy=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  ${L.laptop} {
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`,Py=z.div`
  flex: 1;
  
  ${L.laptop} {
  }
`,jy=z.h2`
    font-weight: 300;
    font-size: 25px;
    line-height: 1.3;
    color: var(--color-bg-light);
    padding-inline:40px;
    text-align:center;
  
  ${L.tablet} {
     padding-inline:80px;
  }
`,Ry=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`,Oa=z.div`
    width:160px;
  display: flex;
  align-items: center;
  gap: 10px;
`,Fa=z.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  
  ${L.tablet} {
    width: 28px;
    height: 28px;
  }
`,Va=z.span`
    font-weight: 300;
    font-size: 0.95rem;
    line-height: 1.3;
    color: var(--color-text-grey);
  
  ${L.tablet} {

  }
`,zy=z.div``;z.h3`
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
`;const Iy=z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,Ua=z.a`
    display: grid;
    align-items: center;
    justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
  }
`,Ba=z.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  
  ${L.tablet} {
  }
`,Ty=z.div`
  flex: 1;
  width:90%;
  margin-inline:auto;
  padding-block:20px;
  
  ${L.tablet} {
    
  }

  ${L.laptop} {
    padding-inline:50px;
  }
`,$y=z.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: 30px 40px;
  background-color: var(--color-bg-darkblue);
  border-radius:15px;

`,Ha=z.div`
background-color: var(--color-bg-darkblue);
margin-block:10px;
`,dp=z.input`
    width: 100%;
    font-size: 20px;
    background-color:  var(--color-bg-dark);
    color: var(--color-bg-light);
    padding: 5px;
  &:focus {
  }
  
  &::placeholder {
    font-size: 15px;
  }
`,Ly=z.textarea`
    width: 100%;
    height: 100px;
     resize: none;
    padding: 5px;
    font-size: 18px;
    background-color:  var(--color-bg-dark);
    color: var(--color-bg-light);

  
  &:focus {
  }
  
  &::placeholder {
    font-size: 15px;
  }

    ${L.tablet} {
  }
      ${L.laptop} {
  }
        ${L.desktop} {
  }
`,Ny=z.button`
  padding: 10px 20px;
  background-color: var(--color-bg-dark);
  color: var(--color-accent);
  border-radius: 10px;
  cursor: pointer;
  
  &:hover {
  }
  
  ${L.tablet} {
  }
`,fp=z.span`
  color: red;
`,Ay=z.span`
  color: green;
`,Dy=""+new URL("github-nmw778zG.png",import.meta.url).href,by=""+new URL("linkedin-DYsRWqBD.png",import.meta.url).href,My=""+new URL("whatsapp-BCxDlPO_.png",import.meta.url).href,Oy=""+new URL("email-DoONwEbf.png",import.meta.url).href,Fy=""+new URL("phone-DcnKv4tn.png",import.meta.url).href,Vy=""+new URL("map-Bl81i-9s.png",import.meta.url).href,Uy="5LRWbDj8yR2dZ4tBN",By="service_69mhp4o",Hy="template_9c0yd21",Wy="ucmessina@gmail.com",Qy=()=>{const{t:n}=Tn(),[o,s]=H.useState({name:"",email:"",message:""}),[u,d]=H.useState({}),[f,h]=H.useState(!1),[x,S]=H.useState(!1),w=j=>{const A=j.charCode;A>=65&&A<=90||A>=97&&A<=122||A===32||j.preventDefault()},P=j=>[/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,/javascript:/gi,/onclick|onload|onerror|onmouseover|onkeypress/gi].some(T=>T.test(j)),C=j=>{const{name:A,value:T}=j.target;if(A==="message"&&P(T)){d(M=>({...M,message:n("contact.securityViolation")}));return}else d(M=>({...M,message:""}));s(M=>({...M,[A]:T}))},I=async j=>{if(j.preventDefault(),!o.name||!o.email||!o.message){d({submit:n("contact.fillAllFields")});return}if(P(o.message)){d({message:n("contact.securityViolation")});return}h(!0),d({});try{const A=new Intl.DateTimeFormat("it-IT",{dateStyle:"full",timeStyle:"short",timeZone:"Europe/Rome"}).format(new Date),T=await Sy.send(By,Hy,{from_name:o.name,reply_to:o.email,from_email:o.email,message:o.message,date:A,email:Wy},{publicKey:Uy});console.log("Email sent successfully:",T),S(!0),s({name:"",email:"",message:""}),setTimeout(()=>S(!1),5e3)}catch(A){console.error("Email sending error:",A);const T=A?.text||A?.message||`status: ${A?.status}`;d({submit:`${n("contact.messageError")} ${T}`})}finally{h(!1)}};return y.jsx(ky,{id:"contact",children:y.jsxs(Ey,{children:[y.jsx(_y,{children:n("contact.title")}),y.jsxs(Cy,{children:[y.jsxs(Py,{children:[y.jsx(jy,{children:n("contact.subtitle")}),y.jsxs(Ry,{children:[y.jsxs(Oa,{children:[y.jsx(Fa,{src:Oy,alt:"Email"}),y.jsx(Va,{children:"ucmessina@gmail.com"})," "]}),y.jsxs(Oa,{children:[y.jsx(Fa,{src:Fy,alt:"Phone"}),y.jsx(Va,{children:n("contact.phone")})]}),y.jsxs(Oa,{children:[y.jsx(Fa,{src:Vy,alt:"Location"}),y.jsx(Va,{children:n("contact.location")})]})]}),y.jsx(zy,{children:y.jsxs(Iy,{children:[y.jsx(Ua,{href:"https://github.com/yourprofile",target:"_blank",rel:"noopener noreferrer",children:y.jsx(Ba,{src:Dy,alt:"GitHub"})}),y.jsx(Ua,{href:"https://linkedin.com/in/yourprofile",target:"_blank",rel:"noopener noreferrer",children:y.jsx(Ba,{src:by,alt:"LinkedIn"})}),y.jsx(Ua,{href:"https://wa.me/yourwhatsappnumber",target:"_blank",rel:"noopener noreferrer",children:y.jsx(Ba,{src:My,alt:"WhatsApp"})})]})})]}),y.jsx(Ty,{children:y.jsxs($y,{onSubmit:I,children:[y.jsx(Ha,{children:y.jsx(dp,{type:"text",name:"name",placeholder:n("contact.name"),value:o.name,onChange:C,onKeyPress:w,required:!0})}),y.jsx(Ha,{children:y.jsx(dp,{type:"email",name:"email",placeholder:n("contact.email"),value:o.email,onChange:C,required:!0})}),y.jsxs(Ha,{children:[y.jsx(Ly,{name:"message",placeholder:n("contact.message"),rows:"5",value:o.message,onChange:C,required:!0}),u.message&&y.jsx(fp,{children:u.message})]}),x&&y.jsx(Ay,{children:n("contact.messageSent")}),u.submit&&y.jsxs(fp,{children:["❌ ",u.submit]}),y.jsx(Ny,{type:"submit",disabled:!!u.message||f,children:n(f?"contact.sending":"contact.sendMessage")})]})})]})]})})},Gy=z.footer`
  background: #0b1020;
  color: var(--color-bg-light);
`,Yy=z.div`
  padding: 40px 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;
  ${L.laptop} {
    grid-template-columns: 1fr auto 1fr;
    gap: 32px;
    max-width: 1280px;
    margin-inline: auto;
  }
`,Ky=z.div`
  font-weight: 700;
  letter-spacing: 0.6px;
  color: var(--color-bg-light);
`,qy=z.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  justify-content: flex-start;
  ${L.laptop} { justify-content: center; }
`,Wa=z.li`
  list-style: none;
`,lu=z.a`
  position: relative;
  display: inline-flex;
  gap: 0.02em;
  color: var(--color-bg-light);
  text-decoration: none;
  overflow: hidden;
`,Xy=z.span`
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::before {
    content: attr(data-char);
    display: inline-block;
    color: var(--color-bg-light);
    white-space: pre;
    transform: translateY(0);
    transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    transition-delay: calc(var(--i) * 40ms);
  }

  &::after {
    content: attr(data-char);
    position: absolute;
    inset: 0;
    color: var(--color-accent);
    white-space: pre;
    transform: translateY(100%);
    transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    transition-delay: calc(var(--i) * 40ms);
  }

  ${lu}:hover &::before { transform: translateY(-100%); }
  ${lu}:hover &::after { transform: translateY(0); }
`,Zy=z.div`
  font-size: 14px;
  color: var(--color-text-grey);
  ${L.laptop} { justify-self: end; }
`,Qa=({href:n,text:o})=>y.jsx(lu,{href:n,"aria-label":o,children:o.split("").map((s,u)=>y.jsx(Xy,{style:{"--i":u},"data-char":s===" "?" ":s},u))}),Jy=()=>{const{t:n}=Tn(),o=new Date().getFullYear();return y.jsx(Gy,{id:"footer",children:y.jsxs(Yy,{children:[y.jsx(Ky,{children:"Umberto Portfolio"}),y.jsxs(qy,{children:[y.jsx(Wa,{children:y.jsx(Qa,{href:"#",text:n("footer.terms","Terms & Conditions")})}),y.jsx(Wa,{children:y.jsx(Qa,{href:"#",text:n("footer.privacy","Privacy Policy")})}),y.jsx(Wa,{children:y.jsx(Qa,{href:"#",text:n("footer.sitemap","Site Map")})})]}),y.jsxs(Zy,{children:["© ",o," Umberto. ",n("footer.allRightsReserved")]})]})})};var zu=Hi(),ce=n=>Bi(n,zu),Iu=Hi();ce.write=n=>Bi(n,Iu);var zs=Hi();ce.onStart=n=>Bi(n,zs);var Tu=Hi();ce.onFrame=n=>Bi(n,Tu);var $u=Hi();ce.onFinish=n=>Bi(n,$u);var Er=[];ce.setTimeout=(n,o)=>{const s=ce.now()+o,u=()=>{const f=Er.findIndex(h=>h.cancel==u);~f&&Er.splice(f,1),Rn-=~f?1:0},d={time:s,handler:n,cancel:u};return Er.splice(Eh(s),0,d),Rn+=1,_h(),d};var Eh=n=>~(~Er.findIndex(o=>o.time>n)||~Er.length);ce.cancel=n=>{zs.delete(n),Tu.delete(n),$u.delete(n),zu.delete(n),Iu.delete(n)};ce.sync=n=>{au=!0,ce.batchedUpdates(n),au=!1};ce.throttle=n=>{let o;function s(){try{n(...o)}finally{o=null}}function u(...d){o=d,ce.onStart(s)}return u.handler=n,u.cancel=()=>{zs.delete(s),o=null},u};var Lu=typeof window<"u"?window.requestAnimationFrame:(()=>{});ce.use=n=>Lu=n;ce.now=typeof performance<"u"?()=>performance.now():Date.now;ce.batchedUpdates=n=>n();ce.catch=console.error;ce.frameLoop="always";ce.advance=()=>{ce.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ph()};var jn=-1,Rn=0,au=!1;function Bi(n,o){au?(o.delete(n),n(0)):(o.add(n),_h())}function _h(){jn<0&&(jn=0,ce.frameLoop!=="demand"&&Lu(Ch))}function ex(){jn=-1}function Ch(){~jn&&(Lu(Ch),ce.batchedUpdates(Ph))}function Ph(){const n=jn;jn=ce.now();const o=Eh(jn);if(o&&(jh(Er.splice(0,o),s=>s.handler()),Rn-=o),!Rn){ex();return}zs.flush(),zu.flush(n?Math.min(64,jn-n):16.667),Tu.flush(),Iu.flush(),$u.flush()}function Hi(){let n=new Set,o=n;return{add(s){Rn+=o==n&&!n.has(s)?1:0,n.add(s)},delete(s){return Rn-=o==n&&n.has(s)?1:0,n.delete(s)},flush(s){o.size&&(n=new Set,Rn-=o.size,jh(o,u=>u(s)&&n.add(u)),Rn+=n.size,o=n)}}}function jh(n,o){n.forEach(s=>{try{o(s)}catch(u){ce.catch(u)}})}var tx=Object.defineProperty,nx=(n,o)=>{for(var s in o)tx(n,s,{get:o[s],enumerable:!0})},Mt={};nx(Mt,{assign:()=>ix,colors:()=>In,createStringInterpolator:()=>Au,skipAnimation:()=>zh,to:()=>Rh,willAdvance:()=>Du});function uu(){}var rx=(n,o,s)=>Object.defineProperty(n,o,{value:s,writable:!0,configurable:!0}),F={arr:Array.isArray,obj:n=>!!n&&n.constructor.name==="Object",fun:n=>typeof n=="function",str:n=>typeof n=="string",num:n=>typeof n=="number",und:n=>n===void 0};function on(n,o){if(F.arr(n)){if(!F.arr(o)||n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==o[s])return!1;return!0}return n===o}var he=(n,o)=>n.forEach(o);function Gt(n,o,s){if(F.arr(n)){for(let u=0;u<n.length;u++)o.call(s,n[u],`${u}`);return}for(const u in n)n.hasOwnProperty(u)&&o.call(s,n[u],u)}var vt=n=>F.und(n)?[]:F.arr(n)?n:[n];function Ri(n,o){if(n.size){const s=Array.from(n);n.clear(),he(s,o)}}var Pi=(n,...o)=>Ri(n,s=>s(...o)),Nu=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Au,Rh,In=null,zh=!1,Du=uu,ix=n=>{n.to&&(Rh=n.to),n.now&&(ce.now=n.now),n.colors!==void 0&&(In=n.colors),n.skipAnimation!=null&&(zh=n.skipAnimation),n.createStringInterpolator&&(Au=n.createStringInterpolator),n.requestAnimationFrame&&ce.use(n.requestAnimationFrame),n.batchedUpdates&&(ce.batchedUpdates=n.batchedUpdates),n.willAdvance&&(Du=n.willAdvance),n.frameLoop&&(ce.frameLoop=n.frameLoop)},zi=new Set,Ct=[],Ga=[],ys=0,Is={get idle(){return!zi.size&&!Ct.length},start(n){ys>n.priority?(zi.add(n),ce.onStart(ox)):(Ih(n),ce(cu))},advance:cu,sort(n){if(ys)ce.onFrame(()=>Is.sort(n));else{const o=Ct.indexOf(n);~o&&(Ct.splice(o,1),Th(n))}},clear(){Ct=[],zi.clear()}};function ox(){zi.forEach(Ih),zi.clear(),ce(cu)}function Ih(n){Ct.includes(n)||Th(n)}function Th(n){Ct.splice(sx(Ct,o=>o.priority>n.priority),0,n)}function cu(n){const o=Ga;for(let s=0;s<Ct.length;s++){const u=Ct[s];ys=u.priority,u.idle||(Du(u),u.advance(n),u.idle||o.push(u))}return ys=0,Ga=Ct,Ga.length=0,Ct=o,Ct.length>0}function sx(n,o){const s=n.findIndex(o);return s<0?n.length:s}var lx={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Dt="[-+]?\\d*\\.?\\d+",xs=Dt+"%";function Ts(...n){return"\\(\\s*("+n.join(")\\s*,\\s*(")+")\\s*\\)"}var ax=new RegExp("rgb"+Ts(Dt,Dt,Dt)),ux=new RegExp("rgba"+Ts(Dt,Dt,Dt,Dt)),cx=new RegExp("hsl"+Ts(Dt,xs,xs)),dx=new RegExp("hsla"+Ts(Dt,xs,xs,Dt)),fx=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,px=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hx=/^#([0-9a-fA-F]{6})$/,mx=/^#([0-9a-fA-F]{8})$/;function gx(n){let o;return typeof n=="number"?n>>>0===n&&n>=0&&n<=4294967295?n:null:(o=hx.exec(n))?parseInt(o[1]+"ff",16)>>>0:In&&In[n]!==void 0?In[n]:(o=ax.exec(n))?(Sr(o[1])<<24|Sr(o[2])<<16|Sr(o[3])<<8|255)>>>0:(o=ux.exec(n))?(Sr(o[1])<<24|Sr(o[2])<<16|Sr(o[3])<<8|mp(o[4]))>>>0:(o=fx.exec(n))?parseInt(o[1]+o[1]+o[2]+o[2]+o[3]+o[3]+"ff",16)>>>0:(o=mx.exec(n))?parseInt(o[1],16)>>>0:(o=px.exec(n))?parseInt(o[1]+o[1]+o[2]+o[2]+o[3]+o[3]+o[4]+o[4],16)>>>0:(o=cx.exec(n))?(pp(hp(o[1]),os(o[2]),os(o[3]))|255)>>>0:(o=dx.exec(n))?(pp(hp(o[1]),os(o[2]),os(o[3]))|mp(o[4]))>>>0:null}function Ya(n,o,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(o-n)*6*s:s<1/2?o:s<2/3?n+(o-n)*(2/3-s)*6:n}function pp(n,o,s){const u=s<.5?s*(1+o):s+o-s*o,d=2*s-u,f=Ya(d,u,n+1/3),h=Ya(d,u,n),x=Ya(d,u,n-1/3);return Math.round(f*255)<<24|Math.round(h*255)<<16|Math.round(x*255)<<8}function Sr(n){const o=parseInt(n,10);return o<0?0:o>255?255:o}function hp(n){return(parseFloat(n)%360+360)%360/360}function mp(n){const o=parseFloat(n);return o<0?0:o>1?255:Math.round(o*255)}function os(n){const o=parseFloat(n);return o<0?0:o>100?1:o/100}function gp(n){let o=gx(n);if(o===null)return n;o=o||0;const s=(o&4278190080)>>>24,u=(o&16711680)>>>16,d=(o&65280)>>>8,f=(o&255)/255;return`rgba(${s}, ${u}, ${d}, ${f})`}var Li=(n,o,s)=>{if(F.fun(n))return n;if(F.arr(n))return Li({range:n,output:o,extrapolate:s});if(F.str(n.output[0]))return Au(n);const u=n,d=u.output,f=u.range||[0,1],h=u.extrapolateLeft||u.extrapolate||"extend",x=u.extrapolateRight||u.extrapolate||"extend",S=u.easing||(w=>w);return w=>{const P=yx(w,f);return vx(w,f[P],f[P+1],d[P],d[P+1],S,h,x,u.map)}};function vx(n,o,s,u,d,f,h,x,S){let w=S?S(n):n;if(w<o){if(h==="identity")return w;h==="clamp"&&(w=o)}if(w>s){if(x==="identity")return w;x==="clamp"&&(w=s)}return u===d?u:o===s?n<=o?u:d:(o===-1/0?w=-w:s===1/0?w=w-o:w=(w-o)/(s-o),w=f(w),u===-1/0?w=-w:d===1/0?w=w+u:w=w*(d-u)+u,w)}function yx(n,o){for(var s=1;s<o.length-1&&!(o[s]>=n);++s);return s-1}var xx={linear:n=>n},Ni=Symbol.for("FluidValue.get"),Tr=Symbol.for("FluidValue.observers"),_t=n=>!!(n&&n[Ni]),dt=n=>n&&n[Ni]?n[Ni]():n,vp=n=>n[Tr]||null;function wx(n,o){n.eventObserved?n.eventObserved(o):n(o)}function Ai(n,o){const s=n[Tr];s&&s.forEach(u=>{wx(u,o)})}var $h=class{constructor(n){if(!n&&!(n=this.get))throw Error("Unknown getter");Sx(this,n)}},Sx=(n,o)=>Lh(n,Ni,o);function Lr(n,o){if(n[Ni]){let s=n[Tr];s||Lh(n,Tr,s=new Set),s.has(o)||(s.add(o),n.observerAdded&&n.observerAdded(s.size,o))}return o}function Di(n,o){const s=n[Tr];if(s&&s.has(o)){const u=s.size-1;u?s.delete(o):n[Tr]=null,n.observerRemoved&&n.observerRemoved(u,o)}}var Lh=(n,o,s)=>Object.defineProperty(n,o,{value:s,writable:!0,configurable:!0}),ds=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,kx=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,yp=new RegExp(`(${ds.source})(%|[a-z]+)`,"i"),Ex=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,$s=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Nh=n=>{const[o,s]=_x(n);if(!o||Nu())return n;const u=window.getComputedStyle(document.documentElement).getPropertyValue(o);if(u)return u.trim();if(s&&s.startsWith("--")){const d=window.getComputedStyle(document.documentElement).getPropertyValue(s);return d||n}else{if(s&&$s.test(s))return Nh(s);if(s)return s}return n},_x=n=>{const o=$s.exec(n);if(!o)return[,];const[,s,u]=o;return[s,u]},Ka,Cx=(n,o,s,u,d)=>`rgba(${Math.round(o)}, ${Math.round(s)}, ${Math.round(u)}, ${d})`,Ah=n=>{Ka||(Ka=In?new RegExp(`(${Object.keys(In).join("|")})(?!\\w)`,"g"):/^\b$/);const o=n.output.map(f=>dt(f).replace($s,Nh).replace(kx,gp).replace(Ka,gp)),s=o.map(f=>f.match(ds).map(Number)),d=s[0].map((f,h)=>s.map(x=>{if(!(h in x))throw Error('The arity of each "output" value must be equal');return x[h]})).map(f=>Li({...n,output:f}));return f=>{const h=!yp.test(o[0])&&o.find(S=>yp.test(S))?.replace(ds,"");let x=0;return o[0].replace(ds,()=>`${d[x++](f)}${h||""}`).replace(Ex,Cx)}},bu="react-spring: ",Dh=n=>{const o=n;let s=!1;if(typeof o!="function")throw new TypeError(`${bu}once requires a function parameter`);return(...u)=>{s||(o(...u),s=!0)}},Px=Dh(console.warn);function jx(){Px(`${bu}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var Rx=Dh(console.warn);function zx(){Rx(`${bu}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Ls(n){return F.str(n)&&(n[0]=="#"||/\d/.test(n)||!Nu()&&$s.test(n)||n in(In||{}))}var Mu=Nu()?H.useEffect:H.useLayoutEffect,Ix=()=>{const n=H.useRef(!1);return Mu(()=>(n.current=!0,()=>{n.current=!1}),[]),n};function bh(){const n=H.useState()[1],o=Ix();return()=>{o.current&&n(Math.random())}}var Mh=n=>H.useEffect(n,Tx),Tx=[];function xp(n){const o=H.useRef(void 0);return H.useEffect(()=>{o.current=n}),o.current}var bi=Symbol.for("Animated:node"),$x=n=>!!n&&n[bi]===n,Ht=n=>n&&n[bi],Ou=(n,o)=>rx(n,bi,o),Ns=n=>n&&n[bi]&&n[bi].getPayload(),Oh=class{constructor(){Ou(this,this)}getPayload(){return this.payload||[]}},As=class Fh extends Oh{constructor(o){super(),this._value=o,this.done=!0,this.durationProgress=0,F.num(this._value)&&(this.lastPosition=this._value)}static create(o){return new Fh(o)}getPayload(){return[this]}getValue(){return this._value}setValue(o,s){return F.num(o)&&(this.lastPosition=o,s&&(o=Math.round(o/s)*s,this.done&&(this.lastPosition=o))),this._value===o?!1:(this._value=o,!0)}reset(){const{done:o}=this;this.done=!1,F.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,o&&(this.lastVelocity=null),this.v0=null)}},ws=class Vh extends As{constructor(o){super(0),this._string=null,this._toString=Li({output:[o,o]})}static create(o){return new Vh(o)}getValue(){const o=this._string;return o??(this._string=this._toString(this._value))}setValue(o){if(F.str(o)){if(o==this._string)return!1;this._string=o,this._value=1}else if(super.setValue(o))this._string=null;else return!1;return!0}reset(o){o&&(this._toString=Li({output:[this.getValue(),o]})),this._value=0,super.reset()}},Ss={dependencies:null},Ds=class extends Oh{constructor(n){super(),this.source=n,this.setValue(n)}getValue(n){const o={};return Gt(this.source,(s,u)=>{$x(s)?o[u]=s.getValue(n):_t(s)?o[u]=dt(s):n||(o[u]=s)}),o}setValue(n){this.source=n,this.payload=this._makePayload(n)}reset(){this.payload&&he(this.payload,n=>n.reset())}_makePayload(n){if(n){const o=new Set;return Gt(n,this._addToPayload,o),Array.from(o)}}_addToPayload(n){Ss.dependencies&&_t(n)&&Ss.dependencies.add(n);const o=Ns(n);o&&he(o,s=>this.add(s))}},Lx=class Uh extends Ds{constructor(o){super(o)}static create(o){return new Uh(o)}getValue(){return this.source.map(o=>o.getValue())}setValue(o){const s=this.getPayload();return o.length==s.length?s.map((u,d)=>u.setValue(o[d])).some(Boolean):(super.setValue(o.map(Nx)),!0)}};function Nx(n){return(Ls(n)?ws:As).create(n)}function du(n){const o=Ht(n);return o?o.constructor:F.arr(n)?Lx:Ls(n)?ws:As}var wp=(n,o)=>{const s=!F.fun(n)||n.prototype&&n.prototype.isReactComponent;return H.forwardRef((u,d)=>{const f=H.useRef(null),h=s&&H.useCallback(A=>{f.current=bx(d,A)},[d]),[x,S]=Dx(u,o),w=bh(),P=()=>{const A=f.current;if(s&&!A)return;(A?o.applyAnimatedValues(A,x.getValue(!0)):!1)===!1&&w()},C=new Ax(P,S),I=H.useRef(void 0);Mu(()=>(I.current=C,he(S,A=>Lr(A,C)),()=>{I.current&&(he(I.current.deps,A=>Di(A,I.current)),ce.cancel(I.current.update))})),H.useEffect(P,[]),Mh(()=>()=>{const A=I.current;he(A.deps,T=>Di(T,A))});const j=o.getComponentProps(x.getValue());return H.createElement(n,{...j,ref:h})})},Ax=class{constructor(n,o){this.update=n,this.deps=o}eventObserved(n){n.type=="change"&&ce.write(this.update)}};function Dx(n,o){const s=new Set;return Ss.dependencies=s,n.style&&(n={...n,style:o.createAnimatedStyle(n.style)}),n=new Ds(n),Ss.dependencies=null,[n,s]}function bx(n,o){return n&&(F.fun(n)?n(o):n.current=o),o}var Sp=Symbol.for("AnimatedComponent"),Mx=(n,{applyAnimatedValues:o=()=>!1,createAnimatedStyle:s=d=>new Ds(d),getComponentProps:u=d=>d}={})=>{const d={applyAnimatedValues:o,createAnimatedStyle:s,getComponentProps:u},f=h=>{const x=kp(h)||"Anonymous";return F.str(h)?h=f[h]||(f[h]=wp(h,d)):h=h[Sp]||(h[Sp]=wp(h,d)),h.displayName=`Animated(${x})`,h};return Gt(n,(h,x)=>{F.arr(n)&&(x=kp(h)),f[x]=f(h)}),{animated:f}},kp=n=>F.str(n)?n:n&&F.str(n.displayName)?n.displayName:F.fun(n)&&n.name||null;function Wn(n,...o){return F.fun(n)?n(...o):n}var Ii=(n,o)=>n===!0||!!(o&&n&&(F.fun(n)?n(o):vt(n).includes(o))),Bh=(n,o)=>F.obj(n)?o&&n[o]:n,Hh=(n,o)=>n.default===!0?n[o]:n.default?n.default[o]:void 0,Ox=n=>n,Fu=(n,o=Ox)=>{let s=Fx;n.default&&n.default!==!0&&(n=n.default,s=Object.keys(n));const u={};for(const d of s){const f=o(n[d],d);F.und(f)||(u[d]=f)}return u},Fx=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Vx={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ux(n){const o={};let s=0;if(Gt(n,(u,d)=>{Vx[d]||(o[d]=u,s++)}),s)return o}function Wh(n){const o=Ux(n);if(o){const s={to:o};return Gt(n,(u,d)=>d in o||(s[d]=u)),s}return{...n}}function Mi(n){return n=dt(n),F.arr(n)?n.map(Mi):Ls(n)?Mt.createStringInterpolator({range:[0,1],output:[n,n]})(1):n}function Bx(n){for(const o in n)return!0;return!1}function fu(n){return F.fun(n)||F.arr(n)&&F.obj(n[0])}function Hx(n,o){n.ref?.delete(n),o?.delete(n)}function Wx(n,o){o&&n.ref!==o&&(n.ref?.delete(n),o.add(n),n.ref=o)}var Qx={default:{tension:170,friction:26}},pu={...Qx.default,mass:1,damping:1,easing:xx.linear,clamp:!1},Gx=class{constructor(){this.velocity=0,Object.assign(this,pu)}};function Yx(n,o,s){s&&(s={...s},Ep(s,o),o={...s,...o}),Ep(n,o),Object.assign(n,o);for(const h in pu)n[h]==null&&(n[h]=pu[h]);let{frequency:u,damping:d}=n;const{mass:f}=n;return F.und(u)||(u<.01&&(u=.01),d<0&&(d=0),n.tension=Math.pow(2*Math.PI/u,2)*f,n.friction=4*Math.PI*d*f/u),n}function Ep(n,o){if(!F.und(o.decay))n.duration=void 0;else{const s=!F.und(o.tension)||!F.und(o.friction);(s||!F.und(o.frequency)||!F.und(o.damping)||!F.und(o.mass))&&(n.duration=void 0,n.decay=void 0),s&&(n.frequency=void 0)}}var _p=[],Kx=class{constructor(){this.changed=!1,this.values=_p,this.toValues=null,this.fromValues=_p,this.config=new Gx,this.immediate=!1}};function Qh(n,{key:o,props:s,defaultProps:u,state:d,actions:f}){return new Promise((h,x)=>{let S,w,P=Ii(s.cancel??u?.cancel,o);if(P)j();else{F.und(s.pause)||(d.paused=Ii(s.pause,o));let A=u?.pause;A!==!0&&(A=d.paused||Ii(A,o)),S=Wn(s.delay||0,o),A?(d.resumeQueue.add(I),f.pause()):(f.resume(),I())}function C(){d.resumeQueue.add(I),d.timeouts.delete(w),w.cancel(),S=w.time-ce.now()}function I(){S>0&&!Mt.skipAnimation?(d.delayed=!0,w=ce.setTimeout(j,S),d.pauseQueue.add(C),d.timeouts.add(w)):j()}function j(){d.delayed&&(d.delayed=!1),d.pauseQueue.delete(C),d.timeouts.delete(w),n<=(d.cancelId||0)&&(P=!0);try{f.start({...s,callId:n,cancel:P},h)}catch(A){x(A)}}})}var Vu=(n,o)=>o.length==1?o[0]:o.some(s=>s.cancelled)?_r(n.get()):o.every(s=>s.noop)?Gh(n.get()):At(n.get(),o.every(s=>s.finished)),Gh=n=>({value:n,noop:!0,finished:!0,cancelled:!1}),At=(n,o,s=!1)=>({value:n,finished:o,cancelled:s}),_r=n=>({value:n,cancelled:!0,finished:!1});function Yh(n,o,s,u){const{callId:d,parentId:f,onRest:h}=o,{asyncTo:x,promise:S}=s;return!f&&n===x&&!o.reset?S:s.promise=(async()=>{s.asyncId=d,s.asyncTo=n;const w=Fu(o,(M,U)=>U==="onRest"?void 0:M);let P,C;const I=new Promise((M,U)=>(P=M,C=U)),j=M=>{const U=d<=(s.cancelId||0)&&_r(u)||d!==s.asyncId&&At(u,!1);if(U)throw M.result=U,C(M),M},A=(M,U)=>{const W=new Cp,V=new Pp;return(async()=>{if(Mt.skipAnimation)throw Oi(s),V.result=At(u,!1),C(V),V;j(W);const G=F.obj(M)?{...M}:{...U,to:M};G.parentId=d,Gt(w,(ie,K)=>{F.und(G[K])&&(G[K]=ie)});const re=await u.start(G);return j(W),s.paused&&await new Promise(ie=>{s.resumeQueue.add(ie)}),re})()};let T;if(Mt.skipAnimation)return Oi(s),At(u,!1);try{let M;F.arr(n)?M=(async U=>{for(const W of U)await A(W)})(n):M=Promise.resolve(n(A,u.stop.bind(u))),await Promise.all([M.then(P),I]),T=At(u.get(),!0,!1)}catch(M){if(M instanceof Cp)T=M.result;else if(M instanceof Pp)T=M.result;else throw M}finally{d==s.asyncId&&(s.asyncId=f,s.asyncTo=f?x:void 0,s.promise=f?S:void 0)}return F.fun(h)&&ce.batchedUpdates(()=>{h(T,u,u.item)}),T})()}function Oi(n,o){Ri(n.timeouts,s=>s.cancel()),n.pauseQueue.clear(),n.resumeQueue.clear(),n.asyncId=n.asyncTo=n.promise=void 0,o&&(n.cancelId=o)}var Cp=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Pp=class extends Error{constructor(){super("SkipAnimationSignal")}},hu=n=>n instanceof Uu,qx=1,Uu=class extends $h{constructor(){super(...arguments),this.id=qx++,this._priority=0}get priority(){return this._priority}set priority(n){this._priority!=n&&(this._priority=n,this._onPriorityChange(n))}get(){const n=Ht(this);return n&&n.getValue()}to(...n){return Mt.to(this,n)}interpolate(...n){return jx(),Mt.to(this,n)}toJSON(){return this.get()}observerAdded(n){n==1&&this._attach()}observerRemoved(n){n==0&&this._detach()}_attach(){}_detach(){}_onChange(n,o=!1){Ai(this,{type:"change",parent:this,value:n,idle:o})}_onPriorityChange(n){this.idle||Is.sort(this),Ai(this,{type:"priority",parent:this,priority:n})}},Yn=Symbol.for("SpringPhase"),Kh=1,mu=2,gu=4,qa=n=>(n[Yn]&Kh)>0,Cn=n=>(n[Yn]&mu)>0,wi=n=>(n[Yn]&gu)>0,jp=(n,o)=>o?n[Yn]|=mu|Kh:n[Yn]&=~mu,Rp=(n,o)=>o?n[Yn]|=gu:n[Yn]&=~gu,Xx=class extends Uu{constructor(n,o){if(super(),this.animation=new Kx,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!F.und(n)||!F.und(o)){const s=F.obj(n)?{...n}:{...o,from:n};F.und(s.default)&&(s.default=!0),this.start(s)}}get idle(){return!(Cn(this)||this._state.asyncTo)||wi(this)}get goal(){return dt(this.animation.to)}get velocity(){const n=Ht(this);return n instanceof As?n.lastVelocity||0:n.getPayload().map(o=>o.lastVelocity||0)}get hasAnimated(){return qa(this)}get isAnimating(){return Cn(this)}get isPaused(){return wi(this)}get isDelayed(){return this._state.delayed}advance(n){let o=!0,s=!1;const u=this.animation;let{toValues:d}=u;const{config:f}=u,h=Ns(u.to);!h&&_t(u.to)&&(d=vt(dt(u.to))),u.values.forEach((w,P)=>{if(w.done)return;const C=w.constructor==ws?1:h?h[P].lastPosition:d[P];let I=u.immediate,j=C;if(!I){if(j=w.lastPosition,f.tension<=0){w.done=!0;return}let A=w.elapsedTime+=n;const T=u.fromValues[P],M=w.v0!=null?w.v0:w.v0=F.arr(f.velocity)?f.velocity[P]:f.velocity;let U;const W=f.precision||(T==C?.005:Math.min(1,Math.abs(C-T)*.001));if(F.und(f.duration))if(f.decay){const V=f.decay===!0?.998:f.decay,G=Math.exp(-(1-V)*A);j=T+M/(1-V)*(1-G),I=Math.abs(w.lastPosition-j)<=W,U=M*G}else{U=w.lastVelocity==null?M:w.lastVelocity;const V=f.restVelocity||W/10,G=f.clamp?0:f.bounce,re=!F.und(G),ie=T==C?w.v0>0:T<C;let K,ke=!1;const we=1,Me=Math.ceil(n/we);for(let Le=0;Le<Me&&(K=Math.abs(U)>V,!(!K&&(I=Math.abs(C-j)<=W,I)));++Le){re&&(ke=j==C||j>C==ie,ke&&(U=-U*G,j=C));const Te=-f.tension*1e-6*(j-C),Re=-f.friction*.001*U,Oe=(Te+Re)/f.mass;U=U+Oe*we,j=j+U*we}}else{let V=1;f.duration>0&&(this._memoizedDuration!==f.duration&&(this._memoizedDuration=f.duration,w.durationProgress>0&&(w.elapsedTime=f.duration*w.durationProgress,A=w.elapsedTime+=n)),V=(f.progress||0)+A/this._memoizedDuration,V=V>1?1:V<0?0:V,w.durationProgress=V),j=T+f.easing(V)*(C-T),U=(j-w.lastPosition)/n,I=V==1}w.lastVelocity=U,Number.isNaN(j)&&(console.warn("Got NaN while animating:",this),I=!0)}h&&!h[P].done&&(I=!1),I?w.done=!0:o=!1,w.setValue(j,f.round)&&(s=!0)});const x=Ht(this),S=x.getValue();if(o){const w=dt(u.to);(S!==w||s)&&!f.decay?(x.setValue(w),this._onChange(w)):s&&f.decay&&this._onChange(S),this._stop()}else s&&this._onChange(S)}set(n){return ce.batchedUpdates(()=>{this._stop(),this._focus(n),this._set(n)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Cn(this)){const{to:n,config:o}=this.animation;ce.batchedUpdates(()=>{this._onStart(),o.decay||this._set(n,!1),this._stop()})}return this}update(n){return(this.queue||(this.queue=[])).push(n),this}start(n,o){let s;return F.und(n)?(s=this.queue||[],this.queue=[]):s=[F.obj(n)?n:{...o,to:n}],Promise.all(s.map(u=>this._update(u))).then(u=>Vu(this,u))}stop(n){const{to:o}=this.animation;return this._focus(this.get()),Oi(this._state,n&&this._lastCallId),ce.batchedUpdates(()=>this._stop(o,n)),this}reset(){this._update({reset:!0})}eventObserved(n){n.type=="change"?this._start():n.type=="priority"&&(this.priority=n.priority+1)}_prepareNode(n){const o=this.key||"";let{to:s,from:u}=n;s=F.obj(s)?s[o]:s,(s==null||fu(s))&&(s=void 0),u=F.obj(u)?u[o]:u,u==null&&(u=void 0);const d={to:s,from:u};return qa(this)||(n.reverse&&([s,u]=[u,s]),u=dt(u),F.und(u)?Ht(this)||this._set(s):this._set(u)),d}_update({...n},o){const{key:s,defaultProps:u}=this;n.default&&Object.assign(u,Fu(n,(h,x)=>/^on/.test(x)?Bh(h,s):h)),Ip(this,n,"onProps"),ki(this,"onProps",n,this);const d=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const f=this._state;return Qh(++this._lastCallId,{key:s,props:n,defaultProps:u,state:f,actions:{pause:()=>{wi(this)||(Rp(this,!0),Pi(f.pauseQueue),ki(this,"onPause",At(this,Si(this,this.animation.to)),this))},resume:()=>{wi(this)&&(Rp(this,!1),Cn(this)&&this._resume(),Pi(f.resumeQueue),ki(this,"onResume",At(this,Si(this,this.animation.to)),this))},start:this._merge.bind(this,d)}}).then(h=>{if(n.loop&&h.finished&&!(o&&h.noop)){const x=qh(n);if(x)return this._update(x,!0)}return h})}_merge(n,o,s){if(o.cancel)return this.stop(!0),s(_r(this));const u=!F.und(n.to),d=!F.und(n.from);if(u||d)if(o.callId>this._lastToId)this._lastToId=o.callId;else return s(_r(this));const{key:f,defaultProps:h,animation:x}=this,{to:S,from:w}=x;let{to:P=S,from:C=w}=n;d&&!u&&(!o.default||F.und(P))&&(P=C),o.reverse&&([P,C]=[C,P]);const I=!on(C,w);I&&(x.from=C),C=dt(C);const j=!on(P,S);j&&this._focus(P);const A=fu(o.to),{config:T}=x,{decay:M,velocity:U}=T;(u||d)&&(T.velocity=0),o.config&&!A&&Yx(T,Wn(o.config,f),o.config!==h.config?Wn(h.config,f):void 0);let W=Ht(this);if(!W||F.und(P))return s(At(this,!0));const V=F.und(o.reset)?d&&!o.default:!F.und(C)&&Ii(o.reset,f),G=V?C:this.get(),re=Mi(P),ie=F.num(re)||F.arr(re)||Ls(re),K=!A&&(!ie||Ii(h.immediate||o.immediate,f));if(j){const Le=du(P);if(Le!==W.constructor)if(K)W=this._set(re);else throw Error(`Cannot animate between ${W.constructor.name} and ${Le.name}, as the "to" prop suggests`)}const ke=W.constructor;let we=_t(P),Me=!1;if(!we){const Le=V||!qa(this)&&I;(j||Le)&&(Me=on(Mi(G),re),we=!Me),(!on(x.immediate,K)&&!K||!on(T.decay,M)||!on(T.velocity,U))&&(we=!0)}if(Me&&Cn(this)&&(x.changed&&!V?we=!0:we||this._stop(S)),!A&&((we||_t(S))&&(x.values=W.getPayload(),x.toValues=_t(P)?null:ke==ws?[1]:vt(re)),x.immediate!=K&&(x.immediate=K,!K&&!V&&this._set(S)),we)){const{onRest:Le}=x;he(Jx,Re=>Ip(this,o,Re));const Te=At(this,Si(this,S));Pi(this._pendingCalls,Te),this._pendingCalls.add(s),x.changed&&ce.batchedUpdates(()=>{x.changed=!V,Le?.(Te,this),V?Wn(h.onRest,Te):x.onStart?.(Te,this)})}V&&this._set(G),A?s(Yh(o.to,o,this._state,this)):we?this._start():Cn(this)&&!j?this._pendingCalls.add(s):s(Gh(G))}_focus(n){const o=this.animation;n!==o.to&&(vp(this)&&this._detach(),o.to=n,vp(this)&&this._attach())}_attach(){let n=0;const{to:o}=this.animation;_t(o)&&(Lr(o,this),hu(o)&&(n=o.priority+1)),this.priority=n}_detach(){const{to:n}=this.animation;_t(n)&&Di(n,this)}_set(n,o=!0){const s=dt(n);if(!F.und(s)){const u=Ht(this);if(!u||!on(s,u.getValue())){const d=du(s);!u||u.constructor!=d?Ou(this,d.create(s)):u.setValue(s),u&&ce.batchedUpdates(()=>{this._onChange(s,o)})}}return Ht(this)}_onStart(){const n=this.animation;n.changed||(n.changed=!0,ki(this,"onStart",At(this,Si(this,n.to)),this))}_onChange(n,o){o||(this._onStart(),Wn(this.animation.onChange,n,this)),Wn(this.defaultProps.onChange,n,this),super._onChange(n,o)}_start(){const n=this.animation;Ht(this).reset(dt(n.to)),n.immediate||(n.fromValues=n.values.map(o=>o.lastPosition)),Cn(this)||(jp(this,!0),wi(this)||this._resume())}_resume(){Mt.skipAnimation?this.finish():Is.start(this)}_stop(n,o){if(Cn(this)){jp(this,!1);const s=this.animation;he(s.values,d=>{d.done=!0}),s.toValues&&(s.onChange=s.onPause=s.onResume=void 0),Ai(this,{type:"idle",parent:this});const u=o?_r(this.get()):At(this.get(),Si(this,n??s.to));Pi(this._pendingCalls,u),s.changed&&(s.changed=!1,ki(this,"onRest",u,this))}}};function Si(n,o){const s=Mi(o),u=Mi(n.get());return on(u,s)}function qh(n,o=n.loop,s=n.to){const u=Wn(o);if(u){const d=u!==!0&&Wh(u),f=(d||n).reverse,h=!d||d.reset;return Fi({...n,loop:o,default:!1,pause:void 0,to:!f||fu(s)?s:void 0,from:h?n.from:void 0,reset:h,...d})}}function Fi(n){const{to:o,from:s}=n=Wh(n),u=new Set;return F.obj(o)&&zp(o,u),F.obj(s)&&zp(s,u),n.keys=u.size?Array.from(u):null,n}function Zx(n){const o=Fi(n);return F.und(o.default)&&(o.default=Fu(o)),o}function zp(n,o){Gt(n,(s,u)=>s!=null&&o.add(u))}var Jx=["onStart","onRest","onChange","onPause","onResume"];function Ip(n,o,s){n.animation[s]=o[s]!==Hh(o,s)?Bh(o[s],n.key):void 0}function ki(n,o,...s){n.animation[o]?.(...s),n.defaultProps[o]?.(...s)}var ew=["onStart","onChange","onRest"],tw=1,nw=class{constructor(n,o){this.id=tw++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),o&&(this._flush=o),n&&this.start({default:!0,...n})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(n=>n.idle&&!n.isDelayed&&!n.isPaused)}get item(){return this._item}set item(n){this._item=n}get(){const n={};return this.each((o,s)=>n[s]=o.get()),n}set(n){for(const o in n){const s=n[o];F.und(s)||this.springs[o].set(s)}}update(n){return n&&this.queue.push(Fi(n)),this}start(n){let{queue:o}=this;return n?o=vt(n).map(Fi):this.queue=[],this._flush?this._flush(this,o):(tm(this,o),vu(this,o))}stop(n,o){if(n!==!!n&&(o=n),o){const s=this.springs;he(vt(o),u=>s[u].stop(!!n))}else Oi(this._state,this._lastAsyncId),this.each(s=>s.stop(!!n));return this}pause(n){if(F.und(n))this.start({pause:!0});else{const o=this.springs;he(vt(n),s=>o[s].pause())}return this}resume(n){if(F.und(n))this.start({pause:!1});else{const o=this.springs;he(vt(n),s=>o[s].resume())}return this}each(n){Gt(this.springs,n)}_onFrame(){const{onStart:n,onChange:o,onRest:s}=this._events,u=this._active.size>0,d=this._changed.size>0;(u&&!this._started||d&&!this._started)&&(this._started=!0,Ri(n,([x,S])=>{S.value=this.get(),x(S,this,this._item)}));const f=!u&&this._started,h=d||f&&s.size?this.get():null;d&&o.size&&Ri(o,([x,S])=>{S.value=h,x(S,this,this._item)}),f&&(this._started=!1,Ri(s,([x,S])=>{S.value=h,x(S,this,this._item)}))}eventObserved(n){if(n.type=="change")this._changed.add(n.parent),n.idle||this._active.add(n.parent);else if(n.type=="idle")this._active.delete(n.parent);else return;ce.onFrame(this._onFrame)}};function vu(n,o){return Promise.all(o.map(s=>Xh(n,s))).then(s=>Vu(n,s))}async function Xh(n,o,s){const{keys:u,to:d,from:f,loop:h,onRest:x,onResolve:S}=o,w=F.obj(o.default)&&o.default;h&&(o.loop=!1),d===!1&&(o.to=null),f===!1&&(o.from=null);const P=F.arr(d)||F.fun(d)?d:void 0;P?(o.to=void 0,o.onRest=void 0,w&&(w.onRest=void 0)):he(ew,T=>{const M=o[T];if(F.fun(M)){const U=n._events[T];o[T]=({finished:W,cancelled:V})=>{const G=U.get(M);G?(W||(G.finished=!1),V&&(G.cancelled=!0)):U.set(M,{value:null,finished:W||!1,cancelled:V||!1})},w&&(w[T]=o[T])}});const C=n._state;o.pause===!C.paused?(C.paused=o.pause,Pi(o.pause?C.pauseQueue:C.resumeQueue)):C.paused&&(o.pause=!0);const I=(u||Object.keys(n.springs)).map(T=>n.springs[T].start(o)),j=o.cancel===!0||Hh(o,"cancel")===!0;(P||j&&C.asyncId)&&I.push(Qh(++n._lastAsyncId,{props:o,state:C,actions:{pause:uu,resume:uu,start(T,M){j?(Oi(C,n._lastAsyncId),M(_r(n))):(T.onRest=x,M(Yh(P,T,C,n)))}}})),C.paused&&await new Promise(T=>{C.resumeQueue.add(T)});const A=Vu(n,await Promise.all(I));if(h&&A.finished&&!(s&&A.noop)){const T=qh(o,h,d);if(T)return tm(n,[T]),Xh(n,T,!0)}return S&&ce.batchedUpdates(()=>S(A,n,n.item)),A}function Tp(n,o){const s={...n.springs};return o&&he(vt(o),u=>{F.und(u.keys)&&(u=Fi(u)),F.obj(u.to)||(u={...u,to:void 0}),em(s,u,d=>Jh(d))}),Zh(n,s),s}function Zh(n,o){Gt(o,(s,u)=>{n.springs[u]||(n.springs[u]=s,Lr(s,n))})}function Jh(n,o){const s=new Xx;return s.key=n,o&&Lr(s,o),s}function em(n,o,s){o.keys&&he(o.keys,u=>{(n[u]||(n[u]=s(u)))._prepareNode(o)})}function tm(n,o){he(o,s=>{em(n.springs,s,u=>Jh(u,n))})}var rw=H.createContext({pause:!1,immediate:!1}),iw=()=>{const n=[],o=function(u){zx();const d=[];return he(n,(f,h)=>{if(F.und(u))d.push(f.start());else{const x=s(u,f,h);x&&d.push(f.start(x))}}),d};o.current=n,o.add=function(u){n.includes(u)||n.push(u)},o.delete=function(u){const d=n.indexOf(u);~d&&n.splice(d,1)},o.pause=function(){return he(n,u=>u.pause(...arguments)),this},o.resume=function(){return he(n,u=>u.resume(...arguments)),this},o.set=function(u){he(n,(d,f)=>{const h=F.fun(u)?u(f,d):u;h&&d.set(h)})},o.start=function(u){const d=[];return he(n,(f,h)=>{if(F.und(u))d.push(f.start());else{const x=this._getProps(u,f,h);x&&d.push(f.start(x))}}),d},o.stop=function(){return he(n,u=>u.stop(...arguments)),this},o.update=function(u){return he(n,(d,f)=>d.update(this._getProps(u,d,f))),this};const s=function(u,d,f){return F.fun(u)?u(f,d):u};return o._getProps=s,o};function ow(n,o,s){const u=F.fun(o)&&o;u&&!s&&(s=[]);const d=H.useMemo(()=>u||arguments.length==3?iw():void 0,[]),f=H.useRef(0),h=bh(),x=H.useMemo(()=>({ctrls:[],queue:[],flush(U,W){const V=Tp(U,W);return f.current>0&&!x.queue.length&&!Object.keys(V).some(re=>!U.springs[re])?vu(U,W):new Promise(re=>{Zh(U,V),x.queue.push(()=>{re(vu(U,W))}),h()})}}),[]),S=H.useRef([...x.ctrls]),w=H.useRef([]),P=xp(n)||0;H.useMemo(()=>{he(S.current.slice(n,P),U=>{Hx(U,d),U.stop(!0)}),S.current.length=n,C(P,n)},[n]),H.useMemo(()=>{C(0,Math.min(P,n))},s);function C(U,W){for(let V=U;V<W;V++){const G=S.current[V]||(S.current[V]=new nw(null,x.flush)),re=u?u(V,G):o[V];re&&(w.current[V]=Zx(re))}}const I=S.current.map((U,W)=>Tp(U,w.current[W])),j=H.useContext(rw),A=xp(j),T=j!==A&&Bx(j);Mu(()=>{f.current++,x.ctrls=S.current;const{queue:U}=x;U.length&&(x.queue=[],he(U,W=>W())),he(S.current,(W,V)=>{d?.add(W),T&&W.start({default:j});const G=w.current[V];G&&(Wx(W,G.ref),W.ref?W.queue.push(G):W.start(G))})}),Mh(()=>()=>{he(x.ctrls,U=>U.stop(!0))});const M=I.map(U=>({...U}));return d?[M,d]:M}function sw(n,o){const s=F.fun(n),[[u],d]=ow(1,s?n:[n],s?[]:o);return s||arguments.length==2?[u,d]:u}var lw=class extends Uu{constructor(n,o){super(),this.source=n,this.idle=!0,this._active=new Set,this.calc=Li(...o);const s=this._get(),u=du(s);Ou(this,u.create(s))}advance(n){const o=this._get(),s=this.get();on(o,s)||(Ht(this).setValue(o),this._onChange(o,this.idle)),!this.idle&&$p(this._active)&&Xa(this)}_get(){const n=F.arr(this.source)?this.source.map(dt):vt(dt(this.source));return this.calc(...n)}_start(){this.idle&&!$p(this._active)&&(this.idle=!1,he(Ns(this),n=>{n.done=!1}),Mt.skipAnimation?(ce.batchedUpdates(()=>this.advance()),Xa(this)):Is.start(this))}_attach(){let n=1;he(vt(this.source),o=>{_t(o)&&Lr(o,this),hu(o)&&(o.idle||this._active.add(o),n=Math.max(n,o.priority+1))}),this.priority=n,this._start()}_detach(){he(vt(this.source),n=>{_t(n)&&Di(n,this)}),this._active.clear(),Xa(this)}eventObserved(n){n.type=="change"?n.idle?this.advance():(this._active.add(n.parent),this._start()):n.type=="idle"?this._active.delete(n.parent):n.type=="priority"&&(this.priority=vt(this.source).reduce((o,s)=>Math.max(o,(hu(s)?s.priority:0)+1),0))}};function aw(n){return n.idle!==!1}function $p(n){return!n.size||Array.from(n).every(aw)}function Xa(n){n.idle||(n.idle=!0,he(Ns(n),o=>{o.done=!0}),Ai(n,{type:"idle",parent:n}))}Mt.assign({createStringInterpolator:Ah,to:(n,o)=>new lw(n,o)});var uw=Fp(),nm=/^--/;function cw(n,o){return o==null||typeof o=="boolean"||o===""?"":typeof o=="number"&&o!==0&&!nm.test(n)&&!(Ti.hasOwnProperty(n)&&Ti[n])?o+"px":(""+o).trim()}var Lp={};function dw(n,o){if(!n.nodeType||!n.setAttribute)return!1;const s=n.nodeName==="filter"||n.parentNode&&n.parentNode.nodeName==="filter",{className:u,style:d,children:f,scrollTop:h,scrollLeft:x,viewBox:S,...w}=o,P=Object.values(w),C=Object.keys(w).map(I=>s||n.hasAttribute(I)?I:Lp[I]||(Lp[I]=I.replace(/([A-Z])/g,j=>"-"+j.toLowerCase())));f!==void 0&&(n.textContent=f);for(const I in d)if(d.hasOwnProperty(I)){const j=cw(I,d[I]);nm.test(I)?n.style.setProperty(I,j):n.style[I]=j}C.forEach((I,j)=>{n.setAttribute(I,P[j])}),u!==void 0&&(n.className=u),h!==void 0&&(n.scrollTop=h),x!==void 0&&(n.scrollLeft=x),S!==void 0&&n.setAttribute("viewBox",S)}var Ti={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fw=(n,o)=>n+o.charAt(0).toUpperCase()+o.substring(1),pw=["Webkit","Ms","Moz","O"];Ti=Object.keys(Ti).reduce((n,o)=>(pw.forEach(s=>n[fw(s,o)]=n[o]),n),Ti);var hw=/^(matrix|translate|scale|rotate|skew)/,mw=/^(translate)/,gw=/^(rotate|skew)/,Za=(n,o)=>F.num(n)&&n!==0?n+o:n,fs=(n,o)=>F.arr(n)?n.every(s=>fs(s,o)):F.num(n)?n===o:parseFloat(n)===o,vw=class extends Ds{constructor({x:n,y:o,z:s,...u}){const d=[],f=[];(n||o||s)&&(d.push([n||0,o||0,s||0]),f.push(h=>[`translate3d(${h.map(x=>Za(x,"px")).join(",")})`,fs(h,0)])),Gt(u,(h,x)=>{if(x==="transform")d.push([h||""]),f.push(S=>[S,S===""]);else if(hw.test(x)){if(delete u[x],F.und(h))return;const S=mw.test(x)?"px":gw.test(x)?"deg":"";d.push(vt(h)),f.push(x==="rotate3d"?([w,P,C,I])=>[`rotate3d(${w},${P},${C},${Za(I,S)})`,fs(I,0)]:w=>[`${x}(${w.map(P=>Za(P,S)).join(",")})`,fs(w,x.startsWith("scale")?1:0)])}}),d.length&&(u.transform=new yw(d,f)),super(u)}},yw=class extends $h{constructor(n,o){super(),this.inputs=n,this.transforms=o,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let n="",o=!0;return he(this.inputs,(s,u)=>{const d=dt(s[0]),[f,h]=this.transforms[u](F.arr(d)?d:s.map(dt));n+=" "+f,o=o&&h}),o?"none":n}observerAdded(n){n==1&&he(this.inputs,o=>he(o,s=>_t(s)&&Lr(s,this)))}observerRemoved(n){n==0&&he(this.inputs,o=>he(o,s=>_t(s)&&Di(s,this)))}eventObserved(n){n.type=="change"&&(this._value=null),Ai(this,n)}},xw=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Mt.assign({batchedUpdates:uw.unstable_batchedUpdates,createStringInterpolator:Ah,colors:lx});var ww=Mx(xw,{applyAnimatedValues:dw,createAnimatedStyle:n=>new vw(n),getComponentProps:({scrollTop:n,scrollLeft:o,...s})=>s}),Sw=ww.animated;function kw(n={threshold:0,rootMargin:"0px"}){const o=H.useRef(null),[s,u]=H.useState(!1);return H.useEffect(()=>{const d=o.current;if(!d)return;const f=new IntersectionObserver(([h])=>{u(h.isIntersecting)},n);return f.observe(d),()=>f.disconnect()},[n]),{ref:o,inView:s}}const Ew=z.section`
    padding: 80px 16px 80px;
    overflow: visible;
    background-color: var(--color-bg-darkblue);
    position: relative;

${L.tablet} { 
  overflow: hidden;

 }
`,_w=z.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 70px;
  color: var(--color-bg-light);
  ${L.laptop} { 
   margin-bottom: 0px;

 }
`,Np=z.div`
  opacity: ${n=>(n.$revealed,1)};
  transform: translate3d(
    ${n=>n.$dir==="left"?"-24px":n.$dir==="right"?"24px":"0"},
    ${n=>n.$dir==="bottom"?"24px":"0"},
    0
  );
  transition: opacity var(--transition-normal) ${n=>n.$delay||0}ms,
              transform var(--transition-normal) ${n=>n.$delay||0}ms;
`,Cw=z.div`
  position: relative;
  width: 100%;
  height: 800px; /* scale to 90% of viewport height */
  perspective: 1200px;
  overflow: visible;
`,Pw=z.a`
  color: inherit;
  text-decoration: none;
`,rm=z.div`
  position: absolute;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  /* Glass + border glow */
  background-color: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04);

  transition: box-shadow 0.35s ease, filter 0.35s ease; // removed transform transition to avoid sliding off ellipse
  z-index: ${n=>n.zIndex};

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%);
    transition: opacity 0.35s ease;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.24),
              0 0 0 1px rgba(255, 255, 255, 0.17),
              0 0 20px var(--color-accent);
              transform: box-shadow 0.35s ease;
    filter: brightness(1.04);
} 
  &:hover:before { opacity: 1; }
`,jw=z.div`
  flex: 1 1 auto;
  overflow: hidden;
  border-radius:29px 20px 0 0;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${rm}:hover & img { transform: scale(1.1); }
`,Ap=z.div`
  padding: 16px 20px;
  background-color: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75));
  border: 0 0 20px 20px;
`,Dp=z.h3`
  margin: 0 0 8px;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-bg-light);
`,bp=z.p`
  margin: 0;
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.3;
  color: var(--color-text-grey);
`,Rw=z.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  margin-inline:40px;
  ${L.tablet} { 
    padding-bottom:70px;
  }
`,im=z.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  background-color: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04);
  transition: box-shadow 0.35s ease, filter 0.35s ease, transform 0.35s ease;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%);
    transition: opacity 0.35s ease;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), 0 0 18px var(--color-accent);
    transform: translateY(-6px) scale(1.01);
    filter: brightness(1.04);
  }
  &:hover:before { opacity: 1; }
`,zw=z.div`
  width: 100%;
  height: clamp(180px, 28vw, 260px);
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
    transform-origin: center;
  }

  ${im}:hover & img { transform: scale(1.08); }
`,Iw=[{id:1,color:"var(--color-primary)",image:"https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80",url:"https://unsplash.com/photos/1"},{id:2,color:"var(--color-accent)",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",url:"https://unsplash.com/photos/2"},{id:3,color:"var(--color-secondary)",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",url:"https://unsplash.com/photos/3"},{id:4,color:"var(--color-primary)",image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",url:"https://unsplash.com/photos/4"},{id:5,color:"var(--color-accent)",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",url:"https://unsplash.com/photos/5"},{id:6,color:"var(--color-accent)",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",url:"https://unsplash.com/photos/5"}],Tw=()=>{const{t:n}=Tn(),[o,s]=H.useState(0),[u,d]=H.useState(window.innerWidth),[f,h]=H.useState(window.innerHeight),[x,S]=H.useState(null),[w,P]=H.useState(0),[C,I]=H.useState(!1),j=u>=1024,A=Ci({threshold:.2,rootMargin:"0px 0px -10% 0px"}),T=kw({threshold:0,rootMargin:"0px"}),M=H.useRef(!1),U=H.useRef(0),W=H.useRef(0),V=H.useRef(!1),G=H.useRef(0),re=H.useRef(!1),ie=300,K=100,ke=u/2,we=400,Me=Math.min(500,Math.max(0,(u-K-ie)/2)),Le=100,Te=n("portfolio.items",{returnObjects:!0})||[],Re=H.useMemo(()=>Iw.map((b,te)=>({...b,...Te[te]||{title:`Progetto ${te+1}`,description:"Caricamento..."}})),[Te]),Oe=2*Math.PI/Re.length,nt=.007,Fe=.004;H.useEffect(()=>{const b=()=>{d(window.innerWidth),h(window.innerHeight)};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]),H.useEffect(()=>{if(!j)return;const b=()=>{T.inView&&(M.current||(window.requestAnimationFrame(()=>{s(window.pageYOffset),M.current=!1}),M.current=!0))};return window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b)}},[T.inView,j]),H.useEffect(()=>{if(j)if(T.inView){const b=window.pageYOffset;G.current=b,s(b),re.current=!0}else re.current&&(P(b=>b+(o-G.current)*nt),re.current=!1)},[T.inView,j]);const Se=H.useMemo(()=>T.inView?(o-G.current)*nt+w:w,[o,w,T.inView]),{rotation:B}=sw({to:{rotation:Se},config:{tension:90,friction:35,mass:3}}),J=b=>{I(!0),U.current=b,W.current=w,V.current=!1},Q=b=>{b.button===0&&(b.preventDefault(),J(b.clientX))},v=b=>{b.touches&&b.touches.length>0&&J(b.touches[0].clientX)};H.useEffect(()=>{if(!C||!j)return;const b=q=>{const de=(q.touches?q.touches[0].clientX:q.clientX)-U.current;Math.abs(de)>3&&(V.current=!0),P(W.current+de*Fe)},te=()=>{I(!1),setTimeout(()=>{V.current=!1},0)};return window.addEventListener("mousemove",b),window.addEventListener("mouseup",te),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",te),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",te),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",te)}},[C,Fe,j]);const R=b=>{(C||V.current)&&(b.preventDefault(),b.stopPropagation())},ue=Sw(rm);return y.jsxs(Ew,{id:"portfolio",ref:b=>{A.ref.current=b,T.ref.current=b},children:[y.jsx(Np,{$revealed:A.isVisible,children:y.jsx(_w,{children:n("portfolio.title")})}),A.isVisible&&(j?y.jsx(Np,{$revealed:A.isVisible,children:y.jsx(Cw,{onMouseDown:Q,onTouchStart:v,children:Re.map((b,te)=>y.jsx(Pw,{href:b.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Vai al progetto ${b.title}`,onClick:R,children:y.jsxs(ue,{$zIndex:x===b.id?1e4:void 0,onMouseEnter:q=>{const ae=q.currentTarget.getBoundingClientRect();q.currentTarget.style.setProperty("--x",`${q.clientX-ae.left}px`),q.currentTarget.style.setProperty("--y",`${q.clientY-ae.top}px`),S(b.id)},onMouseMove:q=>{const ae=q.currentTarget.getBoundingClientRect();q.currentTarget.style.setProperty("--x",`${q.clientX-ae.left}px`),q.currentTarget.style.setProperty("--y",`${q.clientY-ae.top}px`)},onMouseLeave:()=>S(null),style:{transform:B.to(q=>{const ae=Oe*te+q,de=ke+Me*Math.cos(ae)-300/2,me=we+Le*Math.sin(ae)-420/2,Ve=x===b.id?1.05:1;return`translate3d(${de}px, ${me}px, 0px) scale(${Ve})`}),opacity:B.to(q=>{const ae=Oe*te+q;return .2+1*((Math.sin(ae)+1)/2)}),zIndex:B.to(q=>{const ae=Oe*te+q,de=(Math.sin(ae)+1)/2;return x===b.id?1e4:Math.round(50+de*50)})},children:[y.jsx(jw,{children:y.jsx("img",{src:b.image,alt:b.title,loading:"lazy"})}),y.jsxs(Ap,{children:[y.jsx(Dp,{children:b.title}),y.jsx(bp,{children:b.description})]})]})},b.id))})}):y.jsx(Rw,{children:Re.map(b=>y.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Vai al progetto ${b.title}`,children:y.jsxs(im,{onMouseEnter:te=>{const q=te.currentTarget.getBoundingClientRect();te.currentTarget.style.setProperty("--x",`${te.clientX-q.left}px`),te.currentTarget.style.setProperty("--y",`${te.clientY-q.top}px`)},onMouseMove:te=>{const q=te.currentTarget.getBoundingClientRect();te.currentTarget.style.setProperty("--x",`${te.clientX-q.left}px`),te.currentTarget.style.setProperty("--y",`${te.clientY-q.top}px`)},children:[y.jsx(zw,{children:y.jsx("img",{src:b.image,alt:b.title,loading:"lazy"})}),y.jsxs(Ap,{children:[y.jsx(Dp,{children:b.title}),y.jsx(bp,{children:b.description})]})]})},b.id))}))]})},yu="#ffffff",xu="#ffffffdd",$w="'Inter', sans-serif",Lw="'Oswald', sans-serif",Nw="1440px",Aw=`
  display: flex;
  align-items: center;
  justify-content: center;
`,Bu=`
  position: absolute;
  left: 0;
  top: 0;
`,Hu=`
  font-family: ${Lw};
  font-weight: 600;
`,Dw=`
  background-position: center;
  background-size: cover;
  box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.6);
`,bw=`
  border-radius: 99px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Mw=z.div`
  position: relative;
  max-width: ${Nw};
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;

  ${L.tablet} {
    height: 90vh;
  }

  ${L.laptop} {
    height: 100vh;
  }
`,Ow=z.div`
  ${Bu}
  ${Dw}
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;

  ${L.tablet} {
    width: 90%;
    left: 5%;
  }

  ${L.laptop} {
    width: 80%;
    left: 10%;
  }

  ${L.desktop} {
    width: 70%;
    left: 15%;
  }
`,Fw=z.div`
  ${Bu}
  color: ${xu};
  padding-left: 16px;

  ${L.tablet} {
    padding-left: 24px;
  }

  ${L.laptop} {
    padding-left: 32px;
  }

  .content-place {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 500;

    ${L.tablet} {
      font-size: 16px;
    }

    ${L.laptop} {
      font-size: 18px;
    }
  }

  .content-title-1,
  .content-title-2 {
    ${Hu}
    font-size: 20px;

    ${L.tablet} {
      font-size: 28px;
    }

    ${L.laptop} {
      font-size: 36px;
    }

    ${L.desktop} {
      font-size: 45px;
    }
  }

  .content-start {
    width: 30px;
    height: 5px;
    border-radius: 99px;
    background-color: ${xu};

    ${L.tablet} {
      width: 40px;
      height: 6px;
    }
  }
`,Vw=z.div`
  z-index: 22;
  position: absolute;
  top: 150px;
  left: 20px;
  color: ${xu};
  font-family: ${$w};

  ${L.tablet} {
    top: 180px;
    left: 40px;
  }

  ${L.laptop} {
    top: 210px;
    left: 60px;
  }

  ${L.desktop} {
    left: 80px;
  }
`,Uw=z.div`
  height: 46px;
  overflow: hidden;
  margin-bottom: 10px;

  ${L.tablet} {
    height: 56px;
  }

  ${L.laptop} {
    height: 70px;
  }

  .text {
    padding-top: 16px;
    font-size: 20px;
    position: relative;
    font-weight: 500;

    ${L.tablet} {
      font-size: 24px;
    }

    ${L.laptop} {
      font-size: 28px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 4px;
      border-radius: 99px;
      background-color: white;

      ${L.tablet} {
        width: 40px;
        height: 5px;
      }
    }
  }
`,Bw=z.div`
  margin-top: 2px;
  height: 70px;
  overflow: hidden;

  ${L.tablet} {
    height: 85px;
  }

  ${L.laptop} {
    height: 100px;
  }

  ${L.desktop} {
    height: 120px;
  }

  .title-1 {
    ${Hu}
    font-size: 40px;
    line-height: 1;

    ${L.tablet} {
      font-size: 50px;
    }

    ${L.laptop} {
      font-size: 60px;
    }

    ${L.desktop} {
      font-size: 70px;
    }
  }
`,Hw=z.div`
  margin-top: 2px;
  height: 70px;
  overflow: hidden;

  ${L.tablet} {
    height: 85px;
  }

  ${L.laptop} {
    height: 100px;
  }

  ${L.desktop} {
    height: 120px;
  }

  .title-2 {
    ${Hu}
    font-size: 40px;
    line-height: 1;

    ${L.tablet} {
      font-size: 50px;
    }

    ${L.laptop} {
      font-size: 60px;
    }

    ${L.desktop} {
      font-size: 70px;
    }
  }
`,Ww=z.div`
  margin-top: 16px;
  width: 90%;
  max-width: 400px;
  font-size: 14px;
  line-height: 1.4;

  ${L.tablet} {
    width: 450px;
    font-size: 16px;
  }

  ${L.laptop} {
    width: 500px;
    font-size: 18px;
  }

  ${L.desktop} {
    width: 550px;
    font-size: 20px;
  }
`,Qw=z.div`
  width: 100%;
  max-width: 400px;
  margin-top: 24px;
  display: flex;
  align-items: center;

  ${L.tablet} {
    width: 450px;
  }

  ${L.laptop} {
    width: 500px;
  }

  ${L.desktop} {
    width: 550px;
  }
`,Gw=z.a`
  ${bw}
  border: 1px solid ${yu};
  background-color: transparent;
  padding: 4px 24px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  ${L.tablet} {
    font-size: 14px;
    padding: 6px 28px;
  }

  ${L.laptop} {
    font-size: 16px;
    padding: 8px 32px;
  }

  &:hover {
    background-color: ${yu};
    color: #000;
  }
`,Yw=z.div`
  position: absolute;
  left: 20px;
  bottom: 30px;
  display: inline-flex;
  z-index: 60;
  align-items: center;

  ${L.tablet} {
    left: 40px;
    bottom: 40px;
  }

  ${L.laptop} {
    left: 50px;
    bottom: 50px;
  }

  ${L.desktop} {
    left: 80px;
  }
`,Mp=z.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffffff55;
  ${Aw}
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: #ffffff99;

  ${L.tablet} {
    width: 48px;
    height: 48px;
  }

  ${L.laptop} {
    width: 56px;
    height: 56px;
  }

  &:hover:not(:disabled) {
    border-color: #ffffff;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:nth-child(2) {
    margin-left: 20px;

    ${L.tablet} {
      margin-left: 24px;
    }

    ${L.laptop} {
      margin-left: 28px;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;

    ${L.tablet} {
      width: 24px;
      height: 24px;
    }

    ${L.laptop} {
      width: 28px;
      height: 28px;
    }
  }
`,Kw=z.div`
  margin-left: 24px;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;

  ${L.tablet} {
    width: 400px;
    margin-left: 28px;
  }

  ${L.laptop} {
    width: 500px;
    margin-left: 32px;
  }

  ${L.desktop} {
    width: 600px;
  }
`,qw=z.div`
  width: 100%;
  height: 3px;
  background-color: #ffffff33;
  border-radius: 99px;
  overflow: hidden;
`,Xw=z.div`
  height: 3px;
  background-color: ${yu};
  transition: width 0.3s ease;
  border-radius: 99px;
`,Zw=z.div`
  ${Bu}
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  pointer-events: none;
  opacity: 0;
`,Ei=[{id:1,location:"Switzerland Alps",title1:"SAINT",title2:"ANTONIEN",description:"Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",url:"#"},{id:2,location:"Alps Region",title1:"INTERLAKEN",title2:"SWITZERLAND",description:"Nestled between two pristine lakes, Interlaken serves as the gateway to some of Switzerland's most spectacular alpine scenery. Known for its outdoor activities, from paragliding to canyoning, this picturesque town offers breathtaking views and unforgettable adventures.",image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",url:"#"},{id:3,location:"Dolomites",title1:"CORTINA",title2:"D'AMPEZZO",description:`Often called the "Queen of the Dolomites," Cortina d'Ampezzo combines luxury with natural beauty. This historic alpine resort town offers world-class skiing, refined Italian cuisine, and stunning mountain landscapes that have captivated visitors for generations.`,image:"https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",url:"#"}],Jw=()=>{const{t:n}=Tn(),[o,s]=H.useState(0),[u,d]=H.useState(!1),[f,h]=H.useState(window.innerWidth),x=H.useRef(null),S=H.useRef(null);H.useEffect(()=>{const j=()=>h(window.innerWidth);return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const w=()=>{u||(d(!0),s(j=>(j+1)%Ei.length),setTimeout(()=>d(!1),600))},P=()=>{u||(d(!0),s(j=>(j-1+Ei.length)%Ei.length),setTimeout(()=>d(!1),600))},C=Ei[o],I=(o+1)/Ei.length*100;return y.jsxs(Mw,{ref:x,id:"workScroll",children:[y.jsx(Ow,{style:{backgroundImage:`url(${C.image})`,transform:u?"scale(1.05)":"scale(1)"},children:y.jsxs(Fw,{children:[y.jsx("div",{className:"content-place",children:C.location}),y.jsx("div",{className:"content-title-1",children:C.title1}),y.jsx("div",{className:"content-title-2",children:C.title2}),y.jsx("div",{className:"content-start"})]})}),y.jsxs(Vw,{children:[y.jsx(Uw,{children:y.jsx("div",{className:"text",children:C.location})}),y.jsx(Bw,{children:y.jsx("div",{className:"title-1",children:C.title1})}),y.jsx(Hw,{children:y.jsx("div",{className:"title-2",children:C.title2})}),y.jsx(Ww,{children:C.description}),y.jsx(Qw,{children:y.jsx(Gw,{href:C.url,target:"_blank",rel:"noopener noreferrer",children:"Discover Location"})})]}),y.jsxs(Yw,{children:[y.jsx(Mp,{onClick:P,disabled:u,children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),y.jsx(Mp,{onClick:w,disabled:u,children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})}),y.jsx(Kw,{children:y.jsx(qw,{children:y.jsx(Xw,{ref:S,style:{width:`${I}%`}})})})]}),y.jsx(Zw,{})]})},om=z.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: none;
  cursor: pointer;
  opacity: ${n=>n.$isVisible?1:0};
  visibility: ${n=>n.$isVisible?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`,e2=z.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  
  circle {
    fill: transparent;
    stroke: var(--color-accent, #007bff);
    stroke-width: 2;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease;
  }
`,t2=z.span`
  font-size: 18px;
  font-weight: bold;
  transform: rotate(180deg);
  transition: transform 0.3s ease;
  
  ${om}:hover & {
    transform: rotate(0deg);
  }
`,n2=()=>{const[n,o]=H.useState(0),[s,u]=H.useState(!1),d=22,f=2*Math.PI*d,h=f-n/100*f;H.useEffect(()=>{const S=()=>{const w=window.scrollY,P=document.documentElement.scrollHeight-window.innerHeight,C=P>0?w/P*100:0;o(C),u(w>100)};return window.addEventListener("scroll",S,{passive:!0}),()=>window.removeEventListener("scroll",S)},[]);const x=()=>{window.scrollTo({top:0,behavior:"smooth"})};return y.jsxs(om,{onClick:x,$isVisible:s,"aria-label":"Torna su",children:[y.jsx(e2,{viewBox:"0 0 50 50",children:y.jsx("circle",{cx:"25",cy:"25",r:d,strokeDasharray:f,strokeDashoffset:h})}),y.jsx(t2,{children:"↑"})]})},r2=z.div``;function i2(){const[n,o]=H.useState(!0),[s,u]=H.useState(!1),[d,f]=H.useState(!1);return H.useEffect(()=>{const h=setTimeout(()=>{u(!0),setTimeout(()=>{f(!0),setTimeout(()=>o(!1),cp)},cp)},c1);return()=>clearTimeout(h)},[]),y.jsx(hh,{children:y.jsxs(r2,{children:[y.jsx(a1,{}),y.jsx(M1,{isLoading:n}),y.jsx(ay,{}),y.jsx(Tw,{}),y.jsx(Jw,{}),y.jsx(Qy,{}),y.jsx(Jy,{}),y.jsx(n2,{}),n&&y.jsx(h1,{hideText:s,hidePreloader:d})]})})}const o2=cv`
  /* CSS Variables preserved from src/Styles/colors.css */
  :root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --background: #ffffff;
  --surface: #f9fafb;
  --border: #e5e7eb;
  --shadow: rgba(0, 0, 0, 0.1);

  /* Background*/
  --color-bg-dark: #0f172a;
  --color-card-grey: #000000;
  --color-bg-darkblue:#09101A;
  --color-accent: #55e6a5;
  --color-text-dark: #333;
  --color-bg-light: #fff;
  --color-text-grey: #a2a2a2;
  --z-preloader: 10;

  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  /* Transitions */
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}

  /* Normalize subset kept from index.css to avoid visual change */
  *, *::before, *::after { box-sizing: border-box; }
  img { max-width: 100%; display: block; }
  ul { list-style: none; padding-left: 0; margin: 0; }
  a { text-decoration: none; color: inherit; }
  html { line-height: 1.15; -webkit-text-size-adjust: 100%; }
  body { margin: 0; font-family: 'Montserrat', Arial, sans-serif; background: var(--color-bg-light, #fff); }
  input, button, textarea{border:none; 
    outline: none;}

  /* Utility preserved */
  .text-large-bold { font-size: clamp(2.5rem, 10vw, 6.25rem); font-weight: bold; color: var(--color-text-dark, #333); margin: 0; position: relative; }
`;cg.createRoot(document.getElementById("root")).render(y.jsx(Qt.StrictMode,{children:y.jsxs(hh,{children:[y.jsx(o2,{}),y.jsx(i2,{})]})}));
