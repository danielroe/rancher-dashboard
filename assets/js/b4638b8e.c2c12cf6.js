"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[5171],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i="Hooks",l={unversionedId:"extensions/advanced/hooks",id:"extensions/advanced/hooks",title:"Hooks",description:"Navigation In and Out of Extensions",source:"@site/docs/extensions/advanced/hooks.md",sourceDirName:"extensions/advanced",slug:"/extensions/advanced/hooks",permalink:"/dashboard/extensions/advanced/hooks",draft:!1,tags:[],version:"current",lastUpdatedAt:1704879313,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Localization",permalink:"/dashboard/extensions/advanced/localization"},next:{title:"Custom VueX Stores",permalink:"/dashboard/extensions/advanced/stores"}},d={},p=[{value:"Navigation In and Out of Extensions",id:"navigation-in-and-out-of-extensions",level:2}],s={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hooks"},"Hooks"),(0,r.kt)("h2",{id:"navigation-in-and-out-of-extensions"},"Navigation In and Out of Extensions"),(0,r.kt)("p",null,"Extensions can define ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onLeave")," hooks in their index ",(0,r.kt)("inlineCode",{parentName:"p"},"addNavHooks")," extension method, which will run when the authenticated middleware detects a package change by checking the route meta property. ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onLeave")," accept the same props: the vuex store context and a config object containing: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clusterId")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique ID of the current cluster, determined by the route's ",(0,r.kt)("inlineCode",{parentName:"td"},"cluster")," param")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"product")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the product being navigated to, also taken from the route")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oldProduct")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the product being navigated away from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oldIsExt")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the previous product was in a package (note that this doesn't distinguish between inter- and intra-package product changes)")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticated")," middleware will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to the management cluster (",(0,r.kt)("inlineCode",{parentName:"li"},"loadManagement"),")"),(0,r.kt)("li",{parentName:"ul"},"Apply product config, as determined from the route (",(0,r.kt)("inlineCode",{parentName:"li"},"applyProducts"),")"),(0,r.kt)("li",{parentName:"ul"},"If an old extension is loaded, run its ",(0,r.kt)("inlineCode",{parentName:"li"},"onLeave")," hook"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"onEnter")," hook for new extension "),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"loadCluster")," (which, as stated above, can run load and unload cluster actions defined in extensions)")),(0,r.kt)("p",null,"An example of the usage ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onLeave")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"addNavHooks")," extension method would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin, OnNavToPackage, OnNavAwayFromPackage } from '@shell/core/types';\n\nconst onEnter: OnNavToPackage = async(store, config) => {\n  // define any function needed here for `onEnter`\n};\nconst onLeave: OnNavAwayFromPackage = async(store, config) => {\n  // define any function needed here for `onLeave`\n};\n\n// Init the extension\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  // it will grab information such as `name` and `description`\n  plugin.metadata = require('./package.json');\n\n  // Load a product\n  plugin.addProduct(require('./product'));\n\n  // => => => Add hooks to Vue navigation world\n  plugin.addNavHooks(onEnter, onLeave);\n}\n")))}c.isMDXComponent=!0}}]);