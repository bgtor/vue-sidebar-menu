!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sidebar-menu"]=e():t["vue-sidebar-menu"]=e()}(this,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=9)}([function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){var n=i(5);t.exports=p,t.exports.parse=r,t.exports.compile=function(t,e){return l(r(t,e))},t.exports.tokensToFunction=l,t.exports.tokensToRegExp=d;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function r(t,e){for(var i,n=[],r=0,s=0,l="",h=e&&e.delimiter||"/";null!=(i=o.exec(t));){var u=i[0],d=i[1],p=i.index;if(l+=t.slice(s,p),s=p+u.length,d)l+=d[1];else{var m=t[s],f=i[2],b=i[3],v=i[4],g=i[5],w=i[6],y=i[7];l&&(n.push(l),l="");var S=null!=f&&null!=m&&m!==f,_="+"===w||"*"===w,C="?"===w||"*"===w,x=i[2]||h,I=v||g;n.push({name:b||r++,prefix:f||"",delimiter:x,optional:C,repeat:_,partial:S,asterisk:!!y,pattern:I?c(I):y?".*":"[^"+a(x)+"]+?"})}}return s<t.length&&(l+=t.substr(s)),l&&n.push(l),n}function s(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function l(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(i,o){for(var r="",l=i||{},a=(o||{}).pretty?s:encodeURIComponent,c=0;c<t.length;c++){var h=t[c];if("string"!=typeof h){var u,d=l[h.name];if(null==d){if(h.optional){h.partial&&(r+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(n(d)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(u=a(d[p]),!e[c].test(u))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===p?h.prefix:h.delimiter)+u}}else{if(u=h.asterisk?encodeURI(d).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(d),!e[c].test(u))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+u+'"');r+=h.prefix+u}}else r+=h}return r}}function a(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function c(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function h(t,e){return t.keys=e,t}function u(t){return t.sensitive?"":"i"}function d(t,e,i){n(e)||(i=e||i,e=[]);for(var o=(i=i||{}).strict,r=!1!==i.end,s="",l=0;l<t.length;l++){var c=t[l];if("string"==typeof c)s+=a(c);else{var d=a(c.prefix),p="(?:"+c.pattern+")";e.push(c),c.repeat&&(p+="(?:"+d+p+")*"),s+=p=c.optional?c.partial?d+"("+p+")?":"(?:"+d+"("+p+"))?":d+"("+p+")"}}var m=a(i.delimiter||"/"),f=s.slice(-m.length)===m;return o||(s=(f?s.slice(0,-m.length):s)+"(?:"+m+"(?=$))?"),s+=r?"$":o&&f?"":"(?="+m+"|$)",h(new RegExp("^"+s,u(i)),e)}function p(t,e,i){return n(e)||(i=e||i,e=[]),i=i||{},t instanceof RegExp?function(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return h(t,e)}(t,e):n(t)?function(t,e,i){for(var n=[],o=0;o<t.length;o++)n.push(p(t[o],e,i).source);return h(new RegExp("(?:"+n.join("|")+")",u(i)),e)}(t,e,i):function(t,e,i){return d(r(t,i),e,i)}(t,e,i)}},function(t,e,i){!function(t){"use strict";
/*!
   * perfect-scrollbar v1.5.0
   * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   */function e(t){return getComputedStyle(t)}function i(t,e){for(var i in e){var n=e[i];"number"==typeof n&&(n+="px"),t.style[i]=n}return t}function n(t){var e=document.createElement("div");return e.className=t,e}var o="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function r(t,e){if(!o)throw new Error("No element matching method supported");return o.call(t,e)}function s(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function l(t,e){return Array.prototype.filter.call(t.children,(function(t){return r(t,e)}))}var a="ps",c="ps__rtl",h={thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},u={focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}},d={x:null,y:null};function p(t,e){var i=t.element.classList,n=u.scrolling(e);i.contains(n)?clearTimeout(d[e]):i.add(n)}function m(t,e){d[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(u.scrolling(e))}),t.settings.scrollingThreshold)}var f=function(t){this.element=t,this.handlers={}},b={isEmpty:{configurable:!0}};f.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},f.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter((function(n){return!(!e||n===e)||(i.element.removeEventListener(t,n,!1),!1)}))},f.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},b.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(f.prototype,b);var v=function(){this.eventElements=[]};function g(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function w(t,e,i,n,o){var r;if(void 0===n&&(n=!0),void 0===o&&(o=!1),"top"===e)r=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");r=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,i,n,o){var r=i[0],s=i[1],l=i[2],a=i[3],c=i[4],h=i[5];void 0===n&&(n=!0),void 0===o&&(o=!1);var u=t.element;t.reach[a]=null,u[l]<1&&(t.reach[a]="start"),u[l]>t[r]-t[s]-1&&(t.reach[a]="end"),e&&(u.dispatchEvent(g("ps-scroll-"+a)),e<0?u.dispatchEvent(g("ps-scroll-"+c)):e>0&&u.dispatchEvent(g("ps-scroll-"+h)),n&&function(t,e){p(t,e),m(t,e)}(t,a)),t.reach[a]&&(e||o)&&u.dispatchEvent(g("ps-"+a+"-reach-"+t.reach[a]))}(t,i,r,n,o)}function y(t){return parseInt(t,10)||0}v.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new f(t),this.eventElements.push(e)),e},v.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},v.prototype.unbind=function(t,e,i){var n=this.eventElement(t);n.unbind(e,i),n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n),1)},v.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},v.prototype.once=function(t,e,i){var n=this.eventElement(t),o=function(t){n.unbind(e,o),i(t)};n.bind(e,o)};var S={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function _(t){var e=t.element,n=Math.floor(e.scrollTop),o=e.getBoundingClientRect();t.containerWidth=Math.ceil(o.width),t.containerHeight=Math.ceil(o.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(l(e,h.rail("x")).forEach((function(t){return s(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(l(e,h.rail("y")).forEach((function(t){return s(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=C(t,y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=y((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=C(t,y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=y(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,e){var n={width:e.railXWidth},o=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-o:n.top=e.scrollbarXTop+o,i(e.scrollbarXRail,n);var r={top:o,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,i(e.scrollbarYRail,r),i(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),i(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(e,t),t.scrollbarXActive?e.classList.add(u.active("x")):(e.classList.remove(u.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(u.active("y")):(e.classList.remove(u.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function C(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function x(t,e){var i=e[0],n=e[1],o=e[2],r=e[3],s=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=t.element,f=null,b=null,v=null;function g(e){e.touches&&e.touches[0]&&(e[o]=e.touches[0].pageY),d[a]=f+v*(e[o]-b),p(t,c),_(t),e.stopPropagation(),e.preventDefault()}function w(){m(t,c),t[h].classList.remove(u.clicking),t.event.unbind(t.ownerDocument,"mousemove",g)}function y(e,s){f=d[a],s&&e.touches&&(e[o]=e.touches[0].pageY),b=e[o],v=(t[n]-t[i])/(t[r]-t[l]),s?t.event.bind(t.ownerDocument,"touchmove",g):(t.event.bind(t.ownerDocument,"mousemove",g),t.event.once(t.ownerDocument,"mouseup",w),e.preventDefault()),t[h].classList.add(u.clicking),e.stopPropagation()}t.event.bind(t[s],"mousedown",(function(t){y(t)})),t.event.bind(t[s],"touchstart",(function(t){y(t,!0)}))}var I={"click-rail":function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,_(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,_(t),e.stopPropagation()}))},"drag-thumb":function(t){x(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),x(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",(function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&(r(e,":hover")||r(t.scrollbarX,":focus")||r(t.scrollbarY,":focus"))){var n,o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(r(n=o,"input,[contenteditable]")||r(n,"select,[contenteditable]")||r(n,"textarea,[contenteditable]")||r(n,"button,[contenteditable]"))return}var s=0,l=0;switch(i.which){case 37:s=i.metaKey?-t.contentWidth:i.altKey?-t.containerWidth:-30;break;case 38:l=i.metaKey?t.contentHeight:i.altKey?t.containerHeight:30;break;case 39:s=i.metaKey?t.contentWidth:i.altKey?t.containerWidth:30;break;case 40:l=i.metaKey?-t.contentHeight:i.altKey?-t.containerHeight:-30;break;case 32:l=i.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==l||(e.scrollTop-=l,e.scrollLeft+=s,_(t),function(i,n){var o=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===o&&n>0||o>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var r=e.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===r&&i<0||r>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}(s,l)&&i.preventDefault())}}))},wheel:function(t){var i=t.element;function n(n){var o=function(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!=e&&i!=i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}(n),r=o[0],s=o[1];if(!function(t,n,o){if(!S.isWebKit&&i.querySelector("select:focus"))return!0;if(!i.contains(t))return!1;for(var r=t;r&&r!==i;){if(r.classList.contains(h.consuming))return!0;var s=e(r);if(o&&s.overflowY.match(/(scroll|auto)/)){var l=r.scrollHeight-r.clientHeight;if(l>0&&(r.scrollTop>0&&o<0||r.scrollTop<l&&o>0))return!0}if(n&&s.overflowX.match(/(scroll|auto)/)){var a=r.scrollWidth-r.clientWidth;if(a>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<a&&n>0))return!0}r=r.parentNode}return!1}(n.target,r,s)){var l=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(s?i.scrollTop-=s*t.settings.wheelSpeed:i.scrollTop+=r*t.settings.wheelSpeed,l=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(r?i.scrollLeft+=r*t.settings.wheelSpeed:i.scrollLeft-=s*t.settings.wheelSpeed,l=!0):(i.scrollTop-=s*t.settings.wheelSpeed,i.scrollLeft+=r*t.settings.wheelSpeed),_(t),(l=l||function(e,n){var o=Math.floor(i.scrollTop),r=0===i.scrollTop,s=o+i.offsetHeight===i.scrollHeight,l=0===i.scrollLeft,a=i.scrollLeft+i.offsetWidth===i.scrollWidth;return!(Math.abs(n)>Math.abs(e)?r||s:l||a)||!t.settings.wheelPropagation}(r,s))&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}void 0!==window.onwheel?t.event.bind(i,"wheel",n):void 0!==window.onmousewheel&&t.event.bind(i,"mousewheel",n)},touch:function(t){if(S.supportsTouch||S.supportsIePointer){var i=t.element,n={},o=0,r={},s=null;S.supportsTouch?(t.event.bind(i,"touchstart",u),t.event.bind(i,"touchmove",d),t.event.bind(i,"touchend",p)):S.supportsIePointer&&(window.PointerEvent?(t.event.bind(i,"pointerdown",u),t.event.bind(i,"pointermove",d),t.event.bind(i,"pointerup",p)):window.MSPointerEvent&&(t.event.bind(i,"MSPointerDown",u),t.event.bind(i,"MSPointerMove",d),t.event.bind(i,"MSPointerUp",p)))}function l(e,n){i.scrollTop-=n,i.scrollLeft-=e,_(t)}function a(t){return t.targetTouches?t.targetTouches[0]:t}function c(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(c(t)){var e=a(t);n.pageX=e.pageX,n.pageY=e.pageY,o=(new Date).getTime(),null!==s&&clearInterval(s)}}function d(s){if(c(s)){var u=a(s),d={pageX:u.pageX,pageY:u.pageY},p=d.pageX-n.pageX,m=d.pageY-n.pageY;if(function(t,n,o){if(!i.contains(t))return!1;for(var r=t;r&&r!==i;){if(r.classList.contains(h.consuming))return!0;var s=e(r);if(o&&s.overflowY.match(/(scroll|auto)/)){var l=r.scrollHeight-r.clientHeight;if(l>0&&(r.scrollTop>0&&o<0||r.scrollTop<l&&o>0))return!0}if(n&&s.overflowX.match(/(scroll|auto)/)){var a=r.scrollWidth-r.clientWidth;if(a>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<a&&n>0))return!0}r=r.parentNode}return!1}(s.target,p,m))return;l(p,m),n=d;var f=(new Date).getTime(),b=f-o;b>0&&(r.x=p/b,r.y=m/b,o=f),function(e,n){var o=Math.floor(i.scrollTop),r=i.scrollLeft,s=Math.abs(e),l=Math.abs(n);if(l>s){if(n<0&&o===t.contentHeight-t.containerHeight||n>0&&0===o)return 0===window.scrollY&&n>0&&S.isChrome}else if(s>l&&(e<0&&r===t.contentWidth-t.containerWidth||e>0&&0===r))return!0;return!0}(p,m)&&s.preventDefault()}}function p(){t.settings.swipeEasing&&(clearInterval(s),s=setInterval((function(){t.isInitialized?clearInterval(s):r.x||r.y?Math.abs(r.x)<.01&&Math.abs(r.y)<.01?clearInterval(s):(l(30*r.x,30*r.y),r.x*=.8,r.y*=.8):clearInterval(s)}),10))}}},L=function(t,o){var r=this;if(void 0===o&&(o={}),"string"==typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var s in this.element=t,t.classList.add(a),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},o)this.settings[s]=o[s];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var l,d,p=function(){return t.classList.add(u.focus)},m=function(){return t.classList.remove(u.focus)};this.isRtl="rtl"===e(t).direction,!0===this.isRtl&&t.classList.add(c),this.isNegativeScroll=(d=t.scrollLeft,t.scrollLeft=-1,l=t.scrollLeft<0,t.scrollLeft=d,l),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new v,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=n(h.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=n(h.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",p),this.event.bind(this.scrollbarX,"blur",m),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var f=e(this.scrollbarXRail);this.scrollbarXBottom=parseInt(f.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=y(f.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=y(f.borderLeftWidth)+y(f.borderRightWidth),i(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=y(f.marginLeft)+y(f.marginRight),i(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=n(h.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=n(h.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",p),this.event.bind(this.scrollbarY,"blur",m),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var b=e(this.scrollbarYRail);this.scrollbarYRight=parseInt(b.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=y(b.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(t){var i=e(t);return y(i.width)+y(i.paddingLeft)+y(i.paddingRight)+y(i.borderLeftWidth)+y(i.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=y(b.borderTopWidth)+y(b.borderBottomWidth),i(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=y(b.marginTop)+y(b.marginBottom),i(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return I[t](r)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return r.onScroll(t)})),_(this)};L.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,i(this.scrollbarXRail,{display:"block"}),i(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=y(e(this.scrollbarXRail).marginLeft)+y(e(this.scrollbarXRail).marginRight),this.railYMarginHeight=y(e(this.scrollbarYRail).marginTop)+y(e(this.scrollbarYRail).marginBottom),i(this.scrollbarXRail,{display:"none"}),i(this.scrollbarYRail,{display:"none"}),_(this),w(this,"top",0,!1,!0),w(this,"left",0,!1,!0),i(this.scrollbarXRail,{display:""}),i(this.scrollbarYRail,{display:""}))},L.prototype.onScroll=function(t){this.isAlive&&(_(this),w(this,"top",this.element.scrollTop-this.lastScrollTop),w(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},L.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),s(this.scrollbarX),s(this.scrollbarY),s(this.scrollbarXRail),s(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},L.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")};var Y={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:function(){}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},data:function(){return{ps:null}},watch:{watchOptions:function(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted:function(){this.create(),this.watchOptions&&this.createWatcher()},updated:function(){var t=this;this.$nextTick((function(){t.update()}))},beforeDestroy:function(){this.destroy()},methods:{create:function(){this.ps&&this.$isServer||(this.ps=new L(this.$refs.container,this.options))},createWatcher:function(){var t=this;this.watcher=this.$watch("options",(function(){t.destroy(),t.create()}),{deep:!0})},update:function(){this.ps&&this.ps.update()},destroy:function(){this.ps&&(this.ps.destroy(),this.ps=null)}},render:function(t){return t(this.tag,{ref:"container",class:"ps",on:this.$listeners},this.$slots.default)}};function E(t,e){e&&(e.name&&"string"==typeof e.name&&(Y.name=e.name),e.options&&"object"==typeof e.options&&(Y.props.options.default=function(){return e.options}),e.tag&&"string"==typeof e.tag&&(Y.props.tag.default=e.tag),e.watchOptions&&"boolean"==typeof e.watchOptions&&(Y.props.watchOptions=e.watchOptions)),t.component(Y.name,Y)}t.install=E,t.PerfectScrollbar=Y,t.default=E,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e,i){"use strict";var n=i(0);i.n(n).a},function(t,e,i){"use strict";var n=i(1);i.n(n).a},function(t,e,i){"use strict";var n=i(2);i.n(n).a},function(t,e,i){"use strict";i.r(e),i.d(e,"SidebarMenu",(function(){return f}));var n=i(3),o=i.n(n);function r(t,e,i,n,o,r,s,l){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var h=c.render;c.render=function(t,e){return a.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:t,options:c}}var s=r({name:"SidebarMenuLink",props:{item:{type:Object,required:!0},attributes:{type:Object,default:null}},computed:{isRouterLink:function(){return!!this.$router&&this.item.href&&!this.item.external},tag:function(){return this.isRouterLink?"router-link":"a"},href:function(){return this.item.href?this.item.href:"#"},target:function(){return this.item.external?"_blank":"_self"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,t._b({tag:"component",attrs:{tabindex:t.item.disabled&&-1,target:t.target}},"component",[t.isRouterLink?{to:t.href}:{href:t.href},t.attributes],!1),[t._t("default")],2)}),[],!1,null,null,null);s.options.__file="SidebarMenuLink.vue";var l=s.exports,a=r({name:"SidebarMenuIcon",props:{icon:{type:[String,Object],default:""}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.icon.element?t.icon.element:"i",t._b({tag:"component",staticClass:"vsm--icon",class:"string"==typeof t.icon||t.icon instanceof String?t.icon:t.icon.class},"component",t.icon.attributes,!1),[t._v("\n  "+t._s(t.icon.text)+"\n")])}),[],!1,null,null,null);a.options.__file="SidebarMenuIcon.vue";var c=a.exports,h=r({name:"SidebarMenuBadge",props:{badge:{type:Object,default:function(){}}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.badge.element?t.badge.element:"span",t._b({tag:"component",staticClass:"vsm--badge",class:t.badge.class},"component",t.badge.attributes,!1),[t._v("\n  "+t._s(t.badge.text)+"\n")])}),[],!1,null,null,null);h.options.__file="SidebarMenuBadge.vue";var u={name:"SidebarMenuItem",components:{SidebarMenuLink:l,SidebarMenuIcon:c,SidebarMenuBadge:h.exports},props:{item:{type:Object,required:!0},level:{type:Number,default:1},isCollapsed:{type:Boolean},isMobileItem:{type:Boolean,default:!1},mobileItem:{type:Object,default:null},activeShow:{type:Object,default:null},showChild:{type:Boolean,default:!1},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},disableHover:{type:Boolean,default:!1},mobileItemStyle:{type:Object,default:null}},data:function(){return{active:!1,exactActive:!1,itemShow:!1,itemHover:!1}},computed:{cssProps:function(){return{"--sb-item-primary-color":this.item.color?this.item.color:"blue"}},isFirstLevel:function(){return 1===this.level},show:{get:function(){return!!this.itemHasChild&&(!(!this.showChild&&!this.isMobileItem)||this.itemShow)},set:function(t){this.showOneChild&&(t?this.emitActiveShow(this.item):this.emitActiveShow(null)),this.itemShow=t}},itemLinkClass:function(){return["vsm--link",this.isMobileItem?"":"vsm--link_level-"+this.level,{"vsm--link_mobile-item":this.isMobileItem},{"vsm--link_hover":this.hover},{"vsm--link_active":!0},{"vsm--link_exact-active":this.exactActive},{"vsm--link_disabled":this.item.disabled},this.item.class]},isItemHidden:function(){return this.isCollapsed?!(!this.item.hidden||void 0!==this.item.hiddenOnCollapse)||!0===this.item.hiddenOnCollapse:!0===this.item.hidden},hover:function(){return this.isCollapsed&&this.isFirstLevel?this.item===this.mobileItem:this.itemHover},itemHasChild:function(){return!!(this.item.child&&this.item.child.length>0)}},watch:{$route:function(){var t=this;setTimeout((function(){t.item.header||t.item.component||t.initState()}),1)},item:function(t,e){this.emitItemUpdate(t,e)},activeShow:function(){this.itemShow=this.item===this.activeShow}},created:function(){this.item.header||this.item.component||this.initState()},mounted:function(){this.$router||window.addEventListener("hashchange",this.initState)},destroyed:function(){this.$router||window.removeEventListener("hashchange",this.initState)},methods:{isLinkActive:function(t){return this.matchRoute(t)||this.isChildActive(t.child)||this.isAliasActive(t)},isLinkExactActive:function(t){return this.matchExactRoute(t.href)},isChildActive:function(t){var e=this;return!!t&&t.some((function(t){return e.isLinkActive(t)}))},isAliasActive:function(t){if(t.alias){var e=this.$router?this.$route.fullPath:window.location.pathname+window.location.search+window.location.hash;return Array.isArray(t.alias)?t.alias.some((function(t){return o()(t).test(e)})):o()(t.alias).test(e)}return!1},matchRoute:function(t){var e=t.href,i=t.exactPath;if(!e)return!1;if(this.$router){var n=this.$router.resolve(e).route;return i?n.path===this.$route.path:this.matchExactRoute(e)}return i?e===window.location.pathname:this.matchExactRoute(e)},matchExactRoute:function(t){return!!t&&(this.$router?this.$router.resolve(t).route.fullPath===this.$route.fullPath:t===window.location.pathname+window.location.search+window.location.hash)},clickEvent:function(t){this.item.disabled||(this.item.href||t.preventDefault(),this.emitItemClick(t,this.item,this),this.emitMobileItem(t,t.currentTarget.offsetParent),!this.itemHasChild||this.showChild||this.isMobileItem||this.item.href&&!this.exactActive||(this.show=!this.show))},emitMobileItem:function(t,e){var i=this;this.hover||this.isCollapsed&&this.isFirstLevel&&!this.isMobileItem&&(this.mobileItem&&this.$emit("unset-mobile-item",!0),this.$nextTick((function(){i.mobileItem!==i.item&&i.$emit("set-mobile-item",{item:i.item,itemEl:e})})),"click"!==t.type||this.itemHasChild||setTimeout((function(){i.mobileItem&&i.$emit("unset-mobile-item",!1)}),0))},initState:function(){this.initActiveState(),this.initShowState()},initActiveState:function(){this.active=this.isLinkActive(this.item),this.exactActive=this.isLinkExactActive(this.item)},initShowState:function(){this.itemHasChild&&!this.showChild&&(this.showOneChild&&this.active&&!this.show||this.active&&!this.show?this.show=!0:this.showOneChild&&!this.active&&this.show&&(this.show=!1))},mouseOverEvent:function(t){t.stopPropagation(),this.item.disabled||(this.itemHover=!0,this.emitMobileItem(t,t.currentTarget))},mouseOutEvent:function(t){t.stopPropagation(),this.itemHover=!1},expandEnter:function(t){t.style.height=t.scrollHeight+"px"},expandAfterEnter:function(t){t.style.height="auto"},expandBeforeLeave:function(t){this.isCollapsed&&this.isFirstLevel?t.style.display="none":t.style.height=t.scrollHeight+"px"}},inject:["emitActiveShow","emitItemClick","emitItemUpdate"]},d=(i(6),r(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.cssProps},[t.item.component&&!t.isItemHidden?i(t.item.component,t._b({tag:"component"},"component",t.item.props,!1)):t.item.header&&!t.isItemHidden?i("div",t._b({staticClass:"vsm--header",class:t.item.class},"div",t.item.attributes,!1),[t._v("\n    "+t._s(t.item.title)+"\n  ")]):t.isItemHidden?t._e():i("div",t._g({staticClass:"vsm--item",class:[{"vsm--item_open":t.show}],on:{mouseout:t.mouseOutEvent}},t.disableHover&&t.isCollapsed?{click:t.mouseOverEvent}:{mouseover:t.mouseOverEvent}),[i("sidebar-menu-link",{class:t.itemLinkClass,attrs:{item:t.item,attributes:t.item.attributes},nativeOn:{click:function(e){return t.clickEvent(e)}}},[t.item.icon&&!t.isMobileItem?i("sidebar-menu-icon",{attrs:{icon:t.item.icon}}):t._e(),t._v(" "),i("transition",{attrs:{name:"fade-animation",appear:t.isMobileItem}},[t.isCollapsed&&!t.isFirstLevel||!t.isCollapsed||t.isMobileItem?[i("span",{staticClass:"vsm--title"},[t._v(t._s(t.item.title))])]:t._e()],2),t._v(" "),t.isCollapsed&&!t.isFirstLevel||!t.isCollapsed||t.isMobileItem?[t.item.badge?i("sidebar-menu-badge",{attrs:{badge:t.item.badge}}):t._e(),t._v(" "),t.itemHasChild?i("div",{staticClass:"vsm--arrow",class:[{"vsm--arrow_open":t.show},{"vsm--arrow_slot":t.$slots["dropdown-icon"]}]},[t._t("dropdown-icon")],2):t._e()]:t._e()],2),t._v(" "),t.itemHasChild?[t.isCollapsed&&!t.isFirstLevel||!t.isCollapsed||t.isMobileItem?[i("transition",{attrs:{appear:t.isMobileItem,name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm--dropdown",class:t.isMobileItem&&"vsm--dropdown_mobile-item",style:t.isMobileItem&&t.mobileItemStyle.dropdown},[i("div",{staticClass:"vsm--list"},t._l(t.item.child,(function(e,n){return i("sidebar-menu-item",{key:n,attrs:{item:e,level:t.level+1,"show-child":t.showChild,rtl:t.rtl,"is-collapsed":t.isCollapsed}},[t._t("dropdown-icon",null,{slot:"dropdown-icon"})],2)})),1)]):t._e()])]:t._e()]:t._e()],2)],1)}),[],!1,null,"461628b6",null));d.options.__file="SidebarMenuItem.vue";var p={name:"SidebarMenu",components:{SidebarMenuItem:d.exports,PerfectScrollbar:i(4).PerfectScrollbar},props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"350px"},widthCollapsed:{type:String,default:"50px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},hideToggle:{type:Boolean,default:!1},disableHover:{type:Boolean,default:!1}},data:function(){return{isCollapsed:this.collapsed,mobileItem:null,mobileItemPos:0,mobileItemHeight:0,mobileItemTimeout:null,activeShow:null,parentHeight:0,parentWidth:0,parentOffsetTop:0,parentOffsetLeft:0,psOptions:{suppressScrollX:!0}}},computed:{sidebarWidth:function(){return this.isCollapsed?this.widthCollapsed:this.width},sidebarClass:function(){return[this.isCollapsed?"vsm_collapsed":"vsm_expanded",this.theme?"vsm_"+this.theme:"",this.rtl?"vsm_rtl":"",this.relative?"vsm_relative":""]},mobileItemStyle:function(){return{item:[{position:"absolute"},{top:this.mobileItemPos+"px"},this.rtl?{right:"0px"}:{left:"0px"},this.rtl?{"padding-right":this.sidebarWidth}:{"padding-left":this.sidebarWidth},this.rtl&&{direction:"rtl"},{"z-index":0},{width:this.parentWidth-this.parentOffsetLeft+"px"},{"max-width":this.width}],dropdown:[{position:"absolute"},{top:this.mobileItemHeight+"px"},{width:"100%"},{"max-height":this.parentHeight-(this.mobileItemPos+this.mobileItemHeight)-this.parentOffsetTop+"px"},{"overflow-y":"auto"}],background:[{position:"absolute"},{top:"0px"},{left:"0px"},{right:"0px"},{width:"100%"},{height:this.mobileItemHeight+"px"},{"z-index":-1}]}}},watch:{collapsed:function(t){this.isCollapsed!==this.collapsed&&(this.isCollapsed=t,this.mobileItem=null)}},methods:{onMouseLeave:function(){this.mobileItem=null},onToggleClick:function(){this.isCollapsed=!this.isCollapsed,this.mobileItem=null,this.$emit("toggle-collapse",this.isCollapsed)},onActiveShow:function(t){this.activeShow=t},onItemClick:function(t,e,i){this.$emit("item-click",t,e,i)},setMobileItem:function(t){var e=t.item,i=t.itemEl;if(this.mobileItem!==e){var n=this.$el.getBoundingClientRect().top,o=i.getBoundingClientRect().top,r=i.children[0],s=window.getComputedStyle(i),l=parseFloat(s.paddingTop),a=parseFloat(s.marginTop),c=r.offsetHeight,h=o-n+l+a;this.initParentOffsets(),this.mobileItem=e,this.mobileItemPos=h,this.mobileItemHeight=c}},unsetMobileItem:function(t){var e=this;this.mobileItem&&(this.mobileItemTimeout&&clearTimeout(this.mobileItemTimeout),t?this.mobileItem=null:this.mobileItemTimeout=setTimeout((function(){e.mobileItem=null}),600))},initParentOffsets:function(){var t=this.$el.getBoundingClientRect(),e=t.top,i=t.left,n=t.right,o=this.relative?this.$el.parentElement:document.documentElement;if(this.parentHeight=o.clientHeight,this.parentWidth=o.clientWidth,this.relative){var r=o.getBoundingClientRect(),s=r.top,l=r.left;this.parentOffsetTop=e-(s+o.clientTop),this.parentOffsetLeft=this.rtl?this.parentWidth-n+(l+o.clientLeft):i-(l+o.clientLeft)}else this.parentOffsetTop=e,this.parentOffsetLeft=this.rtl?this.parentWidth-n:i},onItemUpdate:function(t,e){e===this.mobileItem&&(this.mobileItem=t),e===this.activeShow&&(this.activeShow=t)}},provide:function(){return{emitActiveShow:this.onActiveShow,emitItemClick:this.onItemClick,emitItemUpdate:this.onItemUpdate}}},m=(i(7),i(8),r(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-sidebar-menu",class:t.sidebarClass,style:[{"max-width":t.sidebarWidth}],on:{mouseleave:t.onMouseLeave}},[t._t("header"),t._v(" "),t.isCollapsed?[i("div",{staticClass:"vsm--list",style:t.isCollapsed&&{width:t.widthCollapsed}},t._l(t.menu,(function(e,n){return i("sidebar-menu-item",{key:n,attrs:{item:e,"is-collapsed":t.isCollapsed,"active-show":t.activeShow,"show-one-child":t.showOneChild,"show-child":t.showChild,rtl:t.rtl,"mobile-item":t.mobileItem,"disable-hover":t.disableHover},on:{"set-mobile-item":t.setMobileItem,"unset-mobile-item":t.unsetMobileItem}},[t._t("dropdown-icon",null,{slot:"dropdown-icon"})],2)})),1),t._v(" "),t.isCollapsed?i("div",{staticClass:"vsm--mobile-item",style:t.mobileItemStyle.item},[t.mobileItem?i("sidebar-menu-item",{attrs:{item:t.mobileItem,"is-mobile-item":!0,"mobile-item-style":t.mobileItemStyle,"is-collapsed":t.isCollapsed,"show-child":t.showChild,rtl:t.rtl}},[t._t("dropdown-icon",null,{slot:"dropdown-icon"})],2):t._e(),t._v(" "),i("transition",{attrs:{name:"slide-animation"}},[t.mobileItem?i("div",{staticClass:"vsm--mobile-bg",style:t.mobileItemStyle.background}):t._e()])],1):t._e()]:i("perfect-scrollbar",{attrs:{options:t.psOptions}},[i("div",{staticClass:"vsm--list",style:t.isCollapsed&&{width:t.widthCollapsed}},t._l(t.menu,(function(e,n){return i("sidebar-menu-item",{key:n,attrs:{item:e,"is-collapsed":t.isCollapsed,"active-show":t.activeShow,"show-one-child":t.showOneChild,"show-child":t.showChild,rtl:t.rtl,"mobile-item":t.mobileItem,"disable-hover":t.disableHover},on:{"set-mobile-item":t.setMobileItem,"unset-mobile-item":t.unsetMobileItem}},[t._t("dropdown-icon",null,{slot:"dropdown-icon"})],2)})),1),t._v(" "),t.isCollapsed?i("div",{staticClass:"vsm--mobile-item",style:t.mobileItemStyle.item},[t.mobileItem?i("sidebar-menu-item",{attrs:{item:t.mobileItem,"is-mobile-item":!0,"mobile-item-style":t.mobileItemStyle,"is-collapsed":t.isCollapsed,"show-child":t.showChild,rtl:t.rtl}},[t._t("dropdown-icon",null,{slot:"dropdown-icon"})],2):t._e(),t._v(" "),i("transition",{attrs:{name:"slide-animation"}},[t.mobileItem?i("div",{staticClass:"vsm--mobile-bg",style:t.mobileItemStyle.background}):t._e()])],1):t._e()]),t._v(" "),t._t("footer"),t._v(" "),t.hideToggle?t._e():i("button",{staticClass:"vsm--toggle-btn",class:{"vsm--toggle-btn_slot":t.$slots["toggle-icon"]},on:{click:t.onToggleClick}},[t._t("toggle-icon")],2)],2)}),[],!1,null,null,null));m.options.__file="SidebarMenu.vue";var f=m.exports;e.default={install:function(t){t.component("sidebar-menu",f)}}}])}));
//# sourceMappingURL=vue-sidebar-menu.js.map