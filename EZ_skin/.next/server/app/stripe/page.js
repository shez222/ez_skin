(()=>{var e={};e.id=363,e.ids=[363],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},23749:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>p,pages:()=>l,routeModule:()=>d,tree:()=>c}),r(31777),r(38048),r(35866);var n=r(23191),o=r(88716),i=r(37922),s=r.n(i),a=r(95231),u={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>a[e]);r.d(t,u);let c=["",{children:["stripe",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,31777)),"C:\\Users\\Shahroz\\Desktop\\ez\\ez_skin\\EZ_skin\\src\\app\\stripe\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,38048)),"C:\\Users\\Shahroz\\Desktop\\ez\\ez_skin\\EZ_skin\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\Shahroz\\Desktop\\ez\\ez_skin\\EZ_skin\\src\\app\\stripe\\page.tsx"],p="/stripe/page",f={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/stripe/page",pathname:"/stripe",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},32281:(e,t,r)=>{Promise.resolve().then(r.bind(r,33007))},99899:(e,t,r)=>{"use strict";var n=r(56715);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},78439:(e,t,r)=>{e.exports=r(99899)()},56715:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},33007:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n,o=r(10326),i=r(17577),s=r(78439);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var i=[],s=!0,a=!1;try{for(o=o.call(e);!(s=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(a)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e,t,r){var n=!!r,o=i.useRef(r);i.useEffect(function(){o.current=r},[r]),i.useEffect(function(){if(!n||!e)return function(){};var r=function(){o.current&&o.current.apply(o,arguments)};return e.on(t,r),function(){e.off(t,r)}},[n,t,e,o])},m=function(e){var t=i.useRef(e);return i.useEffect(function(){t.current=e},[e]),t.current},h=function(e){return null!==e&&"object"===c(e)},y="[object Object]",v=function e(t,r){if(!h(t)||!h(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var o=Object.prototype.toString.call(t)===y;if(o!==(Object.prototype.toString.call(r)===y))return!1;if(!o&&!n)return t===r;var i=Object.keys(t),s=Object.keys(r);if(i.length!==s.length)return!1;for(var a={},u=0;u<i.length;u+=1)a[i[u]]=!0;for(var c=0;c<s.length;c+=1)a[s[c]]=!0;var l=Object.keys(a);return l.length===i.length&&l.every(function(n){return e(t[n],r[n])})},g=function(e,t,r){return h(e)?Object.keys(e).reduce(function(n,o){var i=!h(t)||!v(e[o],t[o]);return r.includes(o)?(i&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),n):i?u(u({},n||{}),{},l({},o,e[o])):n},null):null},b="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;if(null===e||h(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment)return e;throw Error(t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;if(h(e)&&"function"==typeof e.then)return{tag:"async",stripePromise:Promise.resolve(e).then(function(e){return x(e,t)})};var r=x(e,t);return null===r?{tag:"empty"}:{tag:"sync",stripe:r}},w=function(e){e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.7.3"}),e.registerAppInfo({name:"react-stripe-js",version:"2.7.3",url:"https://stripe.com/docs/stripe-js/react"}))},C=i.createContext(null);C.displayName="ElementsContext";var E=function(e,t){if(!e)throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},S=function(e){var t=e.stripe,r=e.options,n=e.children,o=i.useMemo(function(){return j(t)},[t]),s=p(i.useState(function(){return{stripe:"sync"===o.tag?o.stripe:null,elements:"sync"===o.tag?o.stripe.elements(r):null}}),2),a=s[0],u=s[1];i.useEffect(function(){var e=!0,t=function(e){u(function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}})};return"async"!==o.tag||a.stripe?"sync"!==o.tag||a.stripe||t(o.stripe):o.stripePromise.then(function(r){r&&e&&t(r)}),function(){e=!1}},[o,a,r]);var c=m(t);i.useEffect(function(){null!==c&&c!==t&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[c,t]);var l=m(r);return i.useEffect(function(){if(a.elements){var e=g(r,l,["clientSecret","fonts"]);e&&a.elements.update(e)}},[r,l,a.elements]),i.useEffect(function(){w(a.stripe)},[a.stripe]),i.createElement(C.Provider,{value:a},n)};S.propTypes={stripe:s.any,options:s.object},s.func.isRequired;var k=i.createContext(null);k.displayName="CustomCheckoutSdkContext";var P=function(e,t){if(!e)throw Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CustomCheckoutProvider> provider."));return e};i.createContext(null).displayName="CustomCheckoutContext",s.any,s.shape({clientSecret:s.string.isRequired,elementsOptions:s.object}).isRequired;var _=function(e){var t=i.useContext(k),r=i.useContext(C);if(t&&r)throw Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return t?P(t,e):E(r,e)},O=function(e,t){var r="".concat(e.charAt(0).toUpperCase()+e.slice(1),"Element"),n=t?function(e){_("mounts <".concat(r,">"));var t=e.id,n=e.className;return i.createElement("div",{id:t,className:n})}:function(t){var n,o=t.id,s=t.className,a=t.options,u=void 0===a?{}:a,c=t.onBlur,l=t.onFocus,f=t.onReady,h=t.onChange,y=t.onEscape,v=t.onClick,b=t.onLoadError,x=t.onLoaderStart,j=t.onNetworksChange,w=t.onConfirm,C=t.onCancel,E=t.onShippingAddressChange,S=t.onShippingRateChange,k=_("mounts <".concat(r,">")),P="elements"in k?k.elements:null,O="customCheckoutSdk"in k?k.customCheckoutSdk:null,q=p(i.useState(null),2),A=q[0],N=q[1],R=i.useRef(null),T=i.useRef(null);d(A,"blur",c),d(A,"focus",l),d(A,"escape",y),d(A,"click",v),d(A,"loaderror",b),d(A,"loaderstart",x),d(A,"networkschange",j),d(A,"confirm",w),d(A,"cancel",C),d(A,"shippingaddresschange",E),d(A,"shippingratechange",S),d(A,"change",h),f&&(n="expressCheckout"===e?f:function(){f(A)}),d(A,"ready",n),i.useLayoutEffect(function(){if(null===R.current&&null!==T.current&&(P||O)){var t=null;O?t=O.createElement(e,u):P&&(t=P.create(e,u)),R.current=t,N(t),t&&t.mount(T.current)}},[P,O,u]);var z=m(u);return i.useEffect(function(){if(R.current){var e=g(u,z,["paymentRequest"]);e&&R.current.update(e)}},[u,z]),i.useLayoutEffect(function(){return function(){if(R.current&&"function"==typeof R.current.destroy)try{R.current.destroy(),R.current=null}catch(e){}}},[]),i.createElement("div",{id:o,className:s,ref:T})};return n.propTypes={id:s.string,className:s.string,onChange:s.func,onBlur:s.func,onFocus:s.func,onReady:s.func,onEscape:s.func,onClick:s.func,onLoadError:s.func,onLoaderStart:s.func,onNetworksChange:s.func,onConfirm:s.func,onCancel:s.func,onShippingAddressChange:s.func,onShippingRateChange:s.func,options:s.object},n.displayName=r,n.__elementType=e,n},q="undefined"==typeof window;i.createContext(null).displayName="EmbeddedCheckoutProviderContext",O("auBankAccount",q),O("card",q),O("cardNumber",q),O("cardExpiry",q),O("cardCvc",q),O("fpxBank",q),O("iban",q),O("idealBank",q),O("p24Bank",q),O("epsBank",q);var A=O("payment",q);O("expressCheckout",q),O("paymentRequestButton",q),O("linkAuthentication",q),O("address",q),O("shippingAddress",q),O("paymentMethodMessaging",q),O("affirmMessage",q),O("afterpayClearpayMessage",q);let N=function(e,t=100){return Math.round(e*t)},R=({amount:e})=>{var t;let r=_("calls useStripe()").stripe,n=(t="calls useElements()",E(i.useContext(C),t)).elements,[s,a]=(0,i.useState)(),[u,c]=(0,i.useState)(""),[l,p]=(0,i.useState)(!1);(0,i.useEffect)(()=>{fetch("/api/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:N(e)})}).then(e=>e.json()).then(e=>c(e.clientSecret))},[e]);let f=async t=>{if(t.preventDefault(),p(!0),!r||!n)return;let{error:o}=await n.submit();if(o){a(o.message),p(!1);return}let{error:i}=await r.confirmPayment({elements:n,clientSecret:u,confirmParams:{return_url:`https://ezskin.vercel.app/payment-success?amount=${e}`}});i&&a(i.message),p(!1)};return u&&r&&n?(0,o.jsxs)("form",{onSubmit:f,className:"bg-white p-2 rounded-md",children:[u&&o.jsx(A,{}),s&&o.jsx("div",{children:s}),o.jsx("button",{disabled:!r||l,className:"text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse",children:l?"Processing...":`Pay $${e}`})]}):o.jsx("div",{className:"flex items-center justify-center",children:o.jsx("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",role:"status",children:o.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})})};var T="https://js.stripe.com/v3",z=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,L=function(){for(var e=document.querySelectorAll('script[src^="'.concat(T,'"]')),t=0;t<e.length;t++){var r=e[t];if(z.test(r.src))return r}return null},D=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(T).concat(t);var n=document.head||document.body;if(!n)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r},M=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"4.4.0",startTime:t})},I=null,U=null,B=null,W=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return M(n,r),n},F=!1,G=function(){return n||(n=(null!==I?I:(I=new Promise(function(e,t){if("undefined"==typeof window||"undefined"==typeof document){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var r,n=L();n?n&&null!==B&&null!==U&&(n.removeEventListener("load",B),n.removeEventListener("error",U),null===(r=n.parentNode)||void 0===r||r.removeChild(n),n=D(null)):n=D(null),B=function(){window.Stripe?e(window.Stripe):t(Error("Stripe.js not available"))},U=function(){t(Error("Failed to load Stripe.js"))},n.addEventListener("load",B),n.addEventListener("error",U)}catch(e){t(e);return}})).catch(function(e){return I=null,Promise.reject(e)})).catch(function(e){return n=null,Promise.reject(e)}))};Promise.resolve().then(function(){return G()}).catch(function(e){F||console.warn(e)});let Y=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];F=!0;var n=Date.now();return G().then(function(e){return W(e,t,n)})}("pk_test_51PaR45RuRpQ8fp5TH5vf8sdEy3dLZ9d9twmAh6R5J7h8iscp3emXkQS85DxquDpNcpFpNjajLglNewxAAuV5mv2z00ubX7sXIW");function Z(){return o.jsx("main",{className:"max-w-4xl mx-auto p-10  text-center border m-10 rounded-md",children:o.jsx(S,{stripe:Y,options:{mode:"payment",amount:N(.99),currency:"usd"},children:o.jsx(R,{amount:.99})})})}},31777:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(68570).createProxy)(String.raw`C:\Users\Shahroz\Desktop\ez\ez_skin\EZ_skin\src\app\stripe\page.tsx#default`)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(66621);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,163,621,237],()=>r(23749));module.exports=n})();