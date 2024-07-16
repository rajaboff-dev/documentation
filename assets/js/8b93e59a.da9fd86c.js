"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[6813],{4557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(6070),o=n(7468);const s={sidebar_position:1},a="Authentication",r={id:"guides/examples/auth",title:"Authentication",description:"Broadly, authentication consists of the following steps:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/auth.md",sourceDirName:"guides/examples",slug:"/guides/examples/auth",permalink:"/docs/guides/examples/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/auth.md",tags:[],version:"current",lastUpdatedAt:1721136156e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Examples",permalink:"/docs/guides/examples/"},next:{title:"PageLayout",permalink:"/docs/guides/examples/page-layout"}},l={},h=[{value:"How to get credentials from the user",id:"how-to-get-credentials-from-the-user",level:2},{value:"Dedicated page for login",id:"dedicated-page-for-login",level:3},{value:"Dialog for login",id:"dialog-for-login",level:3},{value:"Client-side validation",id:"client-side-validation",level:3},{value:"How to send credentials to the backend",id:"how-to-send-credentials-to-the-backend",level:2},{value:"Where to store the request function",id:"where-to-store-the-request-function",level:3},{value:"In <code>shared/api</code>",id:"in-sharedapi",level:4},{value:"In the <code>api</code> segment of the page",id:"in-the-api-segment-of-the-page",level:4},{value:"Two-factor authentication",id:"two-factor-authentication",level:3},{value:"How to store the token for authenticated requests",id:"how-to-store-the-token-for-authenticated-requests",level:2},{value:"In Shared",id:"in-shared",level:3},{value:"In Entities",id:"in-entities",level:3},{value:"In Pages/Widgets (not recommended)",id:"in-pageswidgets-not-recommended",level:3},{value:"Logout and token invalidation",id:"logout-and-token-invalidation",level:2},{value:"Automatic logout",id:"automatic-logout",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(t.p,{children:"Broadly, authentication consists of the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Get the credentials from the user"}),"\n",(0,i.jsx)(t.li,{children:"Send them to the backend"}),"\n",(0,i.jsx)(t.li,{children:"Store the token to make authenticated requests"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-get-credentials-from-the-user",children:"How to get credentials from the user"}),"\n",(0,i.jsxs)(t.p,{children:["We are assuming that your app is responsible for getting credentials. If you have authentication via OAuth, you can simply create a login page with a link to the OAuth provider's login page and skip to ",(0,i.jsx)(t.a,{href:"#how-to-store-the-token-for-authenticated-requests",children:"step 3"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"dedicated-page-for-login",children:"Dedicated page for login"}),"\n",(0,i.jsx)(t.p,{children:"Usually, websites have dedicated pages for login, where you enter your username and password. These pages are quite simple, so they don't require decomposition. Login and registration forms are quite similar in appearance, so they can even be grouped into one page. Create a slice for your login/registration page on the Pages layer:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 pages","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 login","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 ui","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 LoginPage.tsx (or your framework's component file format)"}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 RegisterPage.tsx"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 index.ts"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"other pages\u2026"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Here we created two components and exported them both in the index file of the slice. These components will contain forms that are responsible for presenting the user with understandable controls to get their credentials."}),"\n",(0,i.jsx)(t.h3,{id:"dialog-for-login",children:"Dialog for login"}),"\n",(0,i.jsx)(t.p,{children:"If your app has a dialog for login that can be used on any page, consider making that dialog a widget. That way, you can still avoid too much decomposition, but have the freedom to reuse this dialog on any page."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 widgets","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 login-dialog","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 ui","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 LoginDialog.tsx"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 index.ts"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"other widgets\u2026"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The rest of this guide is written for the dedicated page approach, but the same principles apply to the dialog widget."}),"\n",(0,i.jsx)(t.h3,{id:"client-side-validation",children:"Client-side validation"}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes, especially for registration, it makes sense to perform client-side validation to let the user know quickly that they made a mistake. Validation can take place in the ",(0,i.jsx)(t.code,{children:"model"})," segment of the login page. Use a schema validation library, for example, ",(0,i.jsx)(t.a,{href:"https://zod.dev",children:"Zod"})," for JS/TS, and expose that schema to the ",(0,i.jsx)(t.code,{children:"ui"})," segment:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="pages/login/model/registration-schema.ts"',children:'import { z } from "zod";\n\nexport const registrationData = z.object({\n    email: z.string().email(),\n    password: z.string().min(6),\n    confirmPassword: z.string(),\n}).refine((data) => data.password === data.confirmPassword, {\n    message: "Passwords do not match",\n    path: ["confirmPassword"],\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Then, in the ",(0,i.jsx)(t.code,{children:"ui"})," segment, you can use this schema to validate the user input:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="pages/login/ui/RegisterPage.tsx"',children:'import { registrationData } from "../model/registration-schema";\n\nfunction validate(formData: FormData) {\n    const data = Object.fromEntries(formData.entries());\n    try {\n        registrationData.parse(data);\n    } catch (error) {\n        // TODO: Show error message to the user\n    }\n}\n\nexport function RegisterPage() {\n    return (\n        <form onSubmit={(e) => validate(new FormData(e.target))}>\n            <label htmlFor="email">E-mail</label>\n            <input id="email" name="email" required />\n\n            <label htmlFor="password">Password (min. 6 characters)</label>\n            <input id="password" name="password" type="password" required />\n\n            <label htmlFor="confirmPassword">Confirm password</label>\n            <input id="confirmPassword" name="confirmPassword" type="password" required />\n        </form>\n    )\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-send-credentials-to-the-backend",children:"How to send credentials to the backend"}),"\n",(0,i.jsx)(t.p,{children:"Create a function that makes a request to your backend's login endpoint. This function can either be called directly in the component code using a mutation library (e.g. TanStack Query), or it can be called as a side effect in a state manager."}),"\n",(0,i.jsx)(t.h3,{id:"where-to-store-the-request-function",children:"Where to store the request function"}),"\n",(0,i.jsxs)(t.p,{children:["There are two places you can put this function: in ",(0,i.jsx)(t.code,{children:"shared/api"}),", or in the ",(0,i.jsx)(t.code,{children:"api"})," segment of the page."]}),"\n",(0,i.jsxs)(t.h4,{id:"in-sharedapi",children:["In ",(0,i.jsx)(t.code,{children:"shared/api"})]}),"\n",(0,i.jsxs)(t.p,{children:["This approach goes well with when you put all your API requests in ",(0,i.jsx)(t.code,{children:"shared/api"}),", grouped by endpoint, for example. The file structure might look like this:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 shared","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 api","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 endpoints","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 login.ts"}),"\n",(0,i.jsx)(t.li,{children:"other endpoint functions\u2026"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 client.ts"}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 index.ts"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"\ud83d\udcc4 client.ts"})," file contains a wrapper around your request-making primitive (for example, ",(0,i.jsx)(t.code,{children:"fetch()"}),"). This wrapper would know about the base URL of your backend, set necessary headers, serialize data correctly, etc."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="shared/api/endpoints/login.ts"',children:'import { POST } from "../client";\n\nexport function login({ email, password }: { email: string, password: string }) {\n    return POST("/login", { email, password });\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="shared/api/index.ts"',children:'export { login } from "./endpoints/login";\n'})}),"\n",(0,i.jsxs)(t.h4,{id:"in-the-api-segment-of-the-page",children:["In the ",(0,i.jsx)(t.code,{children:"api"})," segment of the page"]}),"\n",(0,i.jsxs)(t.p,{children:["If you don't keep all your requests in one place, consider stashing the login request in the ",(0,i.jsx)(t.code,{children:"api"})," segment of the login page."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 pages","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 login","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 api","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 login.ts"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\ud83d\udcc2 ui","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 LoginPage.tsx"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"\ud83d\udcc4 index.ts"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"other pages\u2026"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="pages/login/api/login.ts"',children:'import { POST } from "shared/api";\n\nexport function login({ email, password }: { email: string, password: string }) {\n    return POST("/login", { email, password });\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You don't have to export the ",(0,i.jsx)(t.code,{children:"login()"})," function in the page's public API, because it's unlikely that any other place in the app will need this request."]}),"\n",(0,i.jsx)(t.h3,{id:"two-factor-authentication",children:"Two-factor authentication"}),"\n",(0,i.jsxs)(t.p,{children:["If your app supports two-factor authentication (2FA), you might have to redirect to another page where a user can enter a one-time password. Usually your ",(0,i.jsx)(t.code,{children:"POST /login"})," request would return the user object with a flag indicating that the user has 2FA enabled. If that flag is set, redirect the user to the 2FA page."]}),"\n",(0,i.jsxs)(t.p,{children:["Since this page is very related to logging in, you can also keep it in the same slice, ",(0,i.jsx)(t.code,{children:"login"})," on the Pages layer."]}),"\n",(0,i.jsxs)(t.p,{children:["You would also need another request function, similar to ",(0,i.jsx)(t.code,{children:"login()"})," that we created above. Place them together, either in Shared, or in the ",(0,i.jsx)(t.code,{children:"api"})," segment of the ",(0,i.jsx)(t.code,{children:"login"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-store-the-token-for-authenticated-requests",children:"How to store the token for authenticated requests"}),"\n",(0,i.jsx)(t.p,{children:"Regardless of the authentication scheme you have, be it a simple login & password, OAuth, or two-factor authentication, at the end you will receive a token. This token should be stored so that subsequent requests can identify themselves."}),"\n",(0,i.jsxs)(t.p,{children:["The ideal token storage for a web app is a ",(0,i.jsx)(t.strong,{children:"cookie"})," \u2014 it requires no manual token storage or handling. As such, cookie storage needs almost no consideration from the frontend architecture side. If your frontend framework has a server side (for example, ",(0,i.jsx)(t.a,{href:"https://remix.run",children:"Remix"}),"), then you should store the server-side cookie infrastructure in ",(0,i.jsx)(t.code,{children:"shared/api"}),". There is an example in ",(0,i.jsx)(t.a,{href:"/docs/get-started/tutorial#authentication",children:"the Authentication section of the tutorial"})," of how to do that with Remix."]}),"\n",(0,i.jsx)(t.p,{children:"Sometimes, however, cookie storage is not an option. In this case, you will have to store the token manually. Apart from storing the token, you may also need to set up logic for refreshing your token when it expires. With FSD, there are several places where you can store the token, as well as several ways to make it available for the rest of the app."}),"\n",(0,i.jsx)(t.h3,{id:"in-shared",children:"In Shared"}),"\n",(0,i.jsxs)(t.p,{children:["This approach plays well with an API client defined in ",(0,i.jsx)(t.code,{children:"shared/api"})," because the token is freely available for other request functions that require authentication to succeed. You can make the API client hold state, either with a reactive store or simply a module-level variable, and update that state in your ",(0,i.jsx)(t.code,{children:"login()"}),"/",(0,i.jsx)(t.code,{children:"logout()"})," functions."]}),"\n",(0,i.jsx)(t.p,{children:"Automatic token refresh can be implemented as a middleware in the API client \u2014 something that can execute every time you make any request. It can work like this:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Authenticate and store the access token as well as the refresh token"}),"\n",(0,i.jsx)(t.li,{children:"Make any request that requires authentication"}),"\n",(0,i.jsx)(t.li,{children:"If the request fails with a status code that indicates token expiration, and there is a token in the store, make a refresh request, store the new tokens, and retry the original request"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["One of the drawbacks of this approach is that the logic of managing and refreshing the token doesn't have a dedicated place. This can be fine for some apps or teams, but if the token management logic is more complex, it may be preferable to separate responsibilities of making requests and managing tokens. You can do that by keeping your requests and API client in ",(0,i.jsx)(t.code,{children:"shared/api"}),", but the token store and management logic in ",(0,i.jsx)(t.code,{children:"shared/auth"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Another drawback of this approach is that if your backend returns an object of your current user's information along with the token, you have to store that somewhere or discard that information and request it again from an endpoint like ",(0,i.jsx)(t.code,{children:"/me"})," or ",(0,i.jsx)(t.code,{children:"/users/current"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"in-entities",children:"In Entities"}),"\n",(0,i.jsx)(t.p,{children:"It's common for FSD projects to have an entity for a user and/or an entity for the current user. It can even be the same entity for both."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"current user"}),' is also sometimes called "viewer" or "me". This is to distinguish the single authenticated user, with permissions and private information, from a list of all users with publicly accessible information.']})}),"\n",(0,i.jsxs)(t.p,{children:["To store the token in the User entity, create a reactive store in the ",(0,i.jsx)(t.code,{children:"model"})," segment. That store can contain both the token and the user object."]}),"\n",(0,i.jsxs)(t.p,{children:["Since the API client is usually defined in ",(0,i.jsx)(t.code,{children:"shared/api"})," or spreaded across the entities, the main challenge to this approach is making the token available to other requests that need it without breaking ",(0,i.jsx)(t.a,{href:"/docs/reference/layers#import-rule-on-layers",children:"the import rule on layers"}),":"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"A module in a slice can only import other slices when they are located on layers strictly below."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There are several solutions to this challenge:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Pass the token manually every time you make a request"}),(0,i.jsx)(t.br,{}),"\n","This is the simplest solution, but it quickly becomes cumbersome, and if you don't have type safety, it's easy to forget. It's also not compatible with middlewares pattern for the API client in Shared."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:["Expose the token to the entire app with a context or a global store like ",(0,i.jsx)(t.code,{children:"localStorage"})]}),(0,i.jsx)(t.br,{}),"\n","The key to retrieve the token will be kept in ",(0,i.jsx)(t.code,{children:"shared/api"})," so that the API client can access it. The reactive store of the token will be exported from the User entity, and the context provider (if needed) will be set up on the App layer. This gives more freedom for designing the API client, however, this creates an implicit dependency on higher layers to provide context. When following this approach, consider providing helpful error messages if the context or ",(0,i.jsx)(t.code,{children:"localStorage"})," are not set up correctly."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Inject the token into the API client every time it changes"}),(0,i.jsx)(t.br,{}),"\n",'If your store is reactive, you can create a subscription that will update the API client\'s token store every time the store in the entity changes. This is similar to the previous solution in that they both create an implicit dependency on higher layers, but this one is more imperative ("push"), while the previous one is more declarative ("pull").']}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Once you overcome the challenge of exposing the token that is stored in the entity's model, you can encode more business logic related to token management. For example, the ",(0,i.jsx)(t.code,{children:"model"})," segment can contain logic to invalidate the token after a certain period of time, or to refresh the token when it expires. To actually make requests to the backend, use the ",(0,i.jsx)(t.code,{children:"api"})," segment of the User entity or ",(0,i.jsx)(t.code,{children:"shared/api"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"in-pageswidgets-not-recommended",children:"In Pages/Widgets (not recommended)"}),"\n",(0,i.jsxs)(t.p,{children:["It is discouraged to store app-wide state like an access token in pages or widgets. Avoid placing your token store in the ",(0,i.jsx)(t.code,{children:"model"})," segment of the login page, instead choose from the first two solutions, Shared or Entities."]}),"\n",(0,i.jsx)(t.h2,{id:"logout-and-token-invalidation",children:"Logout and token invalidation"}),"\n",(0,i.jsx)(t.p,{children:"Usually, apps don't have an entire page for logging out, but the logout functionality is still very important. It consists of an authenticated request to the backend and an update to the token store."}),"\n",(0,i.jsxs)(t.p,{children:["If you store all your requests in ",(0,i.jsx)(t.code,{children:"shared/api"}),", keep the logout request function there, close to the login function. Otherwise, consider keeping the logout request function next to the button that triggers it. For example, if you have a header widget that appears on every page and contains the logout link, put that request in the ",(0,i.jsx)(t.code,{children:"api"})," segment of that widget."]}),"\n",(0,i.jsxs)(t.p,{children:["The update to the token store will have to be triggered from the place of the logout button, like a header widget. You can combine the request and the store update in the ",(0,i.jsx)(t.code,{children:"model"})," segment of that widget."]}),"\n",(0,i.jsx)(t.h3,{id:"automatic-logout",children:"Automatic logout"}),"\n",(0,i.jsxs)(t.p,{children:["Don't forget to build failsafes for when a request to log out fails, or a request to refresh a login token fails. In both of these cases, you should clear the token store. If you keep your token in Entities, this code can be placed in the ",(0,i.jsx)(t.code,{children:"model"})," segment as it is pure business logic. If you keep your token in Shared, placing this logic in ",(0,i.jsx)(t.code,{children:"shared/api"})," might bloat the segment and dilute its purpose. If you're noticing that your API segment contains two several unrelated things, consider splitting out the token management logic into another segment, for example, ",(0,i.jsx)(t.code,{children:"shared/auth"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7468:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(758);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);