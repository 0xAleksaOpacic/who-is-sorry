// Import companies from centralized file
import { COMPANIES } from './companies'

// Import all letter images (all converted to PNG)
import polkadotLetter from '../assets/images/letters/polkadot.png'
import trustWalletLetter from '../assets/images/letters/trustWallet.png'
import injectiveLetter from '../assets/images/letters/Injective.png'
import icpLetter from '../assets/images/letters/icp.png'
import aviciLetter from '../assets/images/letters/avici.png'
import okxLetter from '../assets/images/letters/okx.png'
import taikoLetter from '../assets/images/letters/taiko.png'
import minaLetter from '../assets/images/letters/mina.png'
import nearIntentsLetter from '../assets/images/letters/near-intents.png'
import jupiterLendLetter from '../assets/images/letters/jupiter-lend.png'
import gatewayLetter from '../assets/images/letters/gateway.png'
import phenixLetter from '../assets/images/letters/phenix.png'

export const letters = [
  // 1. Polkadot
  {
    id: 'polkadot-001',
    company: COMPANIES.POLKADOT,
    quizText: [
      "Dear bro,",
      "",
      "We owe you an apology.",
      "It seems we've made blockchains a little too trustless.",
      "With shared security, open governance, and transparent funding, we might've accidentally removed the need to just \"trust me, bro.\"",
      "We didn't mean to make rug pulls awkward or backroom deals harder to pull off. We just thought code and community could handle things better than promises and powerpoint slides.",
      "Now everyone's scrambling to decentralize, adding \"on-chain\" to everything, and wondering why their token holders suddenly expect a say.",
      "So yeah, we're sorry, bro.",
      "For making Web a place where trust has to be earned, not assumed.",
      "Warm regards,",
      "???"
    ],
    revealImage: polkadotLetter,
    tweetUrl: 'https://x.com/polkadot/status/1988319131792535773?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://polkadot.com/',
    decoyCompanies: [COMPANIES.ICP, COMPANIES.TAIKO]
  },
  
  // 2. Trust Wallet
  {
    id: 'trust-wallet-001',
    company: COMPANIES.TRUST_WALLET,
    quizText: [
      "Dear users,",
      "",
      "We owe you an apology.",
      "It seems we've made owning crypto too easy.",
      "You can buy, swap, stake, or bridge all in one app. You don't even need to ask permission. You just... do it. Instantly.",
      "And as if that wasn't enough, now you can trade perps, earn on your stables, join our accelerator programme, save on fees with ??? Premium, and even pay gas with another token using Flex Gas.",
      "It also doesn't help that you can hold thousands of tokens, across hundreds of chains, with no \"account suspended\" emails, and no middlemen pretending to protect you.",
      "We didn't mean to make self-custody feel this smooth. It just happened. Maybe we took freedom a bit too far.",
      "And yes, we've noticed, you're not panicking when exchanges go down. You're just opening your wallet, smiling, and saying, \"I own this.\"",
      "Looks like we built something incredible... empowerment. We sincerely apologize.",
      "Warm regards,",
      "???"
    ],
    revealImage: trustWalletLetter,
    tweetUrl: 'https://x.com/trustwallet/status/1988245835281322461?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://trustwallet.com/',
    decoyCompanies: [COMPANIES.OKX_WALLET, COMPANIES.AVICI]
  },
  
  // 3. Injective
  {
    id: 'injective-001',
    company: COMPANIES.INJECTIVE,
    quizText: [
      "Dear bro,",
      "",
      "We owe you an apology.",
      "It seems we've made onchain finance a little too accessible.",
      "With real-time speeds and the first MultivM blockchain, we might've accidentally removed the need to take several years and millions of dollars to build in crypto.",
      "Oh, and everything just unfortunately works like magic. Want to use an app? It works. Need to send a transaction? It costs nothing. Want to use tokens across WASM and EVM? You don't need to do anything, they're the same across both.",
      "We didn't mean to make other chains look slow and complicated. We just thought real financial infrastructure should perform like, well, actual financial infrastructure and not a science experiment with crazy high fees and hours of wait time.",
      "And for making onchain finance infrastructure accessible to everyone, not just people with PhDs from MIT and multi-million dollar net worths.",
      "Sorry bro,",
      "???"
    ],
    revealImage: injectiveLetter,
    tweetUrl: 'https://x.com/injective/status/1988351103294206248?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://injective.com/',
    decoyCompanies: [COMPANIES.NEAR_INTENTS, COMPANIES.MINA]
  },
  
  // 4. ICP
  {
    id: 'icp-001',
    company: COMPANIES.ICP,
    quizText: [
      "Dear Crypto Community,",
      "",
      "We would like to formally apologize.",
      "We accidentally built a blockchain that hosts the full tech stack (front-end + backend + data) 100% on-chain.",
      "We are sorry for proving that \"Decentralized Apps\" don't actually need Amazon Web Services to run. We realize this was an inconvenient truth for the industry.",
      "We are also deeply sorry for shipping features today that other chains have scheduled for 2030. It was rude of us to skip the 'hype and empty promises' phase of the project lifecycle and go straight to a working product. We will try to be less efficient in the future.",
      "Finally, we apologize for launching Al that writes its own code on-chain. We didn't mean to make your computer science degree feel obsolete so quickly.",
      "We promise to try and stop being years ahead of everyone else. It won't happen again.",
      "Sincerely,",
      "???"
    ],
    revealImage: icpLetter,
    tweetUrl: 'https://x.com/dfinitytoday/status/1988329375159513535?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://internetcomputer.org/',
    decoyCompanies: [COMPANIES.POLKADOT, COMPANIES.TAIKO]
  },
  
  // 5. Avici
  {
    id: 'avici-001',
    company: COMPANIES.AVICI,
    quizText: [
      "Dear spenders,",
      "",
      "We owe you an apology.",
      "It seems we've made spending crypto too easy.",
      "You can literally deposit any token, instantly convert it to card balance, and start spending. It also doesn't help that you can get the card in just 2 minutes and add it to Apple and Google Pay.",
      "It also doesn't help that we have no forex markup, don't charge for declined transactions, and have zero hidden fees. We didn't plan to remove friction, it just happened. Maybe we took convenience a bit too far.",
      "And yes, we've noticed, you're not arguing with banks anymore to offramp crypto. You're actually... relaxed.",
      "Looks like our self-custody model has created too much freedom, calm, and ease of use. We sincerely apologize.",
      "Warm regards,",
      "???"
    ],
    revealImage: aviciLetter,
    tweetUrl: 'https://x.com/avicimoney/status/1987891177056858439?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://avici.money/',
    decoyCompanies: [COMPANIES.TRUST_WALLET, COMPANIES.OKX_WALLET]
  },
  
  // 6. OKX Wallet
  {
    id: 'okx-wallet-001',
    company: COMPANIES.OKX_WALLET,
    quizText: [
      "Dear degens,",
      "",
      "We owe you an apology.",
      "You spent hours setting up wallets for multiple chains, and we showed up with a single wallet for all of them.",
      "We took away your excuse to be \"locked in\" at your desk by letting you track wallets, dissect CT alpha, and set limit orders right from your phone. No more skipping meetups or family dinners.",
      "We've also taken away the thrill of airdrop farming. Our Boost campaigns remove the guesswork by rewarding you based on your trading volume.",
      "Sorry for making life onchain this easy.",
      "Sincerely,",
      "???"
    ],
    revealImage: okxLetter,
    tweetUrl: 'https://x.com/wallet/status/1988549857473179839?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://web3.okx.com/', 
    decoyCompanies: [COMPANIES.TRUST_WALLET, COMPANIES.NEAR_INTENTS]
  },
  
  // 7. Taiko
  {
    id: 'taiko-001',
    company: COMPANIES.TAIKO,
    quizText: [
      "Dear builders,",
      "",
      "We owe you an apology.",
      "It seems we've made building on Ethereum too easy.",
      "You can literally deploy to ???, get native Ethereum security, and start scaling.",
      "It also doesn't help that you get preconfirmations in seconds and can use all your existing Ethereum tools without changing a single line of code.",
      "It also doesn't help that we have no proprietary tech stack, don't require custom wallets, and have zero vendor lock-in. We didn't plan to remove friction; it just happened. Maybe we took decentralisation a bit too far.",
      "And yes, we've noticed, you're not arguing about rollup compromises anymore. You're actually... relaxed.",
      "Looks like our based rollup architecture has created too much freedom, compatibility, and ease of use. We sincerely apologise.",
      "Warm regards,",
      "???"
    ],
    revealImage: taikoLetter,
    tweetUrl: 'https://x.com/taikoxyz/status/1988170942120644797?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://taiko.xyz/', 
    decoyCompanies: [COMPANIES.ICP, COMPANIES.POLKADOT]
  },
  
  // 8. Mina
  {
    id: 'mina-001',
    company: COMPANIES.MINA,
    quizText: [
      "Dear builders,",
      "",
      "We owe you an apology.",
      "It seems we've made blockchains a little too lightweight.",
      "With ??? you can verify an entire chain from your browser with a ZK proof smaller than a tweet.",
      "We didn't mean to challenge what a blockchain could be. Or to make every other chain suddenly feel... bloated.",
      "We just wanted to prove that scalability, decentralization, and privacy could actually get along.",
      "Now everyone's talking about ZK, rewriting their roadmaps, and trying to ???-fy — while we're already here. Running. On mainnet.",
      "So yeah, we're sorry.",
      "For making the rest of Web3 feel a little... heavy.",
      "Warm regards,",
      "???"
    ],
    revealImage: minaLetter,
    tweetUrl: 'https://x.com/minaprotocol/status/1988305441370386886?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://minaprotocol.com/',
    decoyCompanies: [COMPANIES.TAIKO, COMPANIES.FHENIX]
  },
  
  // 9. NEAR Intents
  {
    id: 'near-intents-001',
    company: COMPANIES.NEAR_INTENTS,
    quizText: [
      "Dear users,",
      "",
      "We owe you an apology.",
      "It seems we've made swapping too effortless.",
      "You can now swap 120+ native assets like BTC, SOL, ETH, USDC, USDT, ADA, LTC, ZEC and more across 20+ major chains. All without seeing a single bridge, router or chain name.",
      "It also doesn't help that it all happens with low fees, deep liquidity and quick execution. We didn't mean to remove the complexity; it just disappeared.",
      "Looks like we've taken smooth swaps a bit too far.",
      "We've already processed 4.5 Billion+ in total volume and 7.2 Million+ swaps.",
      "We sincerely apologize.",
      "Warm regards,",
      "???"
    ],
    revealImage: nearIntentsLetter,
    tweetUrl: 'https://x.com/near_intents/status/1988388773621620808?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://near.org/',
    decoyCompanies: [COMPANIES.TRUST_WALLET, COMPANIES.OKX_WALLET]
  },
  
  // 10. Jupiter Lend
  {
    id: 'jupiter-lend-001',
    company: COMPANIES.JUPITER_LEND,
    quizText: [
      "Dear ???,",
      "",
      "We owe you an apology.",
      "It seems we've made lending and borrowing onchain too easy.",
      "You can easily deposit your assets and earn upto 9% yield without even opening the website.",
      "It doesn't help that our yields are auto-compounded, giving you even more than it shows on the website.",
      "It also doesn't help that in a world of 10% liquidation penalties, we've brought 0.1% penalties. Maybe we took saving you money too far.",
      "Looks like our honest APYs, 95% LTVs and multiple audits have made your DeFi experience too convenient.",
      "We sincerely apologize.",
      "Warm regards,",
      "???"
    ],
    revealImage: jupiterLendLetter,
    tweetUrl: 'https://x.com/jup_lend/status/1988581789791928687?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://jup.ag/',
    decoyCompanies: [COMPANIES.INJECTIVE, COMPANIES.NEAR_INTENTS]
  },
  
  // 11. Gateway.fm
  {
    id: 'gateway-001',
    company: COMPANIES.GATEWAY,
    quizText: [
      "Dear builders,",
      "",
      "We owe you an apology.",
      "It seems we've made blockchain infrastructure too easy.",
      "You can deploy rollups in just a few clicks, get access to faster RPCs, and tap into our vast suite of services that scale your business effortlessly. We might've just set a new standard for simplicity and performance.",
      "It also doesn't help that our infrastructure is actually... reliable. No downtime, no endless setup - and built to deliver exceptional performance at an efficient cost. Efficiency shouldn't have been this effortless.",
      "We've also noticed a worrying trend: developers sleeping better, ops teams running out of excuses, and projects going live faster than anyone expected. That's on us. We took performance and scalability a bit too seriously.",
      "Looks like our enterprise-grade infrastructure has created too much stability, freedom, and trust. We sincerely apologize for that.",
      "Warm regards,",
      "???"
    ],
    revealImage: gatewayLetter,
    tweetUrl: 'https://x.com/gateway_eth/status/1988541768015479204?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://gateway.fm/', 
    decoyCompanies: [COMPANIES.TAIKO, COMPANIES.ICP]
  },
  
  // 12. Fhenix
  {
    id: 'fhenix-001',
    company: COMPANIES.FHENIX,
    quizText: [
      "Dear builders,",
      "",
      "We owe you an apology.",
      "It seems we've made encrypting too easy.",
      "You can now run computations on encrypted data, deploy privacy-preserving smart contracts, and still stay fully onchain. Just clean, usable privacy.",
      "It also doesn't help that we're making it simple enough to integrate with a single SDK and fast enough to handle real-world use cases. Maybe we took \"privacy-by-default\" a bit too literally.",
      "And yes, we've noticed...you're not waiting for \"the private future\" anymore. You're building it. In broad daylight.",
      "Looks like our programmable encryption stack created too much peace of mind.",
      "We sincerely apologize.",
      "Warm regards,",
      "???"
    ],
    revealImage: phenixLetter,
    tweetUrl: 'https://x.com/fhenix/status/1988566643560116606?s=46&t=YlcoPGzH76Wz5lz7xYkYaA',
    projectUrl: 'https://fhenix.io/',
    decoyCompanies: [COMPANIES.MINA, COMPANIES.TAIKO]
  }
]

