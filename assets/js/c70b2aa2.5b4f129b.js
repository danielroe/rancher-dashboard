"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={},r="E2E Tests",o={unversionedId:"testing/e2e-test",id:"testing/e2e-test",title:"E2E Tests",description:"This repo is configured for end-to-end testing with Cypress and the CI will run using a blank state of Rancher executed locally. The aim is however to enable also tests using remote instances of Ranchers.",source:"@site/docs/testing/e2e-test.md",sourceDirName:"testing",slug:"/testing/e2e-test",permalink:"/dashboard/testing/e2e-test",draft:!1,tags:[],version:"current",lastUpdatedAt:1704879313,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Unit Tests",permalink:"/dashboard/testing/unit-test"},next:{title:"Stress Testing",permalink:"/dashboard/testing/stress-test"}},l={},p=[{value:"Quick start",id:"quick-start",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Run the tests",id:"run-the-tests",level:3},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Setup for remote tests",id:"setup-for-remote-tests",level:3},{value:"Setup for local tests",id:"setup-for-local-tests",level:3},{value:"Setup for dashboard purposes ONLY",id:"setup-for-dashboard-purposes-only",level:3},{value:"Skip and only features",id:"skip-and-only-features",level:3},{value:"E2E Dashboard",id:"e2e-dashboard",level:2},{value:"Self-hosted: Sorry Cypress",id:"self-hosted-sorry-cypress",level:3},{value:"Cypress dashboard installation guide",id:"cypress-dashboard-installation-guide",level:3},{value:"Cypress Dashboard",id:"cypress-dashboard",level:3},{value:"Local and CI/prod run",id:"local-and-ciprod-run",level:2},{value:"Custom Commands",id:"custom-commands",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Tips",id:"tips",level:2},{value:"Data testid naming",id:"data-testid-naming",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Coverage",id:"coverage",level:2},{value:"Cypress Tags (cypress-grep plugin)",id:"cypress-tags-cypress-grep-plugin",level:2},{value:"E2E with user role tags",id:"e2e-with-user-role-tags",level:3},{value:"E2E with feature tags",id:"e2e-with-feature-tags",level:3},{value:"E2E tests parallelization in CI",id:"e2e-tests-parallelization-in-ci",level:3},{value:"Cypress Utilities",id:"cypress-utilities",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"e2e-tests"},"E2E Tests"),(0,i.kt)("p",null,"This repo is configured for end-to-end testing with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/api/table-of-contents"},"Cypress")," and the CI will run using a blank state of Rancher executed locally. The aim is however to enable also tests using remote instances of Ranchers."),(0,i.kt)("p",null,"Because of this, we extend the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/references/best-practices#How-It-Works"},"Cypress best practices"),", so be sure to read them before write any test."),(0,i.kt)("h2",{id:"quick-start"},"Quick start"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This covers running E2E tests locally in a vanilla environment")),(0,i.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instance of Rancher deployed and set up (passed setup pages)"),(0,i.kt)("li",{parentName:"ul"},"Dashboard running locally at the default address (",(0,i.kt)("inlineCode",{parentName:"li"},"https://localhost:8005"),") pointing to the set up rancher")),(0,i.kt)("h3",{id:"run-the-tests"},"Run the tests"),(0,i.kt)("p",null,"This will start the cypress test runner, where you can select which tests to run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"TEST_PASSWORD=<rancher admin password> TEST_SKIP=setup yarn cy:open\n")),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"For the cypress test runner to consume the UI, you should specify the environment variables. This may change based on the type of tests you may want to run."),(0,i.kt)("h3",{id:"setup-for-remote-tests"},"Setup for remote tests"),(0,i.kt)("p",null,"For tests against a deployed Rancher, e.g. on Digital Ocean, mainly for analyzing the project current state."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_USERNAME"),", default ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_PASSWORD"),", user password or custom during first Rancher run"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_BASE_URL"),", the address of your instance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_SKIP=setup"),", we avoid setup as your instance is already set")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you want to generate code coverage information, you must enable code instrumentation by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_INSTRUMENT")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("p",null,"Finally run one of the 2 commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:open"),", if you want to select the tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:run"),", if you want to run ALL the tests")),(0,i.kt)("p",null,"For further information, consult ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/command-line#cypress-open"},"official documentation"),"."),(0,i.kt)("h3",{id:"setup-for-local-tests"},"Setup for local tests"),(0,i.kt)("p",null,"These types of tests are aimed for development and updates."),(0,i.kt)("p",null,"NOTE: Local setup of Rancher do not work on Mac with M1 chips."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"API"),", the address of your server (e.g. DO), it may be local or hosted (e.g. you have Mac M1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_USERNAME"),", default ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_PASSWORD"),", user password or custom during first Rancher run"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CATTLE_BOOTSTRAP_PASSWORD"),", initialization password which will also be used as ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," user password (do not pick ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," as password as it generates issues)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_BASE_URL=https://localhost:8005")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_SKIP=setup"),", avoid to execute bootstrap setup tests for already initialized Rancher instances, it has to be toggled in case of new instances")),(0,i.kt)("p",null,"You will have to run your local instance at this point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn dev"))),(0,i.kt)("p",null,"Finally run one of the 2 commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:open"),", if you want to select the tests from the browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:run"),", if you want to run ALL the tests in background")),(0,i.kt)("p",null,"For further information, consult ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/command-line#cypress-open"},"official documentation"),"."),(0,i.kt)("h3",{id:"setup-for-dashboard-purposes-only"},"Setup for dashboard purposes ONLY"),(0,i.kt)("p",null,"If you want your tests to be tracked on Cypress dashboards you will have to enable the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_PROJECT_ID")," // Project ID used by Cypress/Sorry cypress to run the tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_RUN_ID")," (optional) // Identifier for your dashboard run, default value is timestamp")),(0,i.kt)("h3",{id:"skip-and-only-features"},"Skip and only features"),(0,i.kt)("p",null,"Existing ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_SKIP_SETUP")," logic has been replaced with something more generic included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cypress.ts")," script/utility.\nIt is now possible to skip features by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_SKIP")," env var, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_SKIP=setup"),".\nAlternatively is possible to solely run a specific feature by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_ONLY")," env var, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_ONLY=setup"),".\nThe features are folder name based and can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"cypress/e2e/tests/pages"),"."),(0,i.kt)("h2",{id:"e2e-dashboard"},"E2E Dashboard"),(0,i.kt)("h3",{id:"self-hosted-sorry-cypress"},"Self-hosted: Sorry Cypress"),(0,i.kt)("p",null,"Link to the dashboard: ",(0,i.kt)("a",{parentName:"p",href:"http://139.59.134.103:8080/"},"http://139.59.134.103:8080/")),(0,i.kt)("p",null,"E2E tests can be added and displayed in a dashboard by defining the project ID with the env var ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_PROJECT_ID"),", then run the script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cy:run:sorry\n")),(0,i.kt)("h3",{id:"cypress-dashboard-installation-guide"},"Cypress dashboard installation guide"),(0,i.kt)("p",null,"The setup is done using a cloud hosting service and with its IP we configured the Sorry Cypress as indicated in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.sorry-cypress.dev/guide/dashboard-and-api"},"guide"),". The process is straightforward, except for the IP which is required to be overwritten within ",(0,i.kt)("inlineCode",{parentName:"p"},"minio.yml")," manifest as the default ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost")," value generate CORS issues."),(0,i.kt)("h3",{id:"cypress-dashboard"},"Cypress Dashboard"),(0,i.kt)("p",null,"E2E tests can be displayed in Cypress dashboard by defining the project ID with the env var ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_PROJECT_ID"),", then run the script by passing the parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cy:run --record --key YOUR_RECORD_KEY_HERE\n")),(0,i.kt)("p",null,"These values are provided when you create a new project within Cypress dashboard or within ",(0,i.kt)("inlineCode",{parentName:"p"},"Project settings"),"."),(0,i.kt)("p",null,"It's also possible to run a workflow in GitHub Actions E2E test using these values to record on personal dashboards."),(0,i.kt)("h2",{id:"local-and-ciprod-run"},"Local and CI/prod run"),(0,i.kt)("p",null,"It is possible to start the project and run all the tests at once with a single command. There's however a difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," run. The first will not require an official certificate and will build the project in ",(0,i.kt)("inlineCode",{parentName:"p"},".nuxt"),", while the production will enable all the SSL configurations to run encrypted."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:pre-dev"),", to optionally initialize Docker and build the project, if not already done"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:dev"),", single run local development"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:pre-prod"),", to optionally initialize Docker and build the project, required for GitHub Actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:dev"),", for production use case and CI, which will also restart Docker and build the project")),(0,i.kt)("h2",{id:"custom-commands"},"Custom Commands"),(0,i.kt)("p",null,"As Cypress common practice, some custom commands have been created within ",(0,i.kt)("inlineCode",{parentName:"p"},"command.ts")," file to simplify the development process. Please consult Cypress documentation for more details about when and how to use them."),(0,i.kt)("p",null,"Worth mentioning the ",(0,i.kt)("inlineCode",{parentName:"p"},"cy.getId()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cy.findId()")," commands, as it is mainly used to select elements. This would require to add ",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid")," to your element inside the markup and optionally matchers."),(0,i.kt)("h2",{id:"writing-tests"},"Writing tests"),(0,i.kt)("p",null,"Test specs should be grouped logically, normally by page or area of the Dashboard but also by a specific feature or component."),(0,i.kt)("p",null,"Tests should make use of common Page Object (PO) components. These can be pages or individual components which expose a useful set of tools, but most importantly contain the selectors for the DOM elements that need to be used. These will ensure changes to the underlying components don't require a rewrite of many many tests. They also allow parent components to easily search for children (for example easily finding all anchors in a section instead of the whole page). Given that tests are typescript it should be easy to explore the functionality."),(0,i.kt)("p",null,"Some examples of PO functionality"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"HomePage.gotTo()\nnew HomePagePo().checkIsCurrentPage()\nnew BurgerMenuPo().clusters()\nnew AsyncButtonPO('[data-testid=\"my-button\"]').isDisabled()\nnew LoginPagePo().username().set('admin')\n")),(0,i.kt)("p",null,"POs all inherit a root ",(0,i.kt)("inlineCode",{parentName:"p"},"component.po"),". Common component functionality can be added there. They also expose their core cypress (chainable) element."),(0,i.kt)("p",null,"There are a large number of pages and components in the Dashboard and only a small set of POs. These will be expanded as the tests grow."),(0,i.kt)("p",null,"Note: When selecting an element be sure to use the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid"),", even in case of lists where elements are distinguished by an index suffix."),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,"The Cypress UI is very much your friend. There you can click pick tests to run, easily visually track the progress of the test, see the before/after state of each cypress command (specifically good for debugging failed steps), see https requests, etc."),(0,i.kt)("p",null,"Tests can also be restricted before cypress runs, or at run time, by prepending ",(0,i.kt)("inlineCode",{parentName:"p"},".only")," to the run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"describe.only('Burger Side Nav Menu', () => {\n  beforeEach\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it.only('Opens and closes on menu icon click', () => {\n")),(0,i.kt)("h2",{id:"data-testid-naming"},"Data testid naming"),(0,i.kt)("p",null,"While defining naming, always consider deterministic usage and rely on specific values. For cases where the content is required, e.g. select name specific elements as in cluster selection, consider use the ",(0,i.kt)("inlineCode",{parentName:"p"},"contain()")," method. Further guideline and explanation in the official documentation related section."),(0,i.kt)("p",null,"In case of complex component, define a prefix for your ",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid")," with a the prop ",(0,i.kt)("inlineCode",{parentName:"p"},"componentTestid")," and a default value. This will help you to define unique value and composable identifier in case of more elements, as well to avoid custom term for each test if not necessary, e.g. no multiple elements."),(0,i.kt)("p",null,"E.g. given the action menu:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Inherited global identifier prefix for tests\n * Define a term based on the parent component to avoid conflicts on multiple components\n */\ncomponentTestid: {\n  type:    String,\n  default: 'action-menu'\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<li\n  v-for="(option, i) in options"\n  :key="opt.action"\n  :data-testid="componentTestid + \'-\' + i + \'-item\'"\n>\n')),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"To summarize what ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/debugging"},"defined in the documentation"),", the following modalities of debugging are provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debugger")," flag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".debug()")," as chained command"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cy.pause()")," for analyzing the state of the test"),(0,i.kt)("li",{parentName:"ul"},"Inspect commands in the Cypress dashboard to view the logs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".then(console.log)")," to append the log to the resolved promise")),(0,i.kt)("p",null,"These values are provided when you create a new project within Cypress dashboard or within ",(0,i.kt)("inlineCode",{parentName:"p"},"Project settings"),"."),(0,i.kt)("h2",{id:"coverage"},"Coverage"),(0,i.kt)("p",null,"Both unit and E2E tests generate coverage respectively with Jest and NYC. These values are generated on both PR and push to ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," after merging. The service used to display the values is Codecov and can be found ",(0,i.kt)("a",{parentName:"p",href:"https://app.codecov.io/gh/rancher/dashboard"},"here"),"."),(0,i.kt)("p",null,"Special attention goes to the E2E as the code is instrumented with Babel and the configuration is set within Nuxt.js."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: To enable instrumentation required for code coverage, you must set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_INSTRUMENT")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("h2",{id:"cypress-tags-cypress-grep-plugin"},"Cypress Tags (cypress-grep plugin)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[cypress-grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep#cypressgrep)")," is a plugin that is integrated with our project to group e2e tests by adding tags to them."),(0,i.kt)("p",null,"Reasons we are grouping our tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To add test coverage for different types of users"),(0,i.kt)("li",{parentName:"ul"},"Split tests for different features"),(0,i.kt)("li",{parentName:"ul"},"Parallelization within CI"),(0,i.kt)("li",{parentName:"ul"},"In the future support sets of tests specific to the context they run in (PR CI, overnight, etc).")),(0,i.kt)("h3",{id:"e2e-with-user-role-tags"},"E2E with user role tags"),(0,i.kt)("p",null,"Tags currently in use for the roles are ",(0,i.kt)("inlineCode",{parentName:"p"},"@adminUser")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@standardUser"),"."),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"GREP_TAGS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_USERNAME")," environment variables to execute all tests which contain @admin or @standardUser tags respectively:"),(0,i.kt)("p",null,"E.g. when running locally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"GREP_TAGS=@adminUser TEST_USERNAME=admin yarn cy:run\n\nOR \n\nGREP_TAGS=@standardUser TEST_USERNAME=<standard user username> yarn cy:run\n\n")),(0,i.kt)("p",null,"More info about cypress-grep plugin can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cypress/grep#filter-with-tags"},"here"),"."),(0,i.kt)("h3",{id:"e2e-with-feature-tags"},"E2E with feature tags"),(0,i.kt)("p",null,"As part of parallelization process and identification of features, tags have been added following the file tree structure of ",(0,i.kt)("inlineCode",{parentName:"p"},"cypress/e2e/tests/pages"),".\nThese are the added specs tags for each category: ",(0,i.kt)("inlineCode",{parentName:"p"},"@navigation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@charts"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@explorer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@extensions"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@fleet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@generic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@globalSettings"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@manager"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@userMenu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@usersAndAuths"),"."),(0,i.kt)("h3",{id:"e2e-tests-parallelization-in-ci"},"E2E tests parallelization in CI"),(0,i.kt)("p",null,"Tests in CI are executed in parallel within GitHub workflow, reducing drastically time and avoiding to slow down the machine as it may happen with the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--parallel")," of Cypress, which will use and need a machine with more cores.\nThis process is achieved using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"},"job matrix")," definitions with objects where we intersect user roles and features."),(0,i.kt)("p",null,"Current matrix state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  role: [\n    { username: 'admin', tag: '@adminUser' }, \n    { username: 'standard_user', tag: '@standardUser' }\n  ]\n  features:  [\n    ['@navigation', '@extensions'],\n    ['@charts'],\n    ['@explorer'],\n    ['@fleet'],\n    ['@generic', '@globalSettings'],\n    ['@manager'],\n    ['@userMenu', '@usersAndAuths']\n  ]\n")),(0,i.kt)("p",null,"In this case the tags defined for the process will then become ",(0,i.kt)("inlineCode",{parentName:"p"},"GREP_TAGS=@adminUser+@generic"),". This means that the tests will need to have both tags to be executed.\nSome tests have been paired due GH limits of concurrent jobs and have then been defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"@adminUser+@generic @adminUser+@globalSettings"),". It means that either one of the 2 combinations which be considered as filter criteria.\nTo summarize, space between tags is considered as ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," operator, while ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," is considered as ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," operator."),(0,i.kt)("p",null,"To allow re-run of flaky tests only which may fail, the job is flagged as ",(0,i.kt)("inlineCode",{parentName:"p"},"fail-fast: false")," and will prevent to interrupt the others."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DISCLAIMER:")," It is not possible to execute multiple tests with the same ID and therefore for the temporary test initialization where we use the setup, the configuration will have extra tags such like ",(0,i.kt)("inlineCode",{parentName:"p"},"@adminUserSetup")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@standardUserSetup"),". This will be replaced with a script as planned."),(0,i.kt)("h2",{id:"cypress-utilities"},"Cypress Utilities"),(0,i.kt)("p",null,"In case of logic used within the E2E, utilities can be defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/cypress.ts")," and tested in the related file with unit tests."))}c.isMDXComponent=!0}}]);