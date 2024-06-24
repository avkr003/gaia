"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[7135],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>v});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,v=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(v,s(s({ref:n},u),{},{components:t})):r.createElement(v,s({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(8168),o=(t(6540),t(5680));const a={title:"Enable IBC Transfers"},s=void 0,i={unversionedId:"governance/proposals/2021-03-enable-ibc-transfers/README",id:"version-v17.1.0/governance/proposals/2021-03-enable-ibc-transfers/README",title:"Enable IBC Transfers",description:"The Proposal enables transferring and receiving assets using the ICS20 standard on the Cosmos Hub. If this proposal passes, there will be IBC assets available in the Bank module of the Hub and ATOM will be available on Zones connected over IBC.",source:"@site/versioned_docs/version-v17.1.0/governance/proposals/2021-03-enable-ibc-transfers/README.md",sourceDirName:"governance/proposals/2021-03-enable-ibc-transfers",slug:"/governance/proposals/2021-03-enable-ibc-transfers/",permalink:"/v17.1.0/governance/proposals/2021-03-enable-ibc-transfers/",draft:!1,tags:[],version:"v17.1.0",frontMatter:{title:"Enable IBC Transfers"},sidebar:"tutorialSidebar",previous:{title:"Stargate Upgrade- Second time is a charm",permalink:"/v17.1.0/governance/proposals/2021-01-stargate-upgrade-b/"},next:{title:"Advancing Ethermint - Governance Proposal - GTM and Engineering Plan for the Ethermint Chain",permalink:"/v17.1.0/governance/proposals/2021-04-advancing-ethermint/"}},l={},c=[{value:"Security Model",id:"security-model",level:2},{value:"IBC",id:"ibc",level:2},{value:"Incentive Security Extensions",id:"incentive-security-extensions",level:2}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The Proposal enables transferring and receiving assets using the ICS20 standard on the Cosmos Hub. If this proposal passes, there will be IBC assets available in the Bank module of the Hub and ATOM will be available on Zones connected over IBC.\nIqlusion believes that the IBC software is sufficiently stable for small amounts of value transfer. We expect there to be issues with stuck funds and UX confusion but overcoming these issues will only happen once IBC is live."),(0,o.yg)("h2",{id:"security-model"},"Security Model"),(0,o.yg)("p",null,"Tendermint full nodes produce agreement under the assumption that at most \u2153 of the voting power held by validators is Byzantine."),(0,o.yg)("h2",{id:"ibc"},"IBC"),(0,o.yg)("p",null,"IBC is a protocol for authenticated message passing between heterogeneous sovereign blockchains. IBC requires trusting that chains on both sides of the connections operate within their security model."),(0,o.yg)("h2",{id:"incentive-security-extensions"},"Incentive Security Extensions"),(0,o.yg)("p",null,"IBC has a facility to support freezing connections once a violation of the security model has occurred. The set of criteria for detecting such attacks continues to evolve and is a constant focus of research."))}f.isMDXComponent=!0}}]);