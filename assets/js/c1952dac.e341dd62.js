"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[2131],{5680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>c});var n=r(6540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),p=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=t,c=g["".concat(l,".").concat(m)]||g[m]||d[m]||i;return r?n.createElement(c,o(o({ref:a},u),{},{components:r})):n.createElement(c,o({ref:a},u))}));function c(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[g]="string"==typeof e?e:t,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9863:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(8168),t=(r(6540),r(5680));const i={title:"Cosmos Hub 4, Gaia v12 Upgrade",order:8},o=void 0,s={unversionedId:"migration/cosmoshub-4-v12-upgrade",id:"version-v17.1.0/migration/cosmoshub-4-v12-upgrade",title:"Cosmos Hub 4, Gaia v12 Upgrade",description:"This document describes the steps for validators and full node operators, to upgrade successfully to the Gaia v12 release.",source:"@site/versioned_docs/version-v17.1.0/migration/cosmoshub-4-v12-upgrade.md",sourceDirName:"migration",slug:"/migration/cosmoshub-4-v12-upgrade",permalink:"/v17.1.0/migration/cosmoshub-4-v12-upgrade",draft:!1,tags:[],version:"v17.1.0",frontMatter:{title:"Cosmos Hub 4, Gaia v12 Upgrade",order:8},sidebar:"tutorialSidebar",previous:{title:"Cosmos Hub 4, Gaia v11 Upgrade Instructions",permalink:"/v17.1.0/migration/cosmoshub-4-v11-upgrade"},next:{title:"Cosmos Hub 4, Gaia v13 Upgrade",permalink:"/v17.1.0/migration/cosmoshub-4-v13-upgrade"}},l={},p=[{value:"Instructions",id:"instructions",level:2},{value:"On-chain governance proposal attains consensus",id:"on-chain-governance-proposal-attains-consensus",level:2},{value:"Liquid Staking",id:"liquid-staking",level:2},{value:"Upgrade date",id:"upgrade-date",level:2},{value:"Chain-id will remain the same",id:"chain-id-will-remain-the-same",level:2},{value:"Preparing for the upgrade",id:"preparing-for-the-upgrade",level:2},{value:"System requirement",id:"system-requirement",level:3},{value:"Backups",id:"backups",level:3},{value:"Testing",id:"testing",level:3},{value:"Current runtime",id:"current-runtime",level:3},{value:"Target runtime",id:"target-runtime",level:3},{value:"Upgrade steps",id:"upgrade-steps",level:2},{value:"Method I: Manual Upgrade",id:"method-i-manual-upgrade",level:3},{value:"Method II: Upgrade using Cosmovisor",id:"method-ii-upgrade-using-cosmovisor",level:3},{value:"Manually preparing the binary",id:"manually-preparing-the-binary",level:3},{value:"Preparation",id:"preparation",level:5},{value:"Expected upgrade result",id:"expected-upgrade-result",level:4},{value:"Auto-Downloading the Gaia binary",id:"auto-downloading-the-gaia-binary",level:3},{value:"Preparation",id:"preparation-1",level:4},{value:"Expected result",id:"expected-result",level:4},{value:"Upgrade duration",id:"upgrade-duration",level:2},{value:"Rollback plan",id:"rollback-plan",level:2},{value:"Communications",id:"communications",level:2},{value:"Risks",id:"risks",level:2},{value:"Reference",id:"reference",level:2}],u={toc:p},g="wrapper";function d(e){let{components:a,...r}=e;return(0,t.yg)(g,(0,n.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"This document describes the steps for validators and full node operators, to upgrade successfully to the Gaia v12 release.\nFor more details on the release, please see the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/tag/v12.0.0"},"release notes")),(0,t.yg)("h2",{id:"instructions"},"Instructions"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#cosmos-hub-4-gaia-v12-upgrade-instructions"},"Cosmos Hub 4, Gaia v12 Upgrade, Instructions"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#instructions"},"Instructions")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#on-chain-governance-proposal-attains-consensus"},"On-chain governance proposal attains consensus")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#liquid-staking"},"Liquid Staking")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#upgrade-date"},"Upgrade date")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#chain-id-will-remain-the-same"},"Chain-id will remain the same")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#preparing-for-the-upgrade"},"Preparing for the upgrade"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#system-requirement"},"System requirement")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#backups"},"Backups")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#testing"},"Testing")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#current-runtime"},"Current runtime")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#target-runtime"},"Target runtime")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#upgrade-steps"},"Upgrade steps"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#method-i-manual-upgrade"},"Method I: Manual Upgrade")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#method-ii-upgrade-using-cosmovisor"},"Method II: Upgrade using Cosmovisor")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#manually-preparing-the-binary"},"Manually preparing the binary"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#preparation"},"Preparation")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#expected-upgrade-result"},"Expected upgrade result")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#auto-downloading-the-gaia-binary"},"Auto-Downloading the Gaia binary"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#preparation-1"},"Preparation")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#expected-result"},"Expected result")))))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#upgrade-duration"},"Upgrade duration")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#rollback-plan"},"Rollback plan")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#communications"},"Communications")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#risks"},"Risks")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#reference"},"Reference"))))),(0,t.yg)("h2",{id:"on-chain-governance-proposal-attains-consensus"},"On-chain governance proposal attains consensus"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/821"},"Proposal 821")," is the reference on-chain governance proposal for this upgrade, which is still in its voting period. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a ",(0,t.yg)("em",{parentName:"p"},"fully decentralized")," way."),(0,t.yg)("h2",{id:"liquid-staking"},"Liquid Staking"),(0,t.yg)("p",null,"Validators please be aware that this release will include a new liquid staking module which has been included via the Cosmos SDK. Please see the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/tag/v12.0.0"},"release notes")," for v12 for more information about this module. "),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"IMPORTANT:")," Inclusion of this module requires validators to set a validation-bond to be eligiable for Liquid Staked delegations. Please see the ",(0,t.yg)("a",{parentName:"p",href:"/validators/validator-faq.html#liquid-staking-module"},"Validator FAQ")," for more information."),(0,t.yg)("h2",{id:"upgrade-date"},"Upgrade date"),(0,t.yg)("p",null,"The upgrade will take place at a block height of ",(0,t.yg)("inlineCode",{parentName:"p"},"16985500"),". The date/time of the upgrade is subject to change as blocks are not generated at a constant interval. You can stay up-to-date using this ",(0,t.yg)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/blocks/16985500"},"live countdown")," page."),(0,t.yg)("h2",{id:"chain-id-will-remain-the-same"},"Chain-id will remain the same"),(0,t.yg)("p",null,"The chain-id of the network will remain the same, ",(0,t.yg)("inlineCode",{parentName:"p"},"cosmoshub-4"),". This is because an in-place migration of state will take place, i.e., this upgrade does not export any state."),(0,t.yg)("h2",{id:"preparing-for-the-upgrade"},"Preparing for the upgrade"),(0,t.yg)("h3",{id:"system-requirement"},"System requirement"),(0,t.yg)("p",null,"32GB RAM is recommended to ensure a smooth upgrade."),(0,t.yg)("p",null,"If you have less than 32GB RAM, you might try creating a swapfile to swap an idle program onto the hard disk to free up memory. This can\nallow your machine to run the binary than it could run in RAM alone."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"sudo fallocate -l 16G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\n")),(0,t.yg)("h3",{id:"backups"},"Backups"),(0,t.yg)("p",null,"Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the ",(0,t.yg)("inlineCode",{parentName:"p"},".gaia")," directory.\nIf you use Cosmovisor to upgrade, by default, Cosmovisor will backup your data upon upgrade. See below ",(0,t.yg)("a",{parentName:"p",href:"#method-ii-upgrade-using-cosmovisor"},"upgrade using cosmovisor")," section."),(0,t.yg)("p",null,"It is critically important for validator operators to back-up the ",(0,t.yg)("inlineCode",{parentName:"p"},".gaia/data/priv_validator_state.json")," file after stopping the gaiad process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted."),(0,t.yg)("h3",{id:"testing"},"Testing"),(0,t.yg)("p",null,"For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, you can run a ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/testnets/tree/master/local"},"v12 Local Testnet")," or join in our ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/testnets/tree/master/public"},"Cosmos Hub Public Testnet"),"."),(0,t.yg)("h3",{id:"current-runtime"},"Current runtime"),(0,t.yg)("p",null,"The Cosmos Hub mainnet network, ",(0,t.yg)("inlineCode",{parentName:"p"},"cosmoshub-4"),", is currently running ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/v11.0.0"},"Gaia v11.0.0"),". We anticipate that operators who are running on v11.0.x, will be able to upgrade successfully. Validators are expected to ensure that their systems are up to date and capable of performing the upgrade. This includes running the correct binary, or if building from source, building with go ",(0,t.yg)("inlineCode",{parentName:"p"},"1.20"),"."),(0,t.yg)("h3",{id:"target-runtime"},"Target runtime"),(0,t.yg)("p",null,"The Cosmos Hub mainnet network, ",(0,t.yg)("inlineCode",{parentName:"p"},"cosmoshub-4"),", will run ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/tag/v12.0.0"},"Gaia v12.0.0"),". Operators ",(0,t.yg)("em",{parentName:"p"},(0,t.yg)("strong",{parentName:"em"},"MUST"))," use this version post-upgrade to remain connected to the network."),(0,t.yg)("h2",{id:"upgrade-steps"},"Upgrade steps"),(0,t.yg)("p",null,"There are 2 major ways to upgrade a node:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Manual upgrade"),(0,t.yg)("li",{parentName:"ul"},"Upgrade using ",(0,t.yg)("a",{parentName:"li",href:"https://pkg.go.dev/cosmossdk.io/tools/cosmovisor"},"Cosmovisor"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Either by manually preparing the new binary"),(0,t.yg)("li",{parentName:"ul"},"Or by using the auto-download functionality (this is not yet recommended)")))),(0,t.yg)("p",null,"If you prefer to use Cosmovisor to upgrade, some preparation work is needed before upgrade."),(0,t.yg)("h3",{id:"method-i-manual-upgrade"},"Method I: Manual Upgrade"),(0,t.yg)("p",null,"Make sure Gaia v12.0.0 is installed by either downloading a ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/tag/v12.0.0"},"compatible binary"),", or building from source. Building from source requires ",(0,t.yg)("strong",{parentName:"p"},"Golang 1.20"),"."),(0,t.yg)("p",null,"Run Gaia v11.0.0 till upgrade height, the node will panic:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'ERR UPGRADE "v12" NEEDED at height: 16985500: upgrade to v12 and applying upgrade "v12" at height:16985500\n')),(0,t.yg)("p",null,"Stop the node, and switch the binary to Gaia v12.0.0 and re-start by ",(0,t.yg)("inlineCode",{parentName:"p"},"gaiad start"),"."),(0,t.yg)("p",null,"It may take several minutes to a few hours until validators with a total sum voting power > 2/3 to complete their node upgrades. After that, the chain can continue to produce blocks."),(0,t.yg)("h3",{id:"method-ii-upgrade-using-cosmovisor"},"Method II: Upgrade using Cosmovisor"),(0,t.yg)("h3",{id:"manually-preparing-the-binary"},"Manually preparing the binary"),(0,t.yg)("h5",{id:"preparation"},"Preparation"),(0,t.yg)("p",null,"Install the latest version of Cosmovisor (",(0,t.yg)("inlineCode",{parentName:"p"},"1.5.0"),"):"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Verify Cosmovisor Version")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cosmovisor version\ncosmovisor version: v1.5.0\n")),(0,t.yg)("p",null,"Create a cosmovisor folder:"),(0,t.yg)("p",null,"create a Cosmovisor folder inside ",(0,t.yg)("inlineCode",{parentName:"p"},"$GAIA_HOME")," and move Gaia v11.0.0 into ",(0,t.yg)("inlineCode",{parentName:"p"},"$GAIA_HOME/cosmovisor/genesis/bin")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $GAIA_HOME/cosmovisor/genesis/bin\ncp $(which gaiad) $GAIA_HOME/cosmovisor/genesis/bin\n")),(0,t.yg)("p",null,"build Gaia v12.0.0, and move gaiad v12.0.0 to ",(0,t.yg)("inlineCode",{parentName:"p"},"$GAIA_HOME/cosmovisor/upgrades/v12/bin")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p  $GAIA_HOME/cosmovisor/upgrades/v12/bin\ncp $(which gaiad) $GAIA_HOME/cosmovisor/upgrades/v12/bin\n")),(0,t.yg)("p",null,"Then you should get the following structure:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 current -> genesis or upgrades/<name>\n\u251c\u2500\u2500 genesis\n\u2502   \u2514\u2500\u2500 bin\n\u2502       \u2514\u2500\u2500 gaiad  #v11.0.x\n\u2514\u2500\u2500 upgrades\n    \u2514\u2500\u2500 v12\n        \u2514\u2500\u2500 bin\n            \u2514\u2500\u2500 gaiad  #v12.0.0\n")),(0,t.yg)("p",null,"Export the environmental variables:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"export DAEMON_NAME=gaiad\n# please change to your own gaia home dir\n# please note `DAEMON_HOME` has to be absolute path\nexport DAEMON_HOME=$GAIA_HOME\nexport DAEMON_RESTART_AFTER_UPGRADE=true\n")),(0,t.yg)("p",null,"Start the node:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cosmovisor run  start --x-crisis-skip-assert-invariants --home $DAEMON_HOME\n")),(0,t.yg)("p",null,"Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK."),(0,t.yg)("h4",{id:"expected-upgrade-result"},"Expected upgrade result"),(0,t.yg)("p",null,"When the upgrade block height is reached, Gaia will panic and stop:"),(0,t.yg)("p",null,"This may take 7 minutes to a few hours.\nAfter upgrade, the chain will continue to produce blocks when validators with a total sum voting power > 2/3 complete their node upgrades."),(0,t.yg)("h3",{id:"auto-downloading-the-gaia-binary"},"Auto-Downloading the Gaia binary"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"This method is not recommended!")),(0,t.yg)("h4",{id:"preparation-1"},"Preparation"),(0,t.yg)("p",null,"Install the latest version of Cosmovisor (",(0,t.yg)("inlineCode",{parentName:"p"},"1.5.0"),"):"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest\n")),(0,t.yg)("p",null,"Create a cosmovisor folder:"),(0,t.yg)("p",null,"create a cosmovisor folder inside gaia home and move gaiad v11.0.x into ",(0,t.yg)("inlineCode",{parentName:"p"},"$GAIA_HOME/cosmovisor/genesis/bin")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $GAIA_HOME/cosmovisor/genesis/bin\ncp $(which gaiad) $GAIA_HOME/cosmovisor/genesis/bin\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 current -> genesis or upgrades/<name>\n\u2514\u2500\u2500 genesis\n     \u2514\u2500\u2500 bin\n        \u2514\u2500\u2500 gaiad  #v11.0.x\n")),(0,t.yg)("p",null,"Export the environmental variables:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"export DAEMON_NAME=gaiad\n# please change to your own gaia home dir\nexport DAEMON_HOME=$GAIA_HOME\nexport DAEMON_RESTART_AFTER_UPGRADE=true\nexport DAEMON_ALLOW_DOWNLOAD_BINARIES=true\n")),(0,t.yg)("p",null,"Start the node:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cosmovisor run start --x-crisis-skip-assert-invariants --home $DAEMON_HOME\n")),(0,t.yg)("p",null,"Skipping the invariant checks can help decrease the upgrade time significantly."),(0,t.yg)("h4",{id:"expected-result"},"Expected result"),(0,t.yg)("p",null,"When the upgrade block height is reached, you can find the following information in the log:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'ERR UPGRADE "v12" NEEDED at height: 16985500: upgrade to v12 and applying upgrade "v12" at height:16985500\n')),(0,t.yg)("p",null,"Then the Cosmovisor will create ",(0,t.yg)("inlineCode",{parentName:"p"},"$GAIA_HOME/cosmovisor/upgrades/v12/bin")," and download the Gaia v12.0.0 binary to this folder according to links in the ",(0,t.yg)("inlineCode",{parentName:"p"},"--info")," field of the upgrade proposal.\nThis may take 7 minutes to a few hours, afterwards, the chain will continue to produce blocks once validators with a total sum voting power > 2/3 complete their nodes upgrades."),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Please Note:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In general, auto-download comes with the risk that the verification of correct download is done automatically. If users want to have the highest guarantee users should confirm the check-sum manually. We hope more node operators will use the auto-download for this release but please be aware this is a risk and users should take at your own discretion."),(0,t.yg)("li",{parentName:"ul"},"Users should run their node on v11.0.x if they use the cosmovisor v1.5.0 with auto-download enabled for upgrade process.")),(0,t.yg)("h2",{id:"upgrade-duration"},"Upgrade duration"),(0,t.yg)("p",null,"The upgrade may take a few minutes to several hours to complete because cosmoshub-4 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network."),(0,t.yg)("h2",{id:"rollback-plan"},"Rollback plan"),(0,t.yg)("p",null,"During the network upgrade, core Cosmos teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped."),(0,t.yg)("p",null,"Steps to skip this upgrade proposal are simply to resume the cosmoshub-4 network with the (downgraded) v11.0.0 binary using the following command:"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"gaiad start --unsafe-skip-upgrade 16985500")),(0,t.yg)("p",null,"Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Cosmos teams."),(0,t.yg)("p",null,"Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote."),(0,t.yg)("h2",{id:"communications"},"Communications"),(0,t.yg)("p",null,"Operators are encouraged to join the ",(0,t.yg)("inlineCode",{parentName:"p"},"#cosmos-hub-validators-verified")," channel of the Cosmos Hub Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand. Requests to join the ",(0,t.yg)("inlineCode",{parentName:"p"},"#cosmos-hub-validators-verified")," channel can be sent to the ",(0,t.yg)("inlineCode",{parentName:"p"},"#general-support")," channel."),(0,t.yg)("h2",{id:"risks"},"Risks"),(0,t.yg)("p",null,"As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing."),(0,t.yg)("p",null,"The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it."),(0,t.yg)("h2",{id:"reference"},"Reference"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/mainnet"},"Join Cosmos Hub Mainnet")))}d.isMDXComponent=!0}}]);