(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[817],{9817:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(5893),o=r(1664),a=r(7294);const u=({repo:e,label:t,theme:r,issueTerm:n,issueNumber:o})=>{const i=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(!i.current)return;const a=(({repo:e,label:t,theme:r,issueTerm:n,issueNumber:o})=>{const a=document.createElement("script");if(a.src="https://utteranc.es/client.js",a.async=!0,a.setAttribute("repo",e),n){const e=Array.isArray(n)?n.join(" "):n;a.setAttribute("issue-term",e)}else"number"==typeof o&&a.setAttribute("issue-number",String(o));return a.setAttribute("crossorigin","anonymous"),a.setAttribute("theme",r),t&&a.setAttribute("label",t),a})({repo:e,label:t,theme:r,issueTerm:n,issueNumber:o});var u,l;l=a,(u=i.current).childNodes.forEach((e=>{e.remove()})),u.appendChild(l)}),[]),a.createElement("div",{ref:i})};function l(){return(0,n.jsxs)("section",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(u,{repo:"wenyuzhao/wenyuzhao.github.io",theme:"github-light",issueTerm:"pathname",label:"website-comment"})]})}var c=r(9008),s=JSON.parse('{"baseurl":"","title":"Wenyu Zhao","author":"\u8d75\u6587\u5b87,Wenyu Zhao,wenyu.zhao@anu.edu.au,wenyuzhaox@gmail.com","common_keywords":"\u8d75\u6587\u5b87,Wenyu Zhao,wenyuzhao,Memory Management,Garbage Collection,GC,MMTk,Software,Web,Server,iOS,Computer Science,Mathematics","default_description":"freestyle","description_postfix":" | Wenyu Zhao \u8d75\u6587\u5b87","title_postfix":" | Wenyu Zhao"}');function f(e){var t,r,o,a,i=e.meta;return(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:i.title+(null!==(t=i.title_postfix)&&void 0!==t?t:s.title_postfix)}),";",(0,n.jsx)("meta",{name:"theme-color",content:"#fffcfc"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,n.jsx)("meta",{name:"author",content:s.author}),(0,n.jsx)("meta",{name:"description",content:null!==(r=i.description)&&void 0!==r?r:s.default_description}),(0,n.jsx)("meta",{name:"keywords",content:(i.keywords?i.keywords+",":"")+s.common_keywords}),(0,n.jsx)("meta",{property:"og:type",content:"article"}),(0,n.jsx)("meta",{property:"og:title",content:i.title+(null!==(o=i.title_postfix)&&void 0!==o?o:s.title_postfix)}),(0,n.jsx)("meta",{property:"og:description",content:null!==(a=i.description)&&void 0!==a?a:s.default_description}),(0,n.jsx)("meta",{property:"og:site_name",content:s.title}),(0,n.jsx)("meta",{property:"article:publisher",content:"https://www.facebook.com/wenyu.zhao2"}),(0,n.jsx)("link",{rel:"icon",href:"favicon.ico"})]})}var d=r(8314),m=r.n(d);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y,v=function(e){var t=e.meta,r=e.id,a=e.name,i=e.href;return(0,n.jsx)(o.default,{href:i,children:(0,n.jsx)("a",{style:{fontWeight:t.nav==r?"900":"normal"},children:a})})},b=function(e){var t=e.title;if(Array.isArray(t)){var r=p(t),o=r[0],a=r.slice(1);return(0,n.jsxs)("h1",{className:m().title,children:[o,a.map((function(e){return(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{style:{color:"#BDBDBD",fontSize:"0.8em"},children:" \u27a4 "}),e]},e)}))]})}return(0,n.jsx)("h1",{className:m().title,children:t})},g=function(e){var t=e.meta;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("header",{children:[(0,n.jsx)(b,{title:null!==(y=t.title)&&void 0!==y?y:""}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(v,{href:"/",id:"home",name:"Home",meta:t}),(0,n.jsx)(v,{href:"https://github.com/wenyuzhao",id:"github",name:"GitHub",meta:t}),(0,n.jsx)(v,{href:"/about",id:"about",name:"About Me",meta:t})]})]})})},x=function(e){e.meta;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{style:{textAlign:"center"},children:"\xa9 2022 Wenyu Zhao"})})};function j(e){var t=e.meta,r=e.children;return(0,a.useEffect)((function(){return document.body.classList.add(m().context),function(){return document.body.classList.remove(m().context)}})),(0,n.jsxs)("main",{className:m().layout,children:[(0,n.jsx)(f,{meta:t}),(0,n.jsx)(g,{meta:t}),(0,n.jsx)("article",{children:r}),t.comments&&(0,n.jsx)(l,{}),(0,n.jsx)(x,{meta:t})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(6273),l=r(387),c=r(7190);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,m=a.as,h=e.children,p=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],_=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=w&&r&&u.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+m+(t?"%"+t:"")];e&&!o&&f(n,d,m,{locale:t})}),[m,d,w,b,r,n]);var A={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,m,p,y,v,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&u.getDomainLocale(m,S,n&&n.locales,n&&n.domainLocales);A.href=E||u.addBasePath(u.addLocale(m,S,n&&n.defaultLocale))}return i.default.cloneElement(t,A)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],m=f[1],h=o(a.useState(t?t.current:null),2),p=h[0],y=h[1],v=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:p,rootMargin:r}))}),[n,p,r,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[v,d]};var a=r(7294),i=r(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},8314:function(e){e.exports={context:"default_context__pSF_R",layout:"default_layout__CcHYJ",title:"default_title__PEXHy",highlight:"default_highlight__YUgHy"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}}]);