"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{4020:function(t){var e="%[a-f0-9]{2}",r=new RegExp("("+e+")|([^%]+?)","gi"),n=new RegExp("("+e+")+","gi");function a(t,e){try{return[decodeURIComponent(t.join(""))]}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r)||[],n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(r)||[];return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(t);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(t)}r["%C2"]="�";for(var s=Object.keys(r),c=0;c<s.length;c++){var l=s[c];t=t.replace(new RegExp(l,"g"),r[l])}return t}(t)}}},2806:function(t){t.exports=function(t,e){for(var r={},n=Object.keys(t),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],s=t[i];(a?-1!==e.indexOf(i):e(i,s,t))&&(r[i]=s)}return r}},9738:function(t,e,r){r.d(e,{Z:function(){return v}});var n=r(1880),a=r(7294),o=r(2788),i=r(1883),s=r(6071);const c=o.default.div.withConfig({displayName:"BlogListItem__Container",componentId:"sc-1bdqexg-0"})(["height:300px;display:flex;flex-direction:column;"]),l=o.default.div.withConfig({displayName:"BlogListItem__ThumbnailWrapper",componentId:"sc-1bdqexg-1"})(["flex:1;"]),p=o.default.div.withConfig({displayName:"BlogListItem__NoImageTitle",componentId:"sc-1bdqexg-2"})(["display:flex;font-size:24px;font-weight:500;background-color:var(--pre);align-items:center;justify-content:center;width:100%;height:100%;border-radius:8px 8px 0 0;"]),u=o.default.div.withConfig({displayName:"BlogListItem__ContentWrapper",componentId:"sc-1bdqexg-3"})(["padding:18px;background-color:#2c2c2c;border-radius:0 0 8px 8px;"]),d=o.default.h3.withConfig({displayName:"BlogListItem__ContentTitle",componentId:"sc-1bdqexg-4"})(["font-size:20px;margin-top:4px;"]),m=o.default.p.withConfig({displayName:"BlogListItem__ContentDescription",componentId:"sc-1bdqexg-5"})(["font-size:14px;padding:8px 0;word-wrap:break-word;word-break:keep-all;"]),f=o.default.span.withConfig({displayName:"BlogListItem__ContentDate",componentId:"sc-1bdqexg-6"})(["font-size:12px;color:#8c8c8c;"]);var g,y,b=t=>{const{title:e,date:r,tags:n,description:o}=t;return a.createElement(c,null,a.createElement(l,null,a.createElement(p,null,e.length>20?e.slice(0,20)+"...":e)),a.createElement(u,null,a.createElement("div",null,a.createElement(d,null,e),a.createElement(m,null,o&&o.length>60?o.slice(0,61)+"...":o),a.createElement(f,null,r))))};const h=o.default.div.withConfig({displayName:"BlogListComponent__BlogListContainer",componentId:"sc-gc4psa-0"})(["width:960px;min-height:600px;",""],s.s.md(g||(g=(0,n.Z)(["\n    width: 100%;\n    max-width:100%;\n  "])))),x=o.default.div.withConfig({displayName:"BlogListComponent__BlogListContent",componentId:"sc-gc4psa-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:36px;padding:0 16px;",""],s.s.sm(y||(y=(0,n.Z)(["\n    grid-template-columns: 1fr;\n  "])))),k=o.default.div.withConfig({displayName:"BlogListComponent__BlogPagination",componentId:"sc-gc4psa-2"})(["margin:8px 0px;"]),w=(0,o.default)(i.Link).withConfig({displayName:"BlogListComponent__PageNavLink",componentId:"sc-gc4psa-3"})(["margin:0px 8px;:first-child{margin:0;margin-right:8px;}:last-child{margin:0;margin-left:8px;}"]);function v(t){const e=t.pagination;return a.createElement(h,null,a.createElement(x,null,t.posts.map((t=>{let{node:e}=t;const r=e.frontmatter.title||"TBD",n=e.frontmatter.date,o=e.frontmatter.tags,s=e.frontmatter.desc;return a.createElement(i.Link,{key:e.fields.slug,to:e.frontmatter.path},a.createElement(b,{title:r,date:n,tags:o,description:s}))}))),a.createElement(k,null,e&&e.numPages>1?Array(e.numPages).fill(0).map(((t,e)=>a.createElement(w,{key:e+1,to:0===e?"/blog":"/blog/"+(e+1)},e+1))):null))}},4001:function(t,e,r){var n=r(7294),a=r(4593),o=r(1883);function i(t){let{description:e,lang:r,meta:i,title:s}=t;const{site:c}=(0,o.useStaticQuery)("63159454"),l=e||c.siteMetadata.description;return n.createElement(n.Fragment,null,n.createElement(a.q,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)}))}i.defaultProps={lang:"en",meta:[],description:""},e.Z=i},7200:function(t,e,r){r.r(e);var n=r(7294),a=r(6827),o=r(4001),i=r(9738),s=r(7563);e.default=t=>{let{data:e,location:r}=t;const c=s.parse(r.search);let l=e.allMarkdownRemark.edges;return c.tagName&&(l=l.filter((t=>{let{node:e}=t;const r=e.frontmatter.tags;return!!r&&!!r.find((t=>t===c.tagName))}))),n.createElement(a.Z,null,n.createElement(o.Z,{title:"Home"}),n.createElement(i.Z,{posts:l}))}},7563:function(t,e,r){const n=r(610),a=r(4020),o=r(500),i=r(2806),s=Symbol("encodeFragmentIdentifier");function c(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function p(t,e){return e.decode?a(t):t}function u(t){return Array.isArray(t)?t.sort():"object"==typeof t?u(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function d(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function m(t){const e=(t=d(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function f(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function g(t,e){c((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return(t,r,n)=>{e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return(e,r,n)=>{const a="string"==typeof r&&r.includes(t.arrayFormatSeparator),o="string"==typeof r&&!a&&p(r,t).includes(t.arrayFormatSeparator);r=o?p(r,t):r;const i=a||o?r.split(t.arrayFormatSeparator).map((e=>p(e,t))):null===r?r:p(r,t);n[e]=i};case"bracket-separator":return(e,r,n)=>{const a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!a)return void(n[e]=r?p(r,t):r);const o=null===r?[]:r.split(t.arrayFormatSeparator).map((e=>p(e,t)));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;for(const a of t.split("&")){if(""===a)continue;let[t,i]=o(e.decode?a.replace(/\+/g," "):a,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?i:p(i,e),r(p(t,e),i,n)}for(const a of Object.keys(n)){const t=n[a];if("object"==typeof t&&null!==t)for(const r of Object.keys(t))t[r]=f(t[r],e);else n[a]=f(t,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(((t,e)=>{const r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=u(r):t[e]=r,t}),Object.create(null))}e.extract=m,e.parse=g,e.stringify=(t,e)=>{if(!t)return"";c((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const r=r=>e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r],n=function(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[l(e,t),"[",a,"]"].join("")]:[...r,[l(e,t),"[",l(a,t),"]=",l(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[l(e,t),"[]"].join("")]:[...r,[l(e,t),"[]=",l(n,t)].join("")];case"colon-list-separator":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[l(e,t),":list="].join("")]:[...r,[l(e,t),":list=",l(n,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===t.arrayFormat?"[]=":"=";return r=>(n,a)=>void 0===a||t.skipNull&&null===a||t.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[l(r,t),e,l(a,t)].join("")]:[[n,l(a,t)].join(t.arrayFormatSeparator)])}default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,l(e,t)]:[...r,[l(e,t),"=",l(n,t)].join("")]}}(e),a={};for(const i of Object.keys(t))r(i)||(a[i]=t[i]);const o=Object.keys(a);return!1!==e.sort&&o.sort(e.sort),o.map((r=>{const a=t[r];return void 0===a?"":null===a?l(r,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?l(r,e)+"[]":a.reduce(n(r),[]).join("&"):l(r,e)+"="+l(a,e)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[r,n]=o(t,"#");return Object.assign({url:r.split("?")[0]||"",query:g(m(t),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:p(n,e)}:{})},e.stringifyUrl=(t,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const n=d(t.url).split("?")[0]||"",a=e.extract(t.url),o=e.parse(a,{sort:!1}),i=Object.assign(o,t.query);let c=e.stringify(i,r);c&&(c=`?${c}`);let p=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(p=`#${r[s]?l(t.fragmentIdentifier,r):t.fragmentIdentifier}`),`${n}${c}${p}`},e.pick=(t,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:a,query:o,fragmentIdentifier:c}=e.parseUrl(t,n);return e.stringifyUrl({url:a,query:i(o,r),fragmentIdentifier:c},n)},e.exclude=(t,r,n)=>{const a=Array.isArray(r)?t=>!r.includes(t):(t,e)=>!r(t,e);return e.pick(t,a,n)}},500:function(t){t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},610:function(t){t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,(t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-642ae7a3d1542ba78c91.js.map