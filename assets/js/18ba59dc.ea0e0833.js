"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},s="Performance",i={unversionedId:"code-base-works/performance",id:"code-base-works/performance",title:"Performance",description:"Upstream Documentation",source:"@site/docs/code-base-works/performance.md",sourceDirName:"code-base-works",slug:"/code-base-works/performance",permalink:"/dashboard/code-base-works/performance",draft:!1,tags:[],version:"current",lastUpdatedAt:1680536471,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Machine Drivers",permalink:"/dashboard/code-base-works/machine-drivers"},next:{title:"Sortable Table",permalink:"/dashboard/code-base-works/sortable-table"}},l={},c=[{value:"Upstream Documentation",id:"upstream-documentation",level:2},{value:"Scale Testing Tools",id:"scale-testing-tools",level:2},{value:"Flame Graph",id:"flame-graph",level:2},{value:"Initial Page Load",id:"initial-page-load",level:2},{value:"List Views",id:"list-views",level:2},{value:"Deferring Duplicate Requests",id:"deferring-duplicate-requests",level:2},{value:"Streaming",id:"streaming",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"performance"},"Performance"),(0,n.kt)("h2",{id:"upstream-documentation"},"Upstream Documentation"),(0,n.kt)("p",null,"The Kubernetes documentation has useful information on efficiently detecting changes: ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/#efficient-detection-of-changes"},"https://kubernetes.io/docs/reference/using-api/api-concepts/#efficient-detection-of-changes")," "),(0,n.kt)("h2",{id:"scale-testing-tools"},"Scale Testing Tools"),(0,n.kt)("p",null,"For performance testing with many clusters or many nodes, the tool that the backend devs use for performance testing is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher2-scaling"},"https://github.com/rancher/rancher2-scaling"),"."),(0,n.kt)("p",null,"For quickly deploying a lot of resources on the same cluster, the QA team is considering this tool called ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterloader2"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/perf-tests/tree/master/clusterloader2"},"https://github.com/kubernetes/perf-tests/tree/master/clusterloader2")),(0,n.kt)("p",null,"For simulating a larger cluster than what the hardware actually provides, you can use K3d to simlate more space. With K3d it is possible to deploy more resources as you can simulate three times the CPU and memory that is actually available."),(0,n.kt)("h2",{id:"flame-graph"},"Flame Graph"),(0,n.kt)("p",null,"To inspect performance in the Rancher UI, open the Chrome developer tools and click the ",(0,n.kt)("strong",{parentName:"p"},"Performance")," tab. From there, you can see a flame chart to see what tasks take the most time. You can record performance, analyze local time vs. network time, and analyze whether some network calls can be made serially or in parallel."),(0,n.kt)("p",null,"The flame charts have more useful function names when the dashboard is running locally because in that case, the UI isn't minified."),(0,n.kt)("h2",{id:"initial-page-load"},"Initial Page Load"),(0,n.kt)("p",null,"To decrease wait times for the user overall, the UI loads as much data on the initial page load as possible. After page load we wait for the schemas to load, because the schemas determine what the logged-in user has access to. After the schemas load, other resources can be loaded."),(0,n.kt)("h2",{id:"list-views"},"List Views"),(0,n.kt)("p",null,"List views can become slow to load when the UI attempts to load too much information. For example, a list of ingresses should not separately fetch services for each item in the list."),(0,n.kt)("h2",{id:"deferring-duplicate-requests"},"Deferring Duplicate Requests"),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins/dashboard-store/actions.js"),", if there are multiple requests for the same URL including the same path and headers, the store will recognize that a similar request already exists. Instead of making another request, it will defer it, and at the end it will only send one API call. This works for all resources in general."),(0,n.kt)("h1",{id:"pagination"},"Pagination"),(0,n.kt)("p",null,"The UI renders pages for display purposes only. The Kubernetes API supports pagination (",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/#retrieving-large-results-sets-in-chunks"},"https://kubernetes.io/docs/reference/using-api/api-concepts/#retrieving-large-results-sets-in-chunks"),"), but the Rancher UI doesn't use that feature because it supports text-based sorting and filtering on the client side that is not supported on the server side."),(0,n.kt)("h2",{id:"streaming"},"Streaming"),(0,n.kt)("p",null,"When the server responds with a large JSON object, the user might have to wait a long time for the entire object, so we split it into separate documents. If we stream the data we can start parsing data earlier."),(0,n.kt)("p",null,"Vince built a streaming parser that works a little faster than loading large JSON objects. However, it is currently disabled for two reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"QA reported that the streaming caused a performance bug in Chrome."),(0,n.kt)("li",{parentName:"ul"},"The performance benefit of streaming in Rancher was modest because a lot of wait time in the UI was due to waiting for a response to begin. The gain wouldn't be large unless the backend implemented it all the way down to etcd, which they may not do.")),(0,n.kt)("p",null,"The code that supports streaming is in ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins/steve/actions.js"),". Only the Steve API supports streaming. The ",(0,n.kt)("inlineCode",{parentName:"p"},"supportsStream")," properties in ",(0,n.kt)("inlineCode",{parentName:"p"},"store/index.js")," have been set to false. They could be turned on again if the bug is fixed, but because the back end doesn't stream directly from etcd, the performance gain would not be large."))}u.isMDXComponent=!0}}]);