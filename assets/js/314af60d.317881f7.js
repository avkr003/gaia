"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[9758],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>u});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(t),g=r,u=h["".concat(p,".").concat(g)]||h[g]||m[g]||o;return t?n.createElement(u,i(i({ref:a},c),{},{components:t})):n.createElement(u,i({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9515:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(8168),r=(t(6540),t(5680));const o={title:"Parameter Change",order:4},i=void 0,s={unversionedId:"governance/proposal-types/param-change",id:"version-v17.1.0/governance/proposal-types/param-change",title:"Parameter Change",description:"This Cosmos Hub educational documentation aims to outline the Hub's parameters, describe their functions, and describe the potential implications of modifying each parameter. This documentation also aims to provide guidelines for creating and assessing parameter-change proposals.",source:"@site/versioned_docs/version-v17.1.0/governance/proposal-types/param-change.md",sourceDirName:"governance/proposal-types",slug:"/governance/proposal-types/param-change",permalink:"/v17.1.0/governance/proposal-types/param-change",draft:!1,tags:[],version:"v17.1.0",frontMatter:{title:"Parameter Change",order:4},sidebar:"tutorialSidebar",previous:{title:"Community Pool Spend",permalink:"/v17.1.0/governance/proposal-types/community-pool-spend"},next:{title:"x/auth",permalink:"/v17.1.0/governance/proposal-types/params-change/Auth"}},p={},l=[{value:"What parameters can be changed?",id:"what-parameters-can-be-changed",level:2},{value:"What are the current parameter values?",id:"what-are-the-current-parameter-values",level:2},{value:"Why create a parameter change proposal?",id:"why-create-a-parameter-change-proposal",level:2},{value:"Risks in parameter change proposals",id:"risks-in-parameter-change-proposals",level:2},{value:"Credits",id:"credits",level:2}],c={toc:l},h="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(h,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This Cosmos Hub educational documentation aims to outline the Hub's parameters, describe their functions, and describe the potential implications of modifying each parameter. This documentation also aims to provide guidelines for creating and assessing parameter-change proposals."),(0,r.yg)("p",null,"Drafting and submitting a parameter-change governance proposal involves two kinds of risk: losing proposal deposit amounts and the potential to alter the function of the Cosmos Hub network in an undesirable way. "),(0,r.yg)("h2",{id:"what-parameters-can-be-changed"},"What parameters can be changed?"),(0,r.yg)("p",null,"The complete parameters of the Cosmos Hub are split up into different modules, each of which has its own set of parameters. Any of them can be updated with a Param Change Proposal. If you are technically inclined, this is the full ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/master/x"},"list of modules")," in the Cosmos SDK. The Cosmos Hub is built using the Cosmos SDK, but not all available modules are in use on the Hub."),(0,r.yg)("p",null,"There are currently 8 modules active in the Cosmos Hub with parameters that may be altered via governance proposal. New modules may be introduced in the future."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/v17.1.0/governance/proposal-types/params-change/Auth"},"auth")," - Authentication of accounts and transactions"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/v17.1.0/governance/proposal-types/params-change/Governance"},"gov")," - On-chain governance proposals and voting"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/v17.1.0/governance/proposal-types/params-change/Staking"},"staking")," - Proof-of-stake layer"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/v17.1.0/governance/proposal-types/params-change/Slashing"},"slashing")," - Validator punishment mechanisms"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/v17.1.0/governance/proposal-types/params-change/Distribution"},"distribution")," - Fee distribution and staking token provision distribution"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/v17.1.0/governance/proposal-types/params-change/Crisis"},"crisis")," - Halting the blockchain under certain circumstances (ie. if an invariant is broken)"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/v17.1.0/governance/proposal-types/params-change/Mint"},"mint")," - Creation of new units of staking token")),(0,r.yg)("h2",{id:"what-are-the-current-parameter-values"},"What are the current parameter values?"),(0,r.yg)("p",null,"There are ways to query the current settings for each module's parameter(s). Some can be queried with the command line program ",(0,r.yg)("a",{parentName:"p",href:"/v17.1.0/getting-started/installation"},(0,r.yg)("inlineCode",{parentName:"a"},"gaiad")),"."),(0,r.yg)("p",null,"You can begin by using the command ",(0,r.yg)("inlineCode",{parentName:"p"},"gaia q [module] -h")," to get help about the subcommands for the module you want to query. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"gaiad q staking params --chain-id <chain-id> --node <node-id>")," returns the settings of relevant parameters:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"bond_denom: uatom\nhistorical_entries: 10000\nmax_entries: 7\nmax_validators: 180\nunbonding_time: 1814400s\n")),(0,r.yg)("p",null,"If a parameter-change proposal is successful, the change takes effect immediately upon completion of the voting period."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," You cannot currently query the ",(0,r.yg)("inlineCode",{parentName:"p"},"bank")," module's parameter, which is ",(0,r.yg)("inlineCode",{parentName:"p"},"sendenabled"),". You also cannot query the ",(0,r.yg)("inlineCode",{parentName:"p"},"crisis")," module's parameters."),(0,r.yg)("h2",{id:"why-create-a-parameter-change-proposal"},"Why create a parameter change proposal?"),(0,r.yg)("p",null,"Parameters are what govern many aspects of the chain's behaviour. As circumstances and attitudes change, sometimes you might want to change a parameter to bring the chain's behaviour in line with community opinion. For example, the Cosmos Hub launched with 100 active validators and there have been 4 proposals to date that have increased the ",(0,r.yg)("inlineCode",{parentName:"p"},"MaxValidators")," parameter. At the time of writing, the active set contains 180 validators."),(0,r.yg)("p",null,"The Cosmos Hub has been viewed as a slow-moving, highly secure chain and that is reflected in some of its other parameters, such as a 21 day unbonding period and 14 day voting period. These are quite long compared to other chains in the Cosmos Ecosystem"),(0,r.yg)("h2",{id:"risks-in-parameter-change-proposals"},"Risks in parameter change proposals"),(0,r.yg)("p",null,"Because parameters dictate some of the ways in which the chain operates, changing them can have an impact beyond what is immediately obvious. "),(0,r.yg)("p",null,"For example, reducing the unbonding period might seem like the only effect is in how quickly delegators can liquidate their assets. It might also have a much greater impact on the overall security of the network that would be hard to realize at first glance."),(0,r.yg)("p",null,"This is one of the reasons that having a thorough discussion before going on-chain is so important - talking through the impacts of a proposal is a great way to avoid unintended effects."),(0,r.yg)("h2",{id:"credits"},"Credits"),(0,r.yg)("p",null,"This documentation was originally created by Gavin Birch (",(0,r.yg)("a",{parentName:"p",href:"https://figment.io"},"Figment Networks"),"). Its development was supported by funding approved on January 29, 2020 by the Cosmos Hub via Community Spend ",(0,r.yg)("a",{parentName:"p",href:"https://cosmoshub-3.bigdipper.live/proposals/23"},"Proposal 23")," (",(0,r.yg)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmSMGEoY2dfxADPfgoAsJxjjC6hwpSNx1dXAqePiCEMCbY"},"full Proposal PDF here"),"). In late 2021 and early 2022 significant updates were made by ",(0,r.yg)("a",{parentName:"p",href:"https://hypha.coop/"},"Hypha Worker Co-op"),", especially @dcwalk and @lexaMichaelides.  \ud83d\ude4f"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Special thanks")," to the following for providing credible information:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Aleks (All in Bits; Fission Labs) for answering countless questions about these parameters"),(0,r.yg)("li",{parentName:"ul"},"Alessio (All in Bits) for explaining how ",(0,r.yg)("a",{parentName:"li",href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Auth.html#4-sigverifycosted25519"},(0,r.yg)("inlineCode",{parentName:"a"},"SigVerifyCostED25519"))," & ",(0,r.yg)("a",{parentName:"li",href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Auth.html#5-sigverifycostsecp256k1"},(0,r.yg)("inlineCode",{parentName:"a"},"SigVerifyCostSecp256k1"))," work, and detailed answers to my many questions"),(0,r.yg)("li",{parentName:"ul"},"Vidor for volunteering to explain ",(0,r.yg)("a",{parentName:"li",href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Crisis.html#1-constantfee"},(0,r.yg)("inlineCode",{parentName:"a"},"ConstantFee"))," and answering my many questions in detail"),(0,r.yg)("li",{parentName:"ul"},"Hyung (B-Harvest) for volunteering how ",(0,r.yg)("a",{parentName:"li",href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Mint.html#2-inflationratechange"},(0,r.yg)("inlineCode",{parentName:"a"},"InflationRateChange"))," works"),(0,r.yg)("li",{parentName:"ul"},"Joe (Chorus One) for explaining the security details involved with using full nodes for transactions"),(0,r.yg)("li",{parentName:"ul"},"Sunny (All in Bits; Sikka) for volunteering an explanation of the purpose of ",(0,r.yg)("a",{parentName:"li",href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Distribution.html#4-withdrawaddrenabled"},(0,r.yg)("inlineCode",{parentName:"a"},"withdrawaddrenabled")))))}m.isMDXComponent=!0}}]);