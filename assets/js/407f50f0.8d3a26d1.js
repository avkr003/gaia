"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[3573],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(8168),n=(a(6540),a(5680));const o={title:"Delay of Hub Stargate Upgrade"},i=void 0,s={unversionedId:"governance/proposals/2021-01-delay-stargate-upgrade/README",id:"version-v17.1.0/governance/proposals/2021-01-delay-stargate-upgrade/README",title:"Delay of Hub Stargate Upgrade",description:"The Stargate team is recommending that the Cosmos Hub reschedule the next upgrade to a new commit hash. The new commit hash is expected to be available on Tuesday Jan 26th with a new upgrade proposal immediately after.",source:"@site/versioned_docs/version-v17.1.0/governance/proposals/2021-01-delay-stargate-upgrade/README.md",sourceDirName:"governance/proposals/2021-01-delay-stargate-upgrade",slug:"/governance/proposals/2021-01-delay-stargate-upgrade/",permalink:"/v17.1.0/governance/proposals/2021-01-delay-stargate-upgrade/",draft:!1,tags:[],version:"v17.1.0",frontMatter:{title:"Delay of Hub Stargate Upgrade"},sidebar:"tutorialSidebar",previous:{title:"Proposal 34, Luna Mission - Funding $ATOM",permalink:"/v17.1.0/governance/proposals/2021-01-atom2021_marketing/"},next:{title:"Cosmos Stargate Hub Upgrade Proposal 2 - Time to Upgrade",permalink:"/v17.1.0/governance/proposals/2021-01-stargate-upgrade/"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Stargate team is recommending that the Cosmos Hub reschedule the next upgrade to a new commit hash. The new commit hash is expected to be available on Tuesday Jan 26th with a new upgrade proposal immediately after."),(0,n.yg)("p",null,"This governance proposal will signal that ",(0,n.yg)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/35"},"proposal 35")," will not be executed. The Hub governance will vote on the forthcoming proposal aiming for a final upgrade. The earliest target date would be February 11th. Given that Lunar New Year is on Feb 12th. The next best date is Feb 18th 06:00UTC."),(0,n.yg)("p",null,"We are recommending the delay for the following reasons."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Bugs have been identified in the Proposal 29 implementation.  They are resolved in this pull request",(0,n.yg)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/pull/559"},"Additional review of prop 29 and migration testing by zmanian \xb7 Pull Request #559 \xb7 cosmos/gaia \xb7 GitHub")),(0,n.yg)("li",{parentName:"ul"},"A balance validation regression was identified during Prop 29 code review. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/8417"},"x/bank: balance and metadata validation by fedekunze \xb7 Pull Request #8417 \xb7 cosmos/cosmos-sdk \xb7 GitHub")),(0,n.yg)("li",{parentName:"ul"},"The IBC Go To Market Working Group has ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/8266"},"identified Ledger hardware wallet")," support as a necessary feature for the initial launch of IBC on the Hub. We have an opportunity to provide this support in this upgrade. The SDK believes this can be quickly remediated in the time available with merged PRs on Monday."),(0,n.yg)("li",{parentName:"ul"},"The number of Stargate related support requests from integrators has increased significantly since the governance proposal went live but some teams have already announced a period of reduced $ATOM support while they upgrade like ",(0,n.yg)("a",{parentName:"li",href:"https://twitter.com/Ledger_Support/status/1352247403605356551?s=20"},"https://twitter.com/Ledger_Support/status/1352247403605356551?s=20"),". The additional time should minimize the disruption for $ATOM holders. Thank so much to the $IRIS team who is fielding a similar request volume among our non-English community.")))}d.isMDXComponent=!0}}]);