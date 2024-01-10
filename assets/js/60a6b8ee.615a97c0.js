"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},o="Node Driver Example",s={unversionedId:"extensions/usecases/node-driver/about-example",id:"extensions/usecases/node-driver/about-example",title:"Node Driver Example",description:"An example node driver UI Extension has been created for OpenStack - the source code is available in this",source:"@site/docs/extensions/usecases/node-driver/about-example.md",sourceDirName:"extensions/usecases/node-driver",slug:"/extensions/usecases/node-driver/about-example",permalink:"/dashboard/extensions/usecases/node-driver/about-example",draft:!1,tags:[],version:"current",lastUpdatedAt:1704879313,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Making API Calls",permalink:"/dashboard/extensions/usecases/node-driver/proxying"},next:{title:"Storybook",permalink:"/dashboard/storybook"}},l={},d=[{value:"Caveats",id:"caveats",level:2},{value:"Allow-list",id:"allow-list",level:3},{value:"Private/Public Fields",id:"privatepublic-fields",level:3},{value:"Proxying",id:"proxying",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-driver-example"},"Node Driver Example"),(0,a.kt)("p",null,"An example node driver UI Extension has been created for OpenStack - the source code is available in this\nGitHub repository - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-examples"},"https://github.com/rancher/ui-plugin-examples")),(0,a.kt)("p",null,"This is a great starting point for creating your own extension for a Node Driver UI."),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("p",null,"The OpenStack Node Driver provided by Rancher has a few limitations which are not generally encountered when you create a Node Driver extension - these are discussed below."),(0,a.kt)("h3",{id:"allow-list"},"Allow-list"),(0,a.kt)("p",null,"Many node drivers communicate with cloud-based systems where the URL is constant and well-known - e.g. my-provider.com. The Node Driver added to Rancher will include this URL in its allow-list, which means the UI can proxy API calls to it."),(0,a.kt)("p",null,"For providers like OpenStack, the URL is not constant - it depends on each deployment."),(0,a.kt)("p",null,"The OpenStack UI Extension example catches ",(0,a.kt)("inlineCode",{parentName:"p"},"503")," HTTP errors from the proxy API (which indicates that the proxy was not permitted) and offers to add the required URL to the allow-list for the node driver. Note that the user must have appropriate permissions in order to be able to do this."),(0,a.kt)("h3",{id:"privatepublic-fields"},"Private/Public Fields"),(0,a.kt)("p",null,"The OpenStack node driver only declares ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," as a private field (see ",(0,a.kt)("inlineCode",{parentName:"p"},"privateCredentialFields")," on the OpenStack ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeDriver")," custom resource). It does not define any public fields."),(0,a.kt)("p",null,"This means we can only store the password field on this resource."),(0,a.kt)("p",null,"For our OpenStack UI, we need to store additional fields, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authentication URL"),(0,a.kt)("li",{parentName:"ul"},"Domain Name"),(0,a.kt)("li",{parentName:"ul"},"Username")),(0,a.kt)("p",null,"To work around the node driver limitation, we store these additional fields as annotations. This is not encouraged and for a custom node driver, you should ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"privateCredentialFields")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"publicCredentialFields")," are defined appropriately."),(0,a.kt)("h3",{id:"proxying"},"Proxying"),(0,a.kt)("p",null,"Rancher provides a proxying mechanism to get around CORS issues. This allows the UI to communicate with external APIs outside of Rancher."),(0,a.kt)("p",null,"Additionally, the proxying mechanism can insert private credential metadata into a proxied request. This allows calls to be made to backend APIs that require authentication without having to retrieve the private data from the backend."),(0,a.kt)("p",null,"This mechanism only supports adding credential fields into the auth header - for OpenStack, we need to send the password in a JSON body as part of a token request to the OpenStack API."),(0,a.kt)("p",null,"The OpenStack example extension works around this limitation by retrieving the secret associated with the corresponding cloud credential. This is generally discouraged and has the limitation that the user must be able to access secrets in order to do this, which may not be the case where permissions have been applied."))}u.isMDXComponent=!0}}]);