(()=>{var e={2703:(e,t,r)=>{"use strict";var n=r(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>c});const e=require("react");var t=r.n(e),i=r(5697),o=r.n(i);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"slideDone",void 0),a(this,"slide",void 0),a(this,"slideTimeout",null),this.slide=t,this.slideDone=r}var t,r;return t=e,(r=[{key:"start",value:function(e){var t=this;null!==this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=setTimeout((function(){t.slideDone(t.slide),t.slideTimeout=null}),e)}},{key:"stop",value:function(){null!==this.slideTimeout&&(clearTimeout(this.slideTimeout),this.slideTimeout=null)}}])&&s(t.prototype,r),e}();function l(r){var n=r.slide,i=r.content,o=r.run,s=r.slideDone,a=i.source,l=new u(n,s);return(0,e.useEffect)((function(){o?l.start(n.duration):l.stop()}),[o]),t().createElement(t().Fragment,null,t().createElement("iframe",{title:"iframe title",sandbox:"allow-same-origin allow-scripts",frameBorder:"0",width:"100%",height:"100%",src:a}))}l.propTypes={run:o().bool.isRequired,slideDone:o().func.isRequired,slide:o().shape({instanceId:o().string,duration:o().number.isRequired}).isRequired,content:o().shape({source:o().string}).isRequired};const c=l})();var i=exports;for(var o in n)i[o]=n[o];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();