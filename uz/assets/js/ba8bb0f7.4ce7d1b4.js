"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3906],{5936:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=i(1527),o=i(6736);const r={sidebar_position:20,pagination_next:"guides/index"},a="FAQ",s={id:"get-started/faq",title:"FAQ",description:"You can ask your question in our Telegram chat, Discord community, and GitHub Discussions.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",sourceDirName:"get-started",slug:"/get-started/faq",permalink:"/uz/docs/get-started/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",tags:[],version:"current",lastUpdatedAt:1706471891,formattedLastUpdatedAt:"28-yan, 2024",sidebarPosition:20,frontMatter:{sidebar_position:20,pagination_next:"guides/index"},sidebar:"getstartedSidebar",previous:{title:"Tutorial",permalink:"/uz/docs/get-started/tutorial"},next:{title:"\ud83c\udfaf Guides",permalink:"/uz/docs/guides/"}},d={},h=[{value:"Is there a toolkit or a linter?",id:"is-there-a-toolkit-or-a-linter",level:3},{value:"Where to store the layout/template of pages?",id:"where-to-store-the-layouttemplate-of-pages",level:3},{value:"What is the difference between a feature and an entity?",id:"what-is-the-difference-between-a-feature-and-an-entity",level:3},{value:"Can I embed pages/features/entities into each other?",id:"can-i-embed-pagesfeaturesentities-into-each-other",level:3},{value:"What about Atomic Design?",id:"what-about-atomic-design",level:3},{value:"Are there any useful resources/articles/etc. about FSD?",id:"are-there-any-useful-resourcesarticlesetc-about-fsd",level:3},{value:"Why do I need Feature-Sliced Design?",id:"why-do-i-need-feature-sliced-design",level:3},{value:"Does a novice developer need an architecture/methodology?",id:"does-a-novice-developer-need-an-architecturemethodology",level:3},{value:"How do I work with the authorization context?",id:"how-do-i-work-with-the-authorization-context",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can ask your question in our ",(0,n.jsx)(t.a,{href:"https://t.me/feature_sliced",children:"Telegram chat"}),", ",(0,n.jsx)(t.a,{href:"https://discord.gg/S8MzWTUsmp",children:"Discord community"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/feature-sliced/documentation/discussions",children:"GitHub Discussions"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"is-there-a-toolkit-or-a-linter",children:"Is there a toolkit or a linter?"}),"\n",(0,n.jsxs)(t.p,{children:["There is an official ESLint config \u2014 ",(0,n.jsx)(t.a,{href:"https://github.com/feature-sliced/eslint-config",children:"@feature-sliced/eslint-config"}),", and an ESLint plugin \u2014 ",(0,n.jsx)(t.a,{href:"https://github.com/conarti/eslint-plugin-feature-sliced",children:"@conarti/eslint-plugin-feature-sliced"}),", created by Aleksandr Belous, a community member. You're welcome to contribute to these projects or start your own!"]}),"\n",(0,n.jsx)(t.h3,{id:"where-to-store-the-layouttemplate-of-pages",children:"Where to store the layout/template of pages?"}),"\n",(0,n.jsxs)(t.p,{children:["If you need plain markup layouts, you can keep them in ",(0,n.jsx)(t.code,{children:"shared/ui"}),". If you need to use higher layers inside, there are a few options:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Perhaps you don't need layouts at all? If the layout is only a few lines, it might be reasonable to duplicate the code in each page rather than try to abstract it."}),"\n",(0,n.jsx)(t.li,{children:"If you do need layouts, you can have them as separate widgets or pages, and compose them in your router configuration in App. Nested routing is another option."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"what-is-the-difference-between-a-feature-and-an-entity",children:"What is the difference between a feature and an entity?"}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.em,{children:"entity"})," is a real-life concept that your app is working with. A ",(0,n.jsx)(t.em,{children:"feature"})," is an nteraction that provides real-life value to\xa0your app\u2019s users, the thing people want to do with your entities."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, along with examples, see the Reference page on ",(0,n.jsx)(t.a,{href:"/docs/reference/layers#entities",children:"slices"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"can-i-embed-pagesfeaturesentities-into-each-other",children:"Can I embed pages/features/entities into each other?"}),"\n",(0,n.jsx)(t.p,{children:"Yes, but this embedding should happen in higher layers. For example, inside a widget, you can import both features and then insert one feature into another as props/children."}),"\n",(0,n.jsxs)(t.p,{children:["You cannot import one feature from another feature, this is prohibited by the ",(0,n.jsx)(t.a,{href:"/docs/reference/layers#import-rule-on-layers",children:(0,n.jsx)(t.strong,{children:"import rule on layers"})}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"what-about-atomic-design",children:"What about Atomic Design?"}),"\n",(0,n.jsx)(t.p,{children:"The current version of the methodology does not require nor prohibit the use of Atomic Design together with Feature-Sliced Design."}),"\n",(0,n.jsxs)(t.p,{children:["For example, Atomic Design ",(0,n.jsx)(t.a,{href:"https://t.me/feature_sliced/1653",children:"can be applied well"})," for the ",(0,n.jsx)(t.code,{children:"ui"})," segment of modules."]}),"\n",(0,n.jsx)(t.h3,{id:"are-there-any-useful-resourcesarticlesetc-about-fsd",children:"Are there any useful resources/articles/etc. about FSD?"}),"\n",(0,n.jsxs)(t.p,{children:["Yes! ",(0,n.jsx)(t.a,{href:"https://github.com/feature-sliced/awesome",children:"https://github.com/feature-sliced/awesome"})]}),"\n",(0,n.jsx)(t.h3,{id:"why-do-i-need-feature-sliced-design",children:"Why do I need Feature-Sliced Design?"}),"\n",(0,n.jsxs)(t.p,{children:["It helps you and your team to quickly overview the project in terms of its main value-bringing components. A standardized architecture helps to speed up onboarding and resolves debates about code structure. See the ",(0,n.jsx)(t.a,{href:"/docs/about/motivation",children:"motivation"})," page to learn more about why FSD was created."]}),"\n",(0,n.jsx)(t.h3,{id:"does-a-novice-developer-need-an-architecturemethodology",children:"Does a novice developer need an architecture/methodology?"}),"\n",(0,n.jsx)(t.p,{children:"Rather yes than no"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Usually, when you design and develop a project in one person, everything goes smoothly. But if there are pauses in development, new developers are added to the team - then problems come"})}),"\n",(0,n.jsx)(t.h3,{id:"how-do-i-work-with-the-authorization-context",children:"How do I work with the authorization context?"}),"\n",(0,n.jsxs)(t.p,{children:["Answered ",(0,n.jsx)(t.a,{href:"/docs/guides/examples/auth",children:"here"})]})]})}function c(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},6736:(e,t,i)=>{i.d(t,{ah:()=>r});var n=i(959);const o=n.createContext({});function r(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);