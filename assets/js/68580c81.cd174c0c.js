"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[2424],{5680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>m});var o=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),g=d(a),u=i,m=g["".concat(l,".").concat(u)]||g[u]||c[u]||n;return a?o.createElement(m,r(r({ref:t},h),{},{components:a})):o.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=a(8168),i=(a(6540),a(5680));const n={title:"Delegator FAQ",order:4},r=void 0,s={unversionedId:"delegators/delegator-faq",id:"delegators/delegator-faq",title:"Delegator FAQ",description:"What is a delegator?",source:"@site/docs/delegators/delegator-faq.md",sourceDirName:"delegators",slug:"/delegators/delegator-faq",permalink:"/main/delegators/delegator-faq",draft:!1,tags:[],version:"current",frontMatter:{title:"Delegator FAQ",order:4},sidebar:"tutorialSidebar",previous:{title:"Delegators",permalink:"/main/delegators/"},next:{title:"Delegator Guide (CLI)",permalink:"/main/delegators/delegator-guide-cli"}},l={},d=[{value:"What is a delegator?",id:"what-is-a-delegator",level:2},{value:"Choosing a validator",id:"choosing-a-validator",level:2},{value:"Directives of delegators",id:"directives-of-delegators",level:2},{value:"Revenue",id:"revenue",level:2},{value:"Validator Commission",id:"validator-commission",level:2},{value:"Liquid Staking",id:"liquid-staking",level:2},{value:"Toggling the ability to tokenize shares",id:"toggling-the-ability-to-tokenize-shares",level:3},{value:"Risks",id:"risks",level:2}],h={toc:d},g="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,o.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"what-is-a-delegator"},"What is a delegator?"),(0,i.yg)("p",null,"People that cannot or do not want to operate ",(0,i.yg)("a",{parentName:"p",href:"../validators/overview.mdx"},"validator nodes")," can still participate in the staking process as delegators. Indeed, validators are not chosen based on their self-delegated stake but based on their total stake, which is the sum of their self-delegated stake and of the stake that is delegated to them. This is an important property, as it makes delegators a safeguard against validators that exhibit bad behavior. If a validator misbehaves, their delegators will move their Atoms away from them, thereby reducing their stake. Eventually, if a validator's stake falls under the top 180 addresses with highest stake, they will exit the validator set."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Delegators share the revenue of their validators, but they also share the risks.")," In terms of revenue, validators and delegators differ in that validators can apply a commission on the revenue that goes to their delegator before it is distributed. This commission is known to delegators beforehand and can only change according to predefined constraints (see ",(0,i.yg)("a",{parentName:"p",href:"#choosing-a-validator"},"section")," below). In terms of risk, delegators' Atoms can be slashed if their validator misbehaves. For more, see ",(0,i.yg)("a",{parentName:"p",href:"#risks"},"Risks")," section."),(0,i.yg)("p",null,"To become delegators, Atom holders need to send a ",(0,i.yg)("a",{parentName:"p",href:"/main/delegators/delegator-guide-cli#sending-transactions"},'"Delegate transaction"'),' where they specify how many Atoms they want to bond and to which validator. A list of validator candidates will be displayed in Cosmos Hub explorers. Later, if a delegator wants to unbond part or all of their stake, they needs to send an "Unbond transaction". From there, the delegator will have to wait 3 weeks to retrieve their Atoms. Delegators can also send a "Rebond Transaction" to switch from one validator to another, without having to go through the 3 weeks waiting period.'),(0,i.yg)("p",null,"For a practical guide on how to become a delegator, click ",(0,i.yg)("a",{parentName:"p",href:"/main/delegators/delegator-guide-cli"},"here"),"."),(0,i.yg)("h2",{id:"choosing-a-validator"},"Choosing a validator"),(0,i.yg)("p",null,"In order to choose their validators, delegators have access to a range of information directly in ",(0,i.yg)("a",{parentName:"p",href:"https://lunie.io"},"Lunie")," or other Cosmos block explorers."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Validator's moniker"),": Name of the validator candidate."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Validator's description"),": Description provided by the validator operator."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Validator's website"),": Link to the validator's website."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Initial commission rate"),": The commission rate on revenue charged to any delegator by the validator (see below for more detail)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Commission max change rate:")," The maximum daily increase of the validator's commission. This parameter cannot be changed by the validator operator."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Maximum commission:")," The maximum commission rate this validator candidate can charge. This parameter cannot be changed by the validator operator."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Validator self-bond amount"),": A validator with a high amount of self-delegated Atoms has more skin-in-the-game than a validator with a low amount.")),(0,i.yg)("h2",{id:"directives-of-delegators"},"Directives of delegators"),(0,i.yg)("p",null,"Being a delegator is not a passive task. Here are the main directives of a delegator:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Perform careful due diligence on validators before delegating.")," If a validator misbehaves, part of their total stake, which includes the stake of their delegators, can be slashed. Delegators should therefore carefully select validators they think will behave correctly."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Actively monitor their validator after having delegated.")," Delegators should ensure that the validators they delegate to behave correctly, meaning that they have good uptime, do not double sign or get compromised, and participate in governance. They should also monitor the commission rate that is applied. If a delegator is not satisfied with its validator, they can unbond or switch to another validator (Note: Delegators do not have to wait for the unbonding period to switch validators. Rebonding takes effect immediately)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Participate in governance.")," Delegators can and are expected to actively participate in governance. A delegator's voting power is proportional to the size of their bonded stake. If a delegator does not vote, they will inherit the vote of their validator(s). If they do vote, they override the vote of their validator(s). Delegators therefore act as a counterbalance to their validators.")),(0,i.yg)("h2",{id:"revenue"},"Revenue"),(0,i.yg)("p",null,"Validators and delegators earn revenue in exchange for their services. This revenue is given in three forms:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Block provisions (Atoms):")," They are paid in newly created Atoms. Block provisions exist to incentivize Atom holders to stake. The yearly inflation rate is calculated to target 2/3 bonded stake. If the total bonded stake in the network is less than 2/3 of the total Atom supply, inflation increases until it reaches 20%. If the total bonded stake is more than 2/3 of the Atom supply, inflation decreases until it reaches 7%. This means that if total bonded stake stays less than 2/3 of the total Atom supply for a prolonged period of time, unbonded Atom holders can expect their Atom value to deflate by 20% (compounded) per year."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Transaction fees (various tokens):")," Each transfer on the Cosmos Hub comes with transactions fees. These fees can be paid in any currency that is whitelisted by the Hub's governance. Fees are distributed to bonded Atom holders in proportion to their stake. The first whitelisted token at launch is the ATOM.")),(0,i.yg)("h2",{id:"validator-commission"},"Validator Commission"),(0,i.yg)("p",null,"Each validator receives revenue based on their total stake. Before this revenue is distributed to delegators, the validator can apply a commission. In other words, delegators have to pay a commission to their validators on the revenue they earn. Let us look at a concrete example:"),(0,i.yg)("p",null,"We consider a validator whose stake (i.e. self-delegated stake + delegated stake) is 10% of the total stake of all validators. This validator has 20% self-delegated stake and applies a commission of 10%. Now let us consider a block with the following revenue:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"990 Atoms in block provisions"),(0,i.yg)("li",{parentName:"ul"},"10 Atoms in transaction fees.")),(0,i.yg)("p",null,"This amounts to a total of 1000 Atoms and 100 Photons to be distributed among all staking pools."),(0,i.yg)("p",null,"Our validator's staking pool represents 10% of the total stake, which means the pool obtains 100 Atoms and 10 Photons. Now let us look at the internal distribution of revenue:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Commission = ",(0,i.yg)("inlineCode",{parentName:"li"},"10% * 80% * 100")," Atoms = 8 Atoms"),(0,i.yg)("li",{parentName:"ul"},"Validator's revenue = ",(0,i.yg)("inlineCode",{parentName:"li"},"20% * 100")," Atoms + Commission = 28 Atoms"),(0,i.yg)("li",{parentName:"ul"},"Delegators' total revenue = ",(0,i.yg)("inlineCode",{parentName:"li"},"80% * 100")," Atoms - Commission = 72 Atoms")),(0,i.yg)("p",null,"Then, each delegator in the staking pool can claim their portion of the delegators' total revenue."),(0,i.yg)("h2",{id:"liquid-staking"},"Liquid Staking"),(0,i.yg)("p",null,"The Liquid Staking module enacts a safety framework and associated governance-controlled parameters to regulate the adoption of liquid staking."),(0,i.yg)("p",null,"The LSM mitigates liquid staking risks by limiting the total amount of ATOM that can be liquid staked to a percentage of all staked ATOM. As an additional risk-mitigation feature, the LSM introduces a requirement that validators self-bond ATOM to be eligible for delegations from liquid staking providers or to be eligible to mint LSM tokens. This mechanism is called the \u201cvalidator bond\u201d, and is technically distinct from the current self-bond mechanism, but functions similarly."),(0,i.yg)("p",null,"At the same time, the LSM introduces the ability for staked ATOM to be instantly liquid staked, without having to wait for the unbonding period."),(0,i.yg)("p",null,"The LSM enables users to instantly liquid stake their staked ATOM, without having to wait the twenty-one day unbonding period. This is important, because a very large portion of the ATOM supply is currently staked. Liquid staking ATOM that is already staked incurs a switching cost in the form of three weeks\u2019 forfeited staking rewards. The LSM eliminates this switching cost."),(0,i.yg)("p",null,"A user would be able to visit any liquid staking provider that has integrated with the LSM and click a button to convert her staked ATOM to liquid staked ATOM. It would be as easy as liquid staking unstaked ATOM."),(0,i.yg)("p",null,"Technically speaking, this is accomplished by using something called an \u201cLSM share.\u201d Using the liquid staking module, a user can tokenize their staked ATOM and turn it into LSM shares. LSM shares can be redeemed for underlying staked tokens and are transferable. After staked ATOM is tokenized it can be immediately transferred to a liquid staking provider in exchange for liquid staking tokens - without having to wait for the unbonding period."),(0,i.yg)("h3",{id:"toggling-the-ability-to-tokenize-shares"},"Toggling the ability to tokenize shares"),(0,i.yg)("p",null,"Currently the liquid staking module facilitates the immediate conversion of staked assets into liquid staked tokens. Despite the many benefits that come with this capability, it does inadvertently negate a protective measure available via traditional staking, where an account can stake their tokens to render them illiquid in the event that their wallet is compromised (the attacker would first need to unbond, then transfer out the tokens)."),(0,i.yg)("p",null,"Tokenization obviates this potential recovery measure, as an attacker could tokenize and immediately transfer staked tokens to another wallet. So, as an additional protective measure, the staking module permit accounts to selectively disable the tokenization of their stake with the ",(0,i.yg)("inlineCode",{parentName:"p"},"DisableTokenizeShares")," message."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"DisableTokenizeShares")," message is exposed by the staking module and can be executed as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"gaiad tx staking disable-tokenize-shares --from mykey  \n")),(0,i.yg)("p",null,"When tokenization is disabled, a lock is placed on the account, effectively preventing the tokenization of any delegations. Re-enabling tokenization would initiate the removal of the lock, but the process is not immediate. The lock removal is queued, with the lock itself persisting throughout the unbonding period. Following the completion of the unbonding period, the lock would be completely removed, restoring the account's ablility to tokenize. For liquid staking protocols that enable the lock, this delay better positions the base layer to coordinate a recovery in the event of an exploit."),(0,i.yg)("h2",{id:"risks"},"Risks"),(0,i.yg)("p",null,"Staking Atoms is not free of risk. First, staked Atoms are locked up, and retrieving them requires a 3 week waiting period called unbonding period. Additionally, if a validator misbehaves, a portion of their total stake can be slashed (i.e. destroyed). This includes the stake of their delegators."),(0,i.yg)("p",null,"There is one main slashing condition:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Double signing:")," If someone reports on that a validator signed two different blocks with the same chain ID at the same height, this validator will get slashed.")),(0,i.yg)("p",null,"This is why Atom holders should perform careful due diligence on validators before delegating. It is also important that delegators actively monitor the activity of their validators. If a validator behaves suspiciously or is too often offline, delegators can choose to unbond from them or switch to another validator. ",(0,i.yg)("strong",{parentName:"p"},"Delegators can also mitigate risk by distributing their stake across multiple validators."),"s"))}c.isMDXComponent=!0}}]);