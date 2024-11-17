"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1288],{2629:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(6070),s=t(1100);const o={sidebar_position:3},r="Migration from v2.0 to v2.1",a={id:"guides/migration/from-v2-0",title:"Migration from v2.0 to v2.1",description:"The main change in v2.1 is the new mental model for decomposing an interface \u2014 pages first.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-v2-0.md",sourceDirName:"guides/migration",slug:"/guides/migration/from-v2-0",permalink:"/kr/docs/guides/migration/from-v2-0",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-v2-0.md",tags:[],version:"current",lastUpdatedAt:1731878733e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Migration from v1 to v2",permalink:"/kr/docs/guides/migration/from-v1"},next:{title:"NextJS\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30",permalink:"/kr/docs/guides/tech/with-nextjs"}},c={},l=[{value:"How to migrate",id:"how-to-migrate",level:2},{value:"Merge slices",id:"merge-slices",level:3},{value:"Standardize cross-imports",id:"standardize-cross-imports",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"migration-from-v20-to-v21",children:"Migration from v2.0 to v2.1"})}),"\n",(0,n.jsx)(i.p,{children:"The main change in v2.1 is the new mental model for decomposing an interface \u2014 pages first."}),"\n",(0,n.jsx)(i.p,{children:"In v2.0, FSD would recommend identifying entities and features in your interface, considering even the smallest bits of entity representation and interactivity for decomposition. Then you would build widgets and pages from entities and features. In this model of decomposition, most of the logic was in entities and features, and pages were just compositional layers that didn't have much significance on their own."}),"\n",(0,n.jsx)(i.p,{children:"In v2.1, we recommend starting with pages, and possibly even stopping there. Most people already know how to separate the app into individual pages, and pages are also a common starting point when trying to locate a component in the codebase. In this new model of decomposition, you keep most of the UI and logic in each individual page, maintaining a reusable foundation in Shared. If a need arises to reuse business logic across several pages, you can move it to a layer below."}),"\n",(0,n.jsxs)(i.p,{children:["Another addition to Feature-Sliced Design is the standardization of cross-imports between entities with the ",(0,n.jsx)(i.code,{children:"@x"}),"-notation."]}),"\n",(0,n.jsx)(i.h2,{id:"how-to-migrate",children:"How to migrate"}),"\n",(0,n.jsx)(i.p,{children:"There are no breaking changes in v2.1, which means that a project written with FSD v2.0 is also a valid project in FSD v2.1. However, we believe that the new mental model is more beneficial for teams and especially onboarding new developers, so we recommend making minor adjustments to your decomposition."}),"\n",(0,n.jsx)(i.h3,{id:"merge-slices",children:"Merge slices"}),"\n",(0,n.jsxs)(i.p,{children:["A simple way to start is by running our linter, ",(0,n.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger",children:"Steiger"}),", on the project. Steiger is built with the new mental model, and the most helpful rules will be:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger/tree/master/packages/steiger-plugin-fsd/src/insignificant-slice",children:(0,n.jsx)(i.code,{children:"insignificant-slice"})})," \u2014 if an entity or feature is only used in one page, this rule will suggest merging that entity or feature into the page entirely."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger/tree/master/packages/steiger-plugin-fsd/src/excessive-slicing",children:(0,n.jsx)(i.code,{children:"excessive-slicing"})})," \u2014 if a layer has too many slices, it's usually a sign that the decomposition is too fine-grained. This rule will suggest merging or grouping some slices to help project navigation."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"npx steiger src\n"})}),"\n",(0,n.jsx)(i.p,{children:"This will help you identify which slices are only used once, so that you could reconsider if they are really necessary. In such considerations, keep in mind that a layer forms some kind of global namespace for all the slices inside of it. Just as you wouldn't pollute the global namespace with variables that are only used once, you should treat a place in the namespace of a layer as valuable, to be used sparingly."}),"\n",(0,n.jsx)(i.h3,{id:"standardize-cross-imports",children:"Standardize cross-imports"}),"\n",(0,n.jsxs)(i.p,{children:["If you had cross-imports between in your project before (we don't judge!), you may now take advantage of a new notation for cross-importing in Feature-Sliced Design \u2014 the ",(0,n.jsx)(i.code,{children:"@x"}),"-notation. It looks like this:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",metastring:'title="entities/B/some/file.ts"',children:'import type { EntityA } from "entities/A/@x/B";\n'})}),"\n",(0,n.jsxs)(i.p,{children:["For more details, check out the ",(0,n.jsx)(i.a,{href:"/docs/reference/public-api#public-api-for-cross-imports",children:"Public API for cross-imports"})," section in the reference."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1100:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(758);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);