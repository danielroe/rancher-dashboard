"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Concepts",s={unversionedId:"extensions/api/concepts",id:"extensions/api/concepts",title:"Concepts",description:"Overview on routing structure for a top-level Extension product",source:"@site/docs/extensions/api/concepts.md",sourceDirName:"extensions/api",slug:"/extensions/api/concepts",permalink:"/dashboard/extensions/api/concepts",draft:!1,tags:[],version:"current",lastUpdatedAt:1704879313,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Extensions API",permalink:"/dashboard/extensions/api/overview"},next:{title:"Metadata",permalink:"/dashboard/extensions/api/metadata"}},u={},l=[{value:"Overview on routing structure for a top-level Extension product",id:"overview-on-routing-structure-for-a-top-level-extension-product",level:2},{value:"Overview on routing structure for a cluster-level Extension product",id:"overview-on-routing-structure-for-a-cluster-level-extension-product",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("h2",{id:"overview-on-routing-structure-for-a-top-level-extension-product"},"Overview on routing structure for a top-level Extension product"),(0,o.kt)("p",null,"To become familiar with routing on VueJS and route definition we recommend that you should give a read about the ",(0,o.kt)("a",{parentName:"p",href:"https://v3.router.vuejs.org/guide/"},"Essentials on Vue Router")," and also the definition of a ",(0,o.kt)("a",{parentName:"p",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route"),"."),(0,o.kt)("p",null,"Rancher Dashboard follows a specific route pattern that needs to be fulfilled in order for Extensions to work properly with the current overall logic of the application. That pattern needs on the url path to include which ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," we are trying to load and which ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," we are using."),(0,o.kt)("p",null,"As example of an existing route, say the Fleet product, let's look at the current url structure for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"<-YOUR-RANCHER-INSTANCE-BASE-URL->/c/_/fleet\n")),(0,o.kt)("p",null,"In terms of the route definition (Vue Router), we would translate this url to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const clusterManagerRoute = {\n  name: 'c-cluster-product',\n  path: 'c/:cluster/:product',\n  params: {\n    cluster: '_',\n    product: 'fleet'\n  }\n}\n")),(0,o.kt)("p",null,"As we can see from the example above, we have defined on the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," the wildcards for ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"product"),". Also we can see the definition of ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," property, which is needed for internal app navigation and where we define the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," value as ",(0,o.kt)("inlineCode",{parentName:"p"},"_"),' , which in terms of the app context this means that we are using a "blank cluster" which translates that the app doesn\'t need to care about the cluster context for the Fleet product to run. Also we are defining ',(0,o.kt)("inlineCode",{parentName:"p"},"product")," value as ",(0,o.kt)("inlineCode",{parentName:"p"},"fleet"),", which in turn tells the app  what is the correct product to load."),(0,o.kt)("p",null,"With this pattern of wildcards and ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," in mind, then how does the route structure should look like for a top-level Extension product? In short, it needs to follow this pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const YOUR_EXT_PRODUCT_NAME = 'myExtension';\n\nconst baseRouteForATopLevelProduct = {\n  name: `${ YOUR_EXT_PRODUCT_NAME }-c-cluster`,\n  path: `/${ YOUR_EXT_PRODUCT_NAME }/c/:cluster`,\n  params: {\n    cluster: '_',\n    product: YOUR_EXT_PRODUCT_NAME\n  }\n}\n")),(0,o.kt)("p",null,"As we can see we have dismissed the ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," wildcard on the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," and replaced it with the Extension product name to make it unique. With the ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," param we make sure that the is taken to the correct product at all time.\nThis structure on the above example ensures that all the wiring needed for the Extension to work properly on Rancher Dashboard is done. There's even the case where the wildcard ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," needs to be defined in order to display information about Kubernetes resources or custom CRDs. An example of a resource route in a top-level Extension product would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const YOUR_EXT_PRODUCT_NAME = 'myExtension';\nconst RESOURCE_NAME = 'my-resource-name';\n\nconst routeForATopLevelProductResource = {\n  name: `${ YOUR_EXT_PRODUCT_NAME }-c-cluster-resource`,\n  path: `/${ YOUR_EXT_PRODUCT_NAME }/c/:cluster/:resource`,\n  params: {\n    cluster: '_',\n    product: YOUR_EXT_PRODUCT_NAME\n    resource: RESOURCE_NAME\n  }\n}\n")),(0,o.kt)("p",null,"With this quick guide on routing for top-level Extension products, we should be ready to cover the registration of custom pages, resource pages and general route definition. For more detailed information, check this page about ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/extensions/api/nav/routing#routes-definition-for-an-extension-as-a-top-level-product"},"top-level product routing"),"."),(0,o.kt)("h2",{id:"overview-on-routing-structure-for-a-cluster-level-extension-product"},"Overview on routing structure for a cluster-level Extension product"),(0,o.kt)("p",null,"The previous chapter covers the basics on routing, which should be more than enough to get you started, but if you are looking for detailed information on routing for a cluster-level product, check this page about ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/extensions/api/nav/routing#routes-definition-for-an-extension-as-a-cluster-level-product"},"cluster-level product routing"),"."))}d.isMDXComponent=!0}}]);