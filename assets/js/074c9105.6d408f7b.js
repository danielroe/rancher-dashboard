"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Helm Chart Apps",i={unversionedId:"code-base-works/helm-chart-apps",id:"code-base-works/helm-chart-apps",title:"Helm Chart Apps",description:"When you install or upgrade Helm chart apps through Rancher,",source:"@site/docs/code-base-works/helm-chart-apps.md",sourceDirName:"code-base-works",slug:"/code-base-works/helm-chart-apps",permalink:"/dashboard/code-base-works/helm-chart-apps",draft:!1,tags:[],version:"current",lastUpdatedAt:1680274360,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Forms",permalink:"/dashboard/code-base-works/forms-and-validation"},next:{title:"Keyboard shortcuts",permalink:"/dashboard/code-base-works/keyboard-shortcuts"}},s={},p=[{value:"Injected Global Values",id:"injected-global-values",level:2},{value:"Injecting User Values",id:"injecting-user-values",level:2},{value:"Example Output",id:"example-output",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"helm-chart-apps"},"Helm Chart Apps"),(0,r.kt)("p",null,"When you install or upgrade Helm chart apps through Rancher,\nthe UI passes several values to the Helm CLI command\nthat installs or upgrades the app."),(0,r.kt)("h2",{id:"injected-global-values"},"Injected Global Values"),(0,r.kt)("p",null,"The Rancher UI injects the following global values\ninto the Helm chart values of apps installed through Rancher.\nIt adds them under ",(0,r.kt)("inlineCode",{parentName:"p"},"values.global.cattle.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"YAML Directive"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.clusterId")),(0,r.kt)("td",{parentName:"tr",align:null},"The management cluster ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.clusterName")),(0,r.kt)("td",{parentName:"tr",align:null},"The management cluster name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"systemDefaultRegistry")),(0,r.kt)("td",{parentName:"tr",align:null},"The default registry, taken from the settings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.url")),(0,r.kt)("td",{parentName:"tr",align:null},"The Rancher server URL, taken from the settings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.rkePathPrefix")),(0,r.kt)("td",{parentName:"tr",align:null},"The prefix path defined in the management cluster at ",(0,r.kt)("inlineCode",{parentName:"td"},"spec.rancherKubernetesEngineConfig.prefixPath"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.rkeWindowsPathPrefix")),(0,r.kt)("td",{parentName:"tr",align:null},"The Windows prefix path defined in the management cluster at ",(0,r.kt)("inlineCode",{parentName:"td"},"spec.rancherKubernetesEngineConfig.winPrefixPath"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.windows")),(0,r.kt)("td",{parentName:"tr",align:null},"Included in global values if ",(0,r.kt)("inlineCode",{parentName:"td"},"workerOSs")," on the management cluster contains Windows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle.systemProjectId")),(0,r.kt)("td",{parentName:"tr",align:null},"Taken from the ID of the project named System")))),(0,r.kt)("p",null,"If there are two charts associated with an app, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-crd"),", Rancher injects the global values into the values of both charts."),(0,r.kt)("h2",{id:"injecting-user-values"},"Injecting User Values"),(0,r.kt)("p",null,"When you select a version, a new chart is loaded.\nRancher anticipates that you probably want to port all of your\npreviously customized, non-default values from the old chart\nversion to the new chart version, so it applies the previous\nchart's customization (the diff between the current and default\nvalues of the existing chart) to the new chart values before\nyou see the values form on the next page in the workflow."),(0,r.kt)("p",null,'We assume that any difference between the values in\ntwo different Helm chart versions is a "user value," or\na user-selected customization.'),(0,r.kt)("p",null,"When Rancher makes the async call to install or upgrade\nan app, all of the data under ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," in the chart data\n(except for the global values) is created by getting the\ndifference between the chart's standard ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," and\nthe user's customized ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),". The actual diff function\nused is in ",(0,r.kt)("inlineCode",{parentName:"p"},"shell/utils/object.js"),". For any values that\nin the standard YAML but not the user's YAML, null values\nare added to the result."),(0,r.kt)("p",null,"The standard YAML comes from ",(0,r.kt)("inlineCode",{parentName:"p"},"versionInfo"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"versionInfo"),"\noriginates from the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.versionInfo = await this.$store.dispatch('catalog/getVersionInfo', {\n    repoType:      this.query.repoType,\n    repoName:      this.query.repoName,\n    chartName:     this.query.chartName,\n    versionName: this.query.versionName\n});\n")),(0,r.kt)("p",null,"The store gets the information from the backed by following\na link in the relevant GitHub repo and providing the chart\nname and version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"info = await repo.followLink('info', {\n    url: addParams(repo.links.info, {\n        chartName,\n        version: versionName\n    })\n});\n")),(0,r.kt)("h2",{id:"example-output"},"Example Output"),(0,r.kt)("p",null,"Example output that the UI sends in the async call when\ninstalling the monitoring app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "charts": [\n        {\n            "chartName": "rancher-monitoring-crd",\n            "version": "100.1.3+up19.0.3",\n            "releaseName": "rancher-monitoring-crd",\n            "projectId": "c-m-hhpg69fv/p-j4p76",\n            "values": {\n                "global": {\n                    "cattle": {\n                        "clusterId": "c-m-hhpg69fv",\n                        "clusterName": "c4",\n                        "systemDefaultRegistry": "",\n                        "systemProjectId": "p-j4p76",\n                        "url": "https://143.198.67.178",\n                        "rkePathPrefix": "",\n                        "rkeWindowsPathPrefix": ""\n                    },\n                    "systemDefaultRegistry": ""\n                }\n            },\n            "annotations": {\n                "catalog.cattle.io/ui-source-repo-type": "cluster",\n                "catalog.cattle.io/ui-source-repo": "rancher-charts"\n            }\n        },\n        {\n            "chartName": "rancher-monitoring",\n            "version": "100.1.3+up19.0.3",\n            "releaseName": "rancher-monitoring",\n            "annotations": {\n                "catalog.cattle.io/ui-source-repo-type": "cluster",\n                "catalog.cattle.io/ui-source-repo": "rancher-charts"\n            },\n            "values": {\n                "prometheus": {\n                    "prometheusSpec": {\n                        "evaluationInterval": "1m",\n                        "retentionSize": "50GiB",\n                        "scrapeInterval": "1m"\n                    }\n                },\n                "rke2ControllerManager": {\n                    "enabled": true\n                },\n                "rke2Etcd": {\n                    "enabled": true\n                },\n                "rke2IngressNginx": {\n                    "enabled": true\n                },\n                "rke2Proxy": {\n                    "enabled": true\n                },\n                "rke2Scheduler": {\n                    "enabled": true\n                },\n                "global": {\n                    "cattle": {\n                        "clusterId": "c-m-hhpg69fv",\n                        "clusterName": "c4",\n                        "systemDefaultRegistry": "",\n                        "systemProjectId": "p-j4p76",\n                        "url": "https://143.198.67.178",\n                        "rkePathPrefix": "",\n                        "rkeWindowsPathPrefix": ""\n                    },\n                    "systemDefaultRegistry": ""\n                }\n            }\n        }\n    ],\n    "noHooks": false,\n    "timeout": "600s",\n    "wait": true,\n    "namespace": "cattle-monitoring-system",\n    "projectId": "c-m-hhpg69fv/p-j4p76",\n    "disableOpenAPIValidation": false,\n    "skipCRDs": false\n}\n')))}u.isMDXComponent=!0}}]);