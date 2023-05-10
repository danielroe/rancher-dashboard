"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[8629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Products and Navigation",s={unversionedId:"code-base-works/products-and-navigation",id:"code-base-works/products-and-navigation",title:"Products and Navigation",description:"Details on products such as Cluster Management, Fleet and Harvester are defined in config/product. For example, config/product/explorer defines how types are grouped and weighted in Cluster Explorer. Within each product config, we use the product(options) function to define whether you can remove it and what store is used to get resources for that product. There are many more options detailed in shell/store/type-map.js",source:"@site/docs/code-base-works/products-and-navigation.md",sourceDirName:"code-base-works",slug:"/code-base-works/products-and-navigation",permalink:"/dashboard/code-base-works/products-and-navigation",draft:!1,tags:[],version:"current",lastUpdatedAt:1683715378,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Directory Structure",permalink:"/dashboard/code-base-works/directory-structure"},next:{title:"Forms",permalink:"/dashboard/code-base-works/forms-and-validation"}},l={},p=[{value:"Product Configuration",id:"product-configuration",level:2},{value:"Building the Side Navigation",id:"building-the-side-navigation",level:2},{value:"Counting Resources by Type",id:"counting-resources-by-type",level:2},{value:"Virtual and Spoofed Resource Types",id:"virtual-and-spoofed-resource-types",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"products-and-navigation"},"Products and Navigation"),(0,r.kt)("p",null,"Details on products such as Cluster Management, Fleet and Harvester are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/product"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"config/product/explorer")," defines how types are grouped and weighted in Cluster Explorer. Within each product config, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"product(options)")," function to define whether you can remove it and what store is used to get resources for that product. There are many more options detailed in ",(0,r.kt)("inlineCode",{parentName:"p"},"shell/store/type-map.js")),(0,r.kt)("h2",{id:"product-configuration"},"Product Configuration"),(0,r.kt)("p",null,"All top-level features that are reached via the header top left menu are products (some products also appear within the Cluster Explorer). Some are built in, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Explorer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Users & Authentication"),". Some are packaged with the Rancher dashboard, but enabled only after installing the required Helm charts via ",(0,r.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace"),", and some are dynamically loaded at runtime as part of a plugin."),(0,r.kt)("p",null,"Product config files are nested within /config/product in the shell code, but should reside directly in /config within plugins. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"basicType()")," indicates resources that are always shown in the side nav for the product, such as Services and Ingresses. Basic types are shown even if the number of them is 0, while other resources (such as the types listed under ",(0,r.kt)("strong",{parentName:"li"},"More")," in Cluster Explorer) are only included in the navigation if there is at least one of them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignoreType()")," is used for types that were deprecated or hidden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapGroup()")," maps Kubernetes API groups to more human-readable names."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configureType()")," toggles various display options for the type. All of the possible options are defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"type-map/optionsFor")," action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers()")," defines headers shown in the list view for the resource. If anything beyond the content of the ResourceTable needs to be customized, a custom list component can be used instead. Read more ",(0,r.kt)("a",{parentName:"li",href:"/dashboard/code-base-works/customising-how-k8s-resources-are-presented"},"here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weightGroup()"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"weightType()")," Sets the position of the group/type for this product. ")),(0,r.kt)("p",null,"These settings are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"type-map")," section of the store and manipulated with functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"/store/type-map.js"),". More docs for these functions are at the top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"type-map.js")," file."),(0,r.kt)("h2",{id:"building-the-side-navigation"},"Building the Side Navigation"),(0,r.kt)("p",null,"The side navigation bar is built by a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"getTree")," which is in ",(0,r.kt)("inlineCode",{parentName:"p"},"store/type-map.js"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"getTree")," can be called in multiple modes. It takes a list of all types and returns the ones that match the condition of the mode."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getTree")," can be run in the following modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"basic")," matches data types that should always be shown even if there are 0 of them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used")," matches the data types where there are more than 0 of them in the current set of namespaces."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")," matches all types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"favorite")," matches starred types.")),(0,r.kt)("p",null,"You can specify if you want resources to be filtered by namespace or if all resources in the cluster should be shown."),(0,r.kt)("h2",{id:"counting-resources-by-type"},"Counting Resources by Type"),(0,r.kt)("p",null,"Steve keeps a count of every type in memory at ",(0,r.kt)("inlineCode",{parentName:"p"},"v1/counts"),". This endpoint gives us a count of each type broken down by namespace and state, which allows the side nav to show a preview of how many resources of each type there are in the currently active namespace(s). Currently we don't use the count of resources broken down by state."),(0,r.kt)("p",null,"Note: While the side nav typically limits how many resources are shown so that the user is not overwhelmed, you can see all resources by clicking the magnifying glass in the top nav."),(0,r.kt)("h2",{id:"virtual-and-spoofed-resource-types"},"Virtual and Spoofed Resource Types"),(0,r.kt)("p",null,"The side nav is populated by resource types that have been applied to the current product. Virtual Types are a way to add additional menu items. These are purely for adding navigation and do not support tables or detail views. Examples of virtual types can be found by searching for ",(0,r.kt)("inlineCode",{parentName:"p"},"virtualType"),". For instance the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users & Authentication")," product has a virtual type of 'config' to show the ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth Providers")," page."),(0,r.kt)("p",null,"Spoofed Types, like virtual types, add menu items but also define a spoofed schema and a ",(0,r.kt)("inlineCode",{parentName:"p"},"getInstances")," function. The latter provides a list of objects of the spoofed type. This allows the app to then make use of the generic list, detail, edit, etc pages used for standard types."))}u.isMDXComponent=!0}}]);