(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3yTN":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return r}));var a=e("9Hrx"),i=e("q1tI"),o=e.n(i),l=e("Bl7J"),p=e("ofAR"),r=function(n){function t(){return n.apply(this,arguments)||this}return Object(a.a)(t,n),t.prototype.render=function(){var n=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext;return o.a.createElement(l.a,null,o.a.createElement(p.a,{posts:n,pagination:t}))},t}(o.a.Component)},ofAR:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var a,i,o=e("AcpX"),l=e("q1tI"),p=e.n(l),r=e("vOnD"),s=e("Wbzz"),m=e("WltW"),c=r.b.div.withConfig({displayName:"BlogListComponent__BlogListContainer",componentId:"sc-1lxwx7p-0"})(["width:1024px;max-width:1024px;min-height:600px;",""],m.a.md(a||(a=Object(o.a)(["\n    width: 100%;\n    max-width:100%;\n  "])))),d=r.b.div.withConfig({displayName:"BlogListComponent__BlogListContent",componentId:"sc-1lxwx7p-1"})(["display:flex;flex-direction:column;"]),g=r.b.div.withConfig({displayName:"BlogListComponent__BlogPost",componentId:"sc-1lxwx7p-2"})(["display:flex;justify-content:space-between;",""],m.a.md(i||(i=Object(o.a)([" \n    flex-direction: column;\n    max-width:100%;\n    padding:0.5rem 0;\n  "])))),u=r.b.span.withConfig({displayName:"BlogListComponent__BlogTitle",componentId:"sc-1lxwx7p-3"})([""]),f=r.b.span.withConfig({displayName:"BlogListComponent__BlogDate",componentId:"sc-1lxwx7p-4"})([""]),x=r.b.div.withConfig({displayName:"BlogListComponent__BlogPagination",componentId:"sc-1lxwx7p-5"})(["margin:8px 0px;"]),w=Object(r.b)(s.Link).withConfig({displayName:"BlogListComponent__PageNavLink",componentId:"sc-1lxwx7p-6"})(["margin:0px 8px;:first-child{margin:0;margin-right:8px;}:last-child{margin:0;margin-left:8px;}"]);function h(n){var t=n.pagination;return p.a.createElement(c,null,p.a.createElement(d,null,n.posts.map((function(n){var t=n.node,e=t.frontmatter.title||t.fields.slug;return p.a.createElement(s.Link,{key:t.fields.slug,to:t.frontmatter.path},p.a.createElement(g,null,p.a.createElement(u,null,""+e),p.a.createElement(f,null,t.frontmatter.date.split(" ")[0])))}))),p.a.createElement(x,null,t&&t.numPages>1?Array(t.numPages).fill(0).map((function(n,t){return p.a.createElement(w,{key:t+1,to:0===t?"/blog":"/blog/"+(t+1)},t+1)})):null))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-ad4c7d424932e3fead48.js.map