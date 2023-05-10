"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[8079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={},i="Directory Structure",l={unversionedId:"code-base-works/directory-structure",id:"code-base-works/directory-structure",title:"Directory Structure",description:"The directory structure is mostly flat, with each top level directory being for a different important thing (or just required by Nuxt to be there). Plugin file structure should be largely the same.",source:"@site/docs/code-base-works/directory-structure.md",sourceDirName:"code-base-works",slug:"/code-base-works/directory-structure",permalink:"/dashboard/code-base-works/directory-structure",draft:!1,tags:[],version:"current",lastUpdatedAt:1683715378,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Customizing Kubernetes Resources",permalink:"/dashboard/code-base-works/customising-how-k8s-resources-are-presented"},next:{title:"Products and Navigation",permalink:"/dashboard/code-base-works/products-and-navigation"}},s={},d=[{value:"assets*",id:"assets",level:2},{value:"chart**",id:"chart",level:2},{value:"cloud-credential**",id:"cloud-credential",level:2},{value:"config",id:"config",level:2},{value:"dialog",id:"dialog",level:2},{value:"formatters",id:"formatters",level:2},{value:"machine-config**",id:"machine-config",level:2},{value:"detail, edit, and list**",id:"detail-edit-and-list",level:2},{value:"models**",id:"models",level:2},{value:"Overlapping Model Names",id:"overlapping-model-names",level:3},{value:"promptRemove**",id:"promptremove",level:2},{value:"l10n",id:"l10n",level:2},{value:"windowComponents",id:"windowcomponents",level:2},{value:"The rest",id:"the-rest",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"directory-structure"},"Directory Structure"),(0,o.kt)("p",null,"The directory structure is mostly flat, with each top level directory being for a different important thing (or just required by Nuxt to be there). Plugin file structure should be largely the same."),(0,o.kt)("h2",{id:"assets"},"assets*"),(0,o.kt)("p",null,"Uncompiled assets, eg .scss files."),(0,o.kt)("h2",{id:"chart"},"chart**"),(0,o.kt)("p",null,"Components in the chart folder are used to add custom UI to a helm install flow. The dashboard will look up a custom chart component for a given helm chart by checking two annotations: ",(0,o.kt)("inlineCode",{parentName:"p"},"'catalog.cattle.io/ui-component'")," if set, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"'catalog.cattle.io/release-name'"),"."),(0,o.kt)("h2",{id:"cloud-credential"},"cloud-credential**"),(0,o.kt)("p",null,"Cloud credentials are components that add provider-specific UI to create cloud credentials, needed to provision clusters. Read more about provisioning ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/machine-drivers"},"here"),"."),(0,o.kt)("h2",{id:"config"},"config"),(0,o.kt)("p",null,"This is specific to extensions. Product definitions should be added directly under the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," folder (as opposed to being nested in ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/config/product"),"). See ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/products-and-navigation"},"Defining Products")," for more information."),(0,o.kt)("h2",{id:"dialog"},"dialog"),(0,o.kt)("p",null,"Components in the dialog folder are used within the ",(0,o.kt)("inlineCode",{parentName:"p"},"PromptModal")," component. Dispatch the ",(0,o.kt)("inlineCode",{parentName:"p"},"promptModal")," action from the dashboard store to open a modal. This action takes a few props:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resources"),(0,o.kt)("td",{parentName:"tr",align:null},"Array or Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional - Any resource(s) relevant to the custom modal component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"componentProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional - additional props to pass to the custom modal component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"component"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional- the name of the custom modal component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"modalWidth"),(0,o.kt)("td",{parentName:"tr",align:null},"String CSS Property"),(0,o.kt)("td",{parentName:"tr",align:null},"Desired width of the modal (default 600px)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"modalSticky"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether or not to apply sticky positioning (default false)")))),(0,o.kt)("h2",{id:"formatters"},"formatters"),(0,o.kt)("p",null,"This is not a top-level folder in the shell, which uses ",(0,o.kt)("inlineCode",{parentName:"p"},"/components/formatter"),", but a top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"formatters")," directory works the same way in an extension as the shell ",(0,o.kt)("inlineCode",{parentName:"p"},"formatter")," directory does. Formatters are used to format data within tables. see ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/products-and-navigation"},"Defining Products")," for more information on configuring resource tables."),(0,o.kt)("h2",{id:"machine-config"},"machine-config**"),(0,o.kt)("p",null,"Machine configs are used to add provider-specific UI to the rke2/k3s provisioning page. Read more about provisioning ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/machine-drivers"},"here")),(0,o.kt)("h2",{id:"detail-edit-and-list"},"detail, edit, and list**"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"detail"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," folders are used to create custom CRUD views for kubernetes resources, and components in each should be given the same name as the targeted resource. Read about how to leverage them in detail ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/customising-how-k8s-resources-are-presented"},"here")),(0,o.kt)("h2",{id:"models"},"models**"),(0,o.kt)("p",null,"Kubernetes resources loaded through the dashboard store are, by default, instances of the resource class found here: ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/dashboard-store/resource-class.js"),". Add a file with the name of the resource to the ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," directory to expand on that functionality. Generally, models should be an extension of the Steve class (Norman resources should not, but they are primarly used around auth functionality):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import SteveModel from '@shell/plugins/steve/steve-class';\n\nexport default class <resource name> extends SteveModel {\n...\n}\n")),(0,o.kt)("p",null,"Some common model properties to overwrite are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"availableActions"),": list of resource actions that appear in kebab menus (include/alter default actions with ",(0,o.kt)("inlineCode",{parentName:"li"},"_availableActions"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"canDelete"),": whether or not the current user should be able to delete a resource"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"detailLocation"),": route for the detail view of one instance of the resource")),(0,o.kt)("h3",{id:"overlapping-model-names"},"Overlapping Model Names"),(0,o.kt)("p",null,"It's possible that different products will use the same kubernetes resource, but need to add different model functionality (eg Harvester has a 'node' model). Files in a extension's ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," folder will overwrite any files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/models")," directory across the application. To extend or overwrite model functionality for a given store, nest models within a subfolder with the same name as the vuex module's ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),". see ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/extensions/extensions-configuration"},"Extensions Configuration")," for more information on configuring an extension store."),(0,o.kt)("h2",{id:"promptremove"},"promptRemove**"),(0,o.kt)("p",null,"Components in the PromptRemove folder are used to customize the removal prompt for specific resource types. Components added to this folder should have the same file name as the resource they're intended for. These components do not control the actual removal action - they are intended to allow the developer to supply additional information about consequences of removing a given resource, eg the Global Role removal prompt warns how many users are bound to that role. "),(0,o.kt)("h2",{id:"l10n"},"l10n"),(0,o.kt)("p",null,"Extension translation strings are merged with those already present in ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/assets/translations"),". Translation strings with duplicate keys of those present in the relevant shell translation file will overwrite those shell translation strings ",(0,o.kt)("em",{parentName:"p"},"across the app"),": be mindful if adding translation strings that are not explicitly scoped to your extension. Read more about translations ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/on-screen-text-and-translations"},"here")),(0,o.kt)("h2",{id:"windowcomponents"},"windowComponents"),(0,o.kt)("p",null,"Components in this folder can be used within ",(0,o.kt)("inlineCode",{parentName:"p"},"WindowManager")," component, which relies on the ",(0,o.kt)("inlineCode",{parentName:"p"},"wm")," vuex store."),(0,o.kt)("h2",{id:"the-rest"},"The rest"),(0,o.kt)("p",null,"The rest of the top level directories are mostly Nuxt directories that you can read about ",(0,o.kt)("a",{parentName:"p",href:"https://nuxtjs.org/docs/directory-structure/nuxt"},"here"),". "),(0,o.kt)("p",null,"*",(0,o.kt)("em",{parentName:"p"},"not automatically imported with extensions")),(0,o.kt)("p",null,"*","*"," ",(0,o.kt)("em",{parentName:"p"},"components in these directories need particular names to work: either the relevant k8s resource or cloud provider")))}c.isMDXComponent=!0}}]);