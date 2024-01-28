"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1144],{312:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(1527),t=s(6736);const r={sidebar_position:1},o="Overview",a={id:"get-started/overview",title:"Overview",description:"Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/overview.md",sourceDirName:"get-started",slug:"/get-started/overview",permalink:"/docs/get-started/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/get-started/overview.md",tags:[],version:"current",lastUpdatedAt:1706471891,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"getstartedSidebar",previous:{title:"\ud83d\ude80 Get Started",permalink:"/docs/get-started/"},next:{title:"Tutorial",permalink:"/docs/get-started/tutorial"}},c={},l=[{value:"Is it right for me?",id:"is-it-right-for-me",level:2},{value:"Basics",id:"basics",level:2},{value:"Example",id:"example",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Incremental adoption",id:"incremental-adoption",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Feature-Sliced Design"})," (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements."]}),"\n",(0,i.jsx)(n.h2,{id:"is-it-right-for-me",children:"Is it right for me?"}),"\n",(0,i.jsx)(n.p,{children:"FSD can be implemented in projects and teams of any size, but there are a few things to keep in mind:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This methodology is for front-end projects only. If you're looking for a back-end architecture, consider ",(0,i.jsx)(n.a,{href:"https://medium.com/codex/clean-architecture-for-dummies-df6561d42c94",children:"Clean Architecture"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["This methodology is for user-facing applications only, not for libraries or UI kits. If you're looking for an architecture for a UI kit, see ",(0,i.jsx)(n.a,{href:"https://github.com/mui/material-ui",children:"Material UI"})," for inspiration."]}),"\n",(0,i.jsx)(n.li,{children:"A very simple app of a single page might not need the benefits of FSD and suffer from the overhead. However, FSD promotes a nice way of thinking, so feel free to use it on the tiniest projects if you want."}),"\n",(0,i.jsx)(n.li,{children:"A huge app, the size of the Google Cloud admin dashboard, will require a custom architecture. It could still be based on FSD, by the way."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["FSD doesn't enforce a particular programming language, UI framework or state manager \u2014 bring your own or see some ",(0,i.jsx)(n.a,{href:"/examples",children:"examples"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have an existing project, fear not \u2014 FSD can be adopted incrementally. Just make sure that your team is ",(0,i.jsx)(n.strong,{children:"in\xa0pain"})," from the current architecture, otherwise a switch might not be worth it. For migration guidance, see the ",(0,i.jsx)(n.a,{href:"/docs/guides/migration",children:"Migration section"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,i.jsxs)(n.p,{children:["In FSD, a project consists of ",(0,i.jsx)("mark",{children:"layers"}),", each layer is made up of ",(0,i.jsx)("mark",{children:"slices"})," and each slice is made up of ",(0,i.jsx)("mark",{children:"segments"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"themed--scheme",src:s(6162).Z+"",width:"1355",height:"754"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"layers"})," are standardized across all projects and vertically arranged. Modules on one layer can only interact with modules from the layers strictly below. There are currently seven of them (bottom to top):"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"shared"})," \u2014 reusable functionality, detached from the specifics of the project/business.\n",(0,i.jsx)("small",{children:"(e.g. UIKit, libs, API)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entities"})," \u2014 business entities.\n",(0,i.jsx)("small",{children:"(e.g., User, Product, Order)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"features"})," \u2014 user interactions, actions that bring business value to the user.\n",(0,i.jsx)("small",{children:"(e.g. SendComment, AddToCart, UsersSearch)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"widgets"})," \u2014 compositional layer to combine entities and features into meaningful blocks.\n",(0,i.jsx)("small",{children:"(e.g. IssuesList, UserProfile)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pages"})," \u2014 compositional layer to construct full pages from entities, features and widgets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"processes"})," (deprecated) \u2014 complex inter-page scenarios.\n",(0,i.jsx)("small",{children:"(e.g., authentication)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"app"})," \u2014 app-wide settings, styles and providers."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Then there are ",(0,i.jsx)(n.strong,{children:"slices"}),", which partition the code by business domain. This makes your codebase easy to navigate by keeping logically related modules close together. Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling."]}),"\n",(0,i.jsxs)(n.p,{children:["Each slice, in turn, consists of ",(0,i.jsx)(n.strong,{children:"segments"}),". These are tiny modules that are meant to help with separating code within a slice by its technical purpose. The most common segments are ",(0,i.jsx)(n.code,{children:"ui"}),", ",(0,i.jsx)(n.code,{children:"model"})," (store,  actions), ",(0,i.jsx)(n.code,{children:"api"})," and ",(0,i.jsx)(n.code,{children:"lib"})," (utils/hooks), but you can omit some or add more, as you see fit."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In most cases, ",(0,i.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/66",children:"it is recommended"})," to place ",(0,i.jsx)(n.code,{children:"api"})," and ",(0,i.jsx)(n.code,{children:"config"})," only in the shared layer, unless your API client is also your storage (GraphQL, TanStack Query, etc.)"]})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Let's consider a social network application."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"app/"})," contains setup of routing, store and global styles."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pages/"})," contains the route components for each page in the app, mostly composition, hardly any logic."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Within that application, let's consider a post card in a news feed."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"widgets/"}),' contains the "assembled" post card, with content and interactive buttons that are wired up to the relevant calls on the back-end.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"features/"})," contains the interactivity of the card (e.g., like button) and the logic of processing those interactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entities/"})," contains the shell of the card with slots for content and the interactive elements. The tile representing the post author is also here, but in a different slice."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"advantages",children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Uniformity"}),(0,i.jsx)(n.br,{}),"\n","The code is organized by scope of influence (layers), by domain (slices), and by technical purpose (segments).",(0,i.jsx)(n.br,{}),"\n","This creates a standardized architecture that is easy to comprehend for newcomers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Controlled reuse of logic"}),(0,i.jsx)(n.br,{}),"\n","Each architectural component has its purpose and predictable dependencies.",(0,i.jsx)(n.br,{}),"\n","This keeps a balance between following the ",(0,i.jsx)(n.strong,{children:"DRY"})," principle and adaptation possibilities."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Stability in face of changes and refactoring"}),(0,i.jsx)(n.br,{}),"\n","A module on a particular layer cannot use other modules on the same layer, or the layers above.",(0,i.jsx)(n.br,{}),"\n","This enables isolated modifications without unforeseen consequences."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Orientation to business and users needs"}),(0,i.jsx)(n.br,{}),"\n","When the app is split into business domains, you can navigate the code to discover and deeper understand all the project features."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"incremental-adoption",children:"Incremental adoption"}),"\n",(0,i.jsxs)(n.p,{children:["The power of FSD lies in ",(0,i.jsx)(n.em,{children:"structured"})," decomposition. At its finest, it enables to locate any part of code near-deterministically. However, the level of decomposition is a parameter, and each team can tweak it to strike a balance between simple adoption and the amount of benefits."]}),"\n",(0,i.jsx)(n.p,{children:"Here's a proposed strategy to migrate an existing codebase to FSD, based on experience:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Start by outlining the ",(0,i.jsx)(n.code,{children:"app"})," and ",(0,i.jsx)(n.code,{children:"shared"})," layers to create a foundation. Usually, these layers are the smallest."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Distribute all of the existing UI across ",(0,i.jsx)(n.code,{children:"widgets"})," and ",(0,i.jsx)(n.code,{children:"pages"}),", even if they have dependencies that violate the rules of FSD."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Start gradually increasing the precision of decomposition by separating ",(0,i.jsx)(n.code,{children:"features"})," and ",(0,i.jsx)(n.code,{children:"entities"}),", turning pages and widgets from logic-bearing layers into purely compositional layers."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It's advised to refrain from adding new large entities while refactoring or refactoring only certain parts of the project."})]})}function h(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6162:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg"},6736:(e,n,s)=>{s.d(n,{ah:()=>r});var i=s(959);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);