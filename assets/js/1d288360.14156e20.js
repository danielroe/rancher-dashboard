"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},s="Extension as a cluster-level product",i={unversionedId:"extensions/usecases/cluster-level-product",id:"extensions/usecases/cluster-level-product",title:"Extension as a cluster-level product",description:"As a full example of an Extension as cluster-level product, let's start with the definition of product.ts config:",source:"@site/docs/extensions/usecases/cluster-level-product.md",sourceDirName:"extensions/usecases",slug:"/extensions/usecases/cluster-level-product",permalink:"/dashboard/extensions/usecases/cluster-level-product",draft:!1,tags:[],version:"current",lastUpdatedAt:1704879313,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Extension as a top-level product",permalink:"/dashboard/extensions/usecases/top-level-product"},next:{title:"Custom Node Driver UI",permalink:"/dashboard/extensions/usecases/node-driver/overview"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extension-as-a-cluster-level-product"},"Extension as a cluster-level product"),(0,o.kt)("p",null,"As a full example of an Extension as cluster-level product, let's start with the definition of ",(0,o.kt)("inlineCode",{parentName:"p"},"product.ts")," config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// ./index.ts\nimport { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\nimport extensionRouting from './routing/extension-routing';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  // it will grab information such as `name` and `description`\n  plugin.metadata = require('./package.json');\n\n  // Load a product\n  plugin.addProduct(require('./product'));\n\n  // Add Vue Routes\n  plugin.addRoutes(extensionRouting);\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"product.ts"),' config will then define the product and which "pages/views" we want to add, such as:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// ./product.ts\nimport { IPlugin } from '@shell/core/types';\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'clusterLevelProduct';\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  const CUSTOM_PAGE_NAME = 'page1';\n\n  const {\n    product,\n    configureType,\n    virtualType,\n    basicType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a cluster-level product\n  product({\n    icon:    'gear',\n    inStore: 'cluster', // this is what defines the extension as a cluster-level product\n    weight:  100,\n    to:      {\n      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n      params: { product: YOUR_PRODUCT_NAME }\n    }\n  });\n\n  // defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-resource`,\n      params: {\n        product:  YOUR_PRODUCT_NAME,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n\n  // creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME,\n    route:    {\n      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n      params: { product: YOUR_PRODUCT_NAME }\n    }\n  });\n\n  // registering the defined pages as side-menu entries\n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME]);\n}\n\n")),(0,o.kt)("p",null,"In the example above, we are registering 2 pages: a resource page called ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," and a custom page called ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME"),". These need to be reflected in the routes definition that is provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addRoutes")," method."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: For more information on routing for a Top-level-product, check ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/extensions/api/nav/routing#routes-definition-for-an-extension-as-a-top-level-product"},"here"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," would then be defined like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// ./routing/extension-routing.ts\nimport ListResource from '@shell/pages/c/_cluster/_product/_resource/index.vue';\nimport CreateResource from '@shell/pages/c/_cluster/_product/_resource/create.vue';\nimport ViewResource from '@shell/pages/c/_cluster/_product/_resource/_id.vue';\nimport ViewNamespacedResource from '@shell/pages/c/_cluster/_product/_resource/_namespace/_id.vue';\nimport MyCustomPage from '../pages/myCustomPage.vue';\n\n// to achieve naming consistency throughout the extension\n// we recommend this to be defined on a config file and exported\n// so that the developer can import it wherever it needs to be used\nconst YOUR_PRODUCT_NAME = 'clusterLevelProduct';\nconst CUSTOM_PAGE_NAME = 'page1';\n\nconst routes = [\n  // this covers the \"custom page\"\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/${ CUSTOM_PAGE_NAME }`,\n    component: MyCustomPage,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  // the following routes cover the \"resource page\"\n  // registering routes for list/edit/create views\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource`,\n    component: ListResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-create`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource/create`,\n    component: CreateResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-id`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource/:id`,\n    component: ViewResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-namespace-id`,\n    path:      `/:cluster/${ YOUR_PRODUCT_NAME }/:resource/:namespace/:id`,\n    component: ViewNamespacedResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  }\n];\n\nexport default routes;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Comparing with a ",(0,o.kt)("a",{parentName:"p",href:"./top-level-product"},"Top-level product"),", we can see that the routes definition in ",(0,o.kt)("inlineCode",{parentName:"p"},"product.ts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," don't have the notion of a ",(0,o.kt)("inlineCode",{parentName:"p"},"BLANK CLUSTER"),'. This is on purpose, because a Cluster-level product needs the context of cluster where it\'s running when compared with a Top-level product, which is "above" all clusters.')),(0,o.kt)("p",null,"A full working example of this code, which can be deployed as an Extension on you Rancher Dashboard, can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-examples"},"Rancher examples repo"),". Just follow the instructions described on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-examples#readme"},"README")," on how to add the repo to Rancher Dasboard."))}d.isMDXComponent=!0}}]);