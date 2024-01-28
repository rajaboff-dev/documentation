"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3542],{6229:(e,n,i)=>{i.d(n,{ZP:()=>d});var t=i(1527),r=i(6736),s=(i(959),i(646)),l=i(7022);const c=e=>{let{ticket:n}=e;const i=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,l.I)({id:"shared.wip.title"})}),(0,t.jsx)("p",{children:(0,l.I)({id:"shared.wip.subtitle"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,l.I)({id:"shared.wip.var.feedback.base"}),(0,t.jsx)(s.Z,{to:i,children:(0,l.I)({id:"shared.wip.var.feedback.link"})})]}),(0,t.jsxs)("li",{children:[(0,l.I)({id:"shared.wip.var.material.base"}),(0,t.jsx)(s.Z,{to:"https://t.me/feature_sliced",children:(0,l.I)({id:"shared.wip.var.material.link"})})]}),(0,t.jsxs)("li",{children:[(0,l.I)({id:"shared.wip.var.contribute.base"}),(0,t.jsx)(s.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,l.I)({id:"shared.wip.var.contribute.link"})})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})};function a(e){const n={admonition:"admonition",...(0,r.ah)(),...e.components};return(0,t.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,t.jsx)(c,{ticket:e.ticket})})}function d(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5900:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=i(1527),r=i(6736),s=i(6229);const l={sidebar_class_name:"sidebar-item--wip",sidebar_position:3},c="\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b",a={id:"about/alternatives",title:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b",description:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/about/alternatives.mdx",sourceDirName:"about",slug:"/about/alternatives",permalink:"/ru/docs/about/alternatives",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/about/alternatives.mdx",tags:[],version:"current",lastUpdatedAt:1706471891,formattedLastUpdatedAt:"28 \u044f\u043d\u0432. 2024 \u0433.",sidebarPosition:3,frontMatter:{sidebar_class_name:"sidebar-item--wip",sidebar_position:3},sidebar:"aboutSidebar",previous:{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",permalink:"/ru/docs/about/motivation"},next:{title:"\u041e\u0431 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435",permalink:"/ru/docs/about/understanding/architecture"}},d={},o=[{value:"Big Ball of Mud",id:"big-ball-of-mud",level:2},{value:"Smart &amp; Dumb components",id:"smart--dumb-components",level:2},{value:"Design Principles",id:"design-principles",level:2},{value:"DDD",id:"ddd",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2},{value:"Clean Architecture",id:"clean-architecture",level:2},{value:"Frameworks",id:"frameworks",level:2},{value:"Atomic Design",id:"atomic-design",level:2},{value:"Feature Driven",id:"feature-driven",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b",children:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b"}),"\n",(0,t.jsx)(s.ZP,{ticket:"62"}),"\n",(0,t.jsx)(n.p,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432"}),"\n",(0,t.jsx)(n.h2,{id:"big-ball-of-mud",children:"Big Ball of Mud"}),"\n",(0,t.jsx)(s.ZP,{ticket:"258"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u0427\u0442\u043e \u044d\u0442\u043e; \u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043e; \u041a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b; \u041a\u0430\u043a \u0431\u044b\u0442\u044c; \u0418 \u043a\u0430\u043a \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0432 \u044d\u0442\u043e\u043c FSD"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://oleg008.medium.com/last-words-on-ui-architecture-before-an-ai-takes-over-468c78f18f0d",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) Oleg Isonen - Last words on UI architecture before an AI takes over"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/gna4Ynz1YNI",children:"(\u0414\u043e\u043a\u043b\u0430\u0434) \u042e\u043b\u0438\u044f \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0430, iSpring - Big Ball of Mud \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043c\u043e\u043d\u043e\u043b\u0438\u0442\u0430, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043c\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0438\u0441\u044c"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://thedomaindrivendesign.io/big-ball-of-mud/",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) DDD - Big Ball of mud"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"smart--dumb-components",children:"Smart & Dumb components"}),"\n",(0,t.jsx)(s.ZP,{ticket:"214"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435; \u041e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435; \u043f\u043e\u0437\u0438\u0446\u0438\u044f FSD"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u041f\u0440\u043e \u0443\u0441\u0442\u0430\u0440\u0435\u043b\u043e\u0441\u0442\u044c, \u043f\u0440\u043e \u043d\u043e\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"}),"\n",(0,t.jsx)(n.p,{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043d\u043e/\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 - \u0437\u043b\u043e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) Dan Abramov - Presentational and Container Components (TLDR: deprecated)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"design-principles",children:"Design Principles"}),"\n",(0,t.jsx)(s.ZP,{ticket:"59"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041f\u0440\u043e \u0447\u0442\u043e \u0440\u0435\u0447\u044c; \u043f\u043e\u0437\u0438\u0446\u0438\u044f FSD"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"SOLID, GRASP, KISS, YAGNI, ... - \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0438 \u043f\u043b\u043e\u0445\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432\u043c\u0435\u0441\u0442\u0435 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0418 \u043a\u0430\u043a \u043e\u043d\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u0442 \u044d\u0442\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/SnzPAr_FJ7w?t=380",children:"(\u0414\u043e\u043a\u043b\u0430\u0434) \u0418\u043b\u044c\u044f \u0410\u0437\u0438\u043d - Feature-Sliced Design (\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043f\u0440\u043e \u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ddd",children:"DDD"}),"\n",(0,t.jsx)(s.ZP,{ticket:"1"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435; \u041f\u043e\u0447\u0435\u043c\u0443 \u043f\u043b\u043e\u0445\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u0412 \u0447\u0435\u043c \u043e\u0442\u043b\u0438\u0447\u0438\u0435, \u0447\u0435\u043c \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c, \u0433\u0434\u0435 \u043f\u0435\u0440\u0435\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438"}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) DDD, Hexagonal, Onion, Clean, CQRS, \u2026 How I put it all together"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/SnzPAr_FJ7w?t=528",children:"(\u0414\u043e\u043a\u043b\u0430\u0434) \u0418\u043b\u044c\u044f \u0410\u0437\u0438\u043d - Feature-Sliced Design (\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043f\u0440\u043e Clean Architecture, DDD)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"clean-architecture",children:"Clean Architecture"}),"\n",(0,t.jsx)(s.ZP,{ticket:"165"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435; \u041e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435; \u043f\u043e\u0437\u0438\u0446\u0438\u044f FSD"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u0412 \u0447\u0435\u043c \u0441\u0445\u043e\u0436\u0438 (\u043c\u043d\u043e\u0433\u0438\u043c), \u0447\u0435\u043c \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/3897",children:"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e use-case/interactor \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/4592",children:"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e DI \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://bespoyasov.ru/blog/clean-architecture-on-frontend/",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0411\u0435\u0441\u043f\u043e\u044f\u0441\u043e\u0432 - \u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043d\u0430 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) DDD, Hexagonal, Onion, Clean, CQRS, \u2026 How I put it all together"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/SnzPAr_FJ7w?t=528",children:"(\u0414\u043e\u043a\u043b\u0430\u0434) \u0418\u043b\u044c\u044f \u0410\u0437\u0438\u043d - Feature-Sliced Design (\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043f\u0440\u043e Clean Architecture, DDD)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://habr.com/ru/company/mobileup/blog/335382/",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) \u0417\u0430\u0431\u043b\u0443\u0436\u0434\u0435\u043d\u0438\u044f Clean Architecture"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"frameworks",children:"Frameworks"}),"\n",(0,t.jsx)(s.ZP,{ticket:"58"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435; \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0438 \u043d\u0435 \u0440\u0435\u0448\u0430\u044e\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443; \u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u043d\u0435 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434; \u043f\u043e\u0437\u0438\u0446\u0438\u044f FSD"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Framework-agnostic, conventional-\u043f\u043e\u0434\u0445\u043e\u0434"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/about/motivation",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) \u041f\u0440\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 (\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043f\u0440\u043e \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0438)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/3867",children:"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"atomic-design",children:"Atomic Design"}),"\n",(0,t.jsx)(s.ZP,{ticket:"204"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435; \u041e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435; \u043f\u043e\u0437\u0438\u0446\u0438\u044f FSD"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u041f\u0440\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c, \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0441\u043a\u043e\u0443\u043f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0435\u0432"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://atomicdesign.bradfrost.com/table-of-contents/",children:"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f Atomic Design"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/1653",children:"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c \u0432 shared/ui"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/Yi-A20x2dcA",children:"(\u0412\u0438\u0434\u0435\u043e) \u041a\u0440\u0430\u0442\u043a\u043e \u043e Atomic Design"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/SnzPAr_FJ7w?t=587",children:"(\u0414\u043e\u043a\u043b\u0430\u0434) \u0418\u043b\u044c\u044f \u0410\u0437\u0438\u043d - Feature-Sliced Design (\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043f\u0440\u043e Atomic Design)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"feature-driven",children:"Feature Driven"}),"\n",(0,t.jsx)(s.ZP,{ticket:"219"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435; \u041e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435; \u043f\u043e\u0437\u0438\u0446\u0438\u044f FSD"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u041f\u0440\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c, \u0438\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/BWAeYuWFHhs",children:"(\u0414\u043e\u043a\u043b\u0430\u0434) Oleg Isonen - Feature Driven Architecture"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/tree/rc/feature-driven",children:"Feature Driven - \u041a\u0440\u0430\u0442\u043a\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f (\u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f FSD)"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6736:(e,n,i)=>{i.d(n,{ah:()=>s});var t=i(959);const r=t.createContext({});function s(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);