"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[8577],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,d=u["".concat(l,".").concat(m)]||u[m]||y[m]||i;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));const i={title:"HD Wallets",order:2},o=void 0,s={unversionedId:"resources/hd-wallets",id:"version-v17.1.0/resources/hd-wallets",title:"HD Wallets",description:"Accounts in Cosmos are Hierarchical Deterministic (HD) Wallets. Originally specified in Bitcoin's BIP32, HD wallets are a special kind of wallet that let users derive any number of accounts from a single seed. To understand what that means, let us first define some terminology:",source:"@site/versioned_docs/version-v17.1.0/resources/hd-wallets.md",sourceDirName:"resources",slug:"/resources/hd-wallets",permalink:"/v17.1.0/resources/hd-wallets",draft:!1,tags:[],version:"v17.1.0",frontMatter:{title:"HD Wallets",order:2},sidebar:"tutorialSidebar",previous:{title:"The Genesis File",permalink:"/v17.1.0/resources/genesis"},next:{title:"Ledger Nano Support",permalink:"/v17.1.0/resources/ledger"}},l={},c=[],p={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Accounts in Cosmos are Hierarchical Deterministic (HD) Wallets. Originally specified in Bitcoin's ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP32"),", HD wallets are a special kind of wallet that let users derive any number of accounts from a single seed. To understand what that means, let us first define some terminology:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Wallet"),": Set of accounts obtained from a given seed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Account"),": A pair of public key/private key."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Private Key"),": A private key is a secret piece of information used to sign messages. In the blockchain context, a private key identifies the owner of an account. The private key of a user should never be revealed to others."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Public Key"),": A public key is a piece of information obtained by applying a one-way mathematical function on a private key. From it, an address can be derived. A private key cannot be found from a public key."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Address"),": An address is a public string with a human-readable prefix that identifies an account. It is obtained by applying mathematical transformations to a public key."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Digital Signature"),": A digital signature is a piece of cryptographic information that proves the owner of a given private key approved of a given message without revealing the private key."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Seed"),": Same as Mnemonic."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Mnemonic"),": A mnemonic is a sequence of words that is used as seed to derive private keys. The mnemonic is at the core of each wallet. NEVER LOSE YOUR MNEMONIC. WRITE IT DOWN ON A PIECE OF PAPER AND STORE IT SOMEWHERE SAFE. IF YOU LOSE IT, THERE IS NO WAY TO RETRIEVE IT. IF SOMEONE GAINS ACCESS TO IT, THEY GAIN ACCESS TO ALL THE ASSOCIATED ACCOUNTS.")),(0,r.yg)("p",null,"At the core of a HD wallet, there is a seed. From this seed, users can deterministically generate accounts. To generate an account from a seed, one-way mathematical transformations are applied. To decide which account to generate, the user specifies a ",(0,r.yg)("inlineCode",{parentName:"p"},"path"),", generally an ",(0,r.yg)("inlineCode",{parentName:"p"},"integer")," (",(0,r.yg)("inlineCode",{parentName:"p"},"0"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"2"),", ...)."),(0,r.yg)("p",null,"By specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"path")," to be ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," for example, the Wallet will generate ",(0,r.yg)("inlineCode",{parentName:"p"},"Private Key 0")," from the seed. Then, ",(0,r.yg)("inlineCode",{parentName:"p"},"Public Key 0")," can be generated from ",(0,r.yg)("inlineCode",{parentName:"p"},"Private Key 0"),". Finally, ",(0,r.yg)("inlineCode",{parentName:"p"},"Address 0")," can be generated from ",(0,r.yg)("inlineCode",{parentName:"p"},"Public Key 0"),". All these steps are one way only, meaning the ",(0,r.yg)("inlineCode",{parentName:"p"},"Public Key")," cannot be found from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Address"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"Private Key")," cannot be found from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Public Key"),", ..."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"     Account 0                         Account 1                         Account 2\n\n+------------------+              +------------------+               +------------------+\n|                  |              |                  |               |                  |\n|    Address 0     |              |    Address 1     |               |    Address 2     |\n|        ^         |              |        ^         |               |        ^         |\n|        |         |              |        |         |               |        |         |\n|        |         |              |        |         |               |        |         |\n|        |         |              |        |         |               |        |         |\n|        +         |              |        +         |               |        +         |\n|  Public key 0    |              |  Public key 1    |               |  Public key 2    |\n|        ^         |              |        ^         |               |        ^         |\n|        |         |              |        |         |               |        |         |\n|        |         |              |        |         |               |        |         |\n|        |         |              |        |         |               |        |         |\n|        +         |              |        +         |               |        +         |\n|  Private key 0   |              |  Private key 1   |               |  Private key 2   |\n|        ^         |              |        ^         |               |        ^         |\n+------------------+              +------------------+               +------------------+\n         |                                 |                                  |\n         |                                 |                                  |\n         |                                 |                                  |\n         +--------------------------------------------------------------------+\n                                           |\n                                           |\n                                 +---------+---------+\n                                 |                   |\n                                 |  Mnemonic (Seed)  |\n                                 |                   |\n                                 +-------------------+\n")),(0,r.yg)("p",null,"The process of derivating accounts from the seed is deterministic. This means that given the same path, the derived private key will always be the same."),(0,r.yg)("p",null,"The funds stored in an account are controlled by the private key. This private key is generated using a one-way function from the mnemonic. If you lose the private key, you can retrieve it using the mnemonic. However, if you lose the mnemonic, you will lose access to all the derived private keys. Likewise, if someone gains access to your mnemonic, they gain access to all the associated accounts."),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Do not lose or share your 24 words with anyone. To prevent theft or loss of funds, it is best to keep multiple copies of your mnemonic stored in safe, secure places. If someone is able to gain access to your mnemonic, they will fully control the accounts associated with them."))))}y.isMDXComponent=!0}}]);