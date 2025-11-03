/**
 * DOMA Academy Script - Domain Tokenization & DomainFi Education
 * Features: Interactive lessons, quizzes, domain simulator, and progress tracking
 */

const LESSONS = [
    { id: 1, title: "Introduction to DOMA: Bridging Web2 Domains to Web3" },
    { id: 2, title: "Understanding Domain Tokenization & Smart Contracts" },
    { id: 3, title: "DomainFi: Fractional Ownership and Trading" },
    { id: 4, title: "Domain Valuation: What Makes Domains Valuable?" },
    { id: 5, title: "DOMA Protocol Architecture: DNS-Compliant Blockchain" },
    { id: 6, title: "Building with DOMA: Mizu, Interstellar & DomainFi Ecosystem" }
];

const LESSON_CONTENT = {
    1: `<h4>The Domain Problem: An Untapped $350B+ Asset Class</h4><p>Domains have been the internet's original scarce digital assets since the 1980s—literally the OG NFTs. Yet despite their inherent value, the domain industry has remained stuck in the past. A $15+ million domain like chat.com represents a prime location on the internet, comparable to a flagship storefront in Times Square. Yet the market is completely illiquid, manual, and inefficient.</p><h4>Why Domains Matter</h4><p>Every website needs a domain. Every business needs a memorable .com. Premium domains like insurance.com, weather.com, or cars.com are worth millions. Yet despite this, domain trading has "slipped under the radar" due to a complete lack of modern infrastructure. The traditional aftermarket is slow, opaque, and rife with high transaction costs.</p><h4>Enter DOMA: The DomainFi Revolution</h4><p>DOMA Protocol is a purpose-built blockchain designed to do something unprecedented: bring the entire $350B+ domain industry on-chain while preserving full DNS functionality and Internet interoperability. DOMA doesn't create new names in isolated Web3 silos. Instead, DOMA bridges real, traditional domains (.com, .ai, .xyz, etc.) with Web3 ecosystems, unlocking liquidity and programmability without sacrificing Internet utility.</p><h4>The DOMA Mission</h4><p>Transform illiquid domain portfolios into dynamic, tradable, and financially productive assets. Enable fractional ownership so a $15M domain becomes accessible to retail investors with \$500. Create Wall Street sophistication in domain investing. Democratize access to one of the internet's most valuable asset classes.</p><h4>How It Works: The Simple Version</h4><p><strong>1. Tokenization:</strong> DOMA tokenizes existing Web2 domains into ERC-20 tokens, preserving full DNS functionality.</p><p><strong>2. Fractional Ownership:</strong> A \$500,000 domain becomes 500,000 tokens worth \$1 each (or splits differently based on strategy).</p><p><strong>3. Instant Liquidity:</strong> Token holders trade instantly on DEXs or marketplaces—no waiting months for buyers.</p><p><strong>4. DeFi Integration:</strong> Tokenized domains become composable assets for lending, staking, collateral, and more.</p><p><strong>5. Full Functionality:</strong> Domains still resolve to websites, handle email, work with all Internet infrastructure.</p><h4>Why DOMA is Different from ENS</h4><p>ENS and Unstoppable Domains create new names that only work in Web3 corners. DOMA tokenizes the actual Internet that already exists. Real .com domains with proven brand value, existing traffic, and established Web2 utility—now enhanced with Web3 programmability. This is the key differentiator: DOMA bridges Web2 and Web3. It doesn't create a parallel internet; it enhances the existing one.</p><h4>The DOMA Ecosystem</h4><p>DOMA is backed by industry veterans behind .xyz and .tv TLDs. D3 Global is the core contributor, building user-facing products like Mizu (the domain marketplace) and Interstellar (institutional platform). Together, they're creating the full-stack DomainFi economy.</p>`,
    2: `<h4>What is Domain Tokenization?</h4><p>Domain tokenization converts traditional domain ownership into blockchain-based tokens. Instead of owning 100% of a domain registered to one person, the domain is now represented as divisible ERC-20 tokens on the DOMA blockchain.</p><h4>How Tokenization Works on DOMA</h4><p>A domain owner deposits their domain into a smart contract. The smart contract represents the domain as a bundle of tokens. These tokens are ERC-20 standard—meaning they work with any wallet, exchange, or DeFi protocol. Token holders own fractional stakes in the domain asset.</p><h4>Smart Contracts: The Automation Layer</h4><p>DOMA uses smart contracts to manage domain ownership, transfer of rights, lease payments, sale settlements, and collateralization. When a domain generates revenue (through leasing or resale), smart contracts execute instantly—no lawyers, no intermediaries, no delays. The domain's Web2 functionality (DNS resolution) is preserved via DOMA's DNS-compliant architecture.</p><h4>DNS Compliance: The Magic Bridge</h4><p>This is DOMA's breakthrough innovation. Traditional blockchains can't integrate with DNS infrastructure. DOMA is the first DNS-compliant blockchain—meaning tokenized domains maintain full Internet functionality. They still resolve to websites. They handle email. They work with all existing Web infrastructure. You get Web3 programmability without sacrificing Web2 utility.</p><h4>Tokenization Models</h4><p><strong>Full Domain Tokenization:</strong> An entire domain becomes a collection of fungible ERC-20 tokens. 1,000 tokens for a $1M domain = \$1,000 per token. Holders own pro-rata stakes.</p><p><strong>Fractional Pooling:</strong> Multiple domains pool tokens into a single asset. Provides diversification and reduced volatility.</p><p><strong>NFT + Fungible Hybrid:</strong> Core rights (voting, management) as NFTs; economic rights as ERC-20 tokens.</p><h4>Why Smart Contracts Matter for Domains</h4><p>Traditionally, domain transactions require lawyers, escrow agents, brokers—each taking fees and adding delays. Smart contracts execute trustlessly. When buyers and sellers agree on terms on-chain, settlement is instant and irreversible. No risk of non-payment. No fraud. Complete transparency.</p><h4>Revenue Distribution on DOMA</h4><p>If a domain generates revenue (leasing income, resale proceeds), smart contracts automatically calculate and distribute pro-rata to all token holders. A domain earning \$50,000 annually with 10,000 tokens outstanding = \$5 per token per year. Distribution happens automatically—no manual processing, no timing delays.</p>`,
    3: `<h4>What is DomainFi?</h4><p>DomainFi is the application of decentralized finance primitives to domain assets. Just as traditional DeFi protocols build lending/staking/swapping for cryptocurrencies, DomainFi builds these for tokenized domains. Suddenly, domains become yield-generating, tradable, composable assets.</p><h4>Fractional Ownership on DOMA</h4><p>Before DOMA, buying a premium domain meant committing $100K-$15M+ upfront. Not accessible to retail. Now, fractional ownership democratizes entry.</p><p><strong>Example:</strong> A \$500,000 .com domain tokenizes into 500 tokens at \$1,000 each. Or it could tokenize into 50,000 tokens at \$10 each. Now investors with \$100-\$1,000 can own fractions of premium properties.</p><h4>Why Fractional Ownership Matters</h4><p><strong>Capital Efficiency:</strong> Instead of one $500K domain, you can own fractions of 50 different domains with the same capital—massive diversification.</p><p><strong>Liquidity:</strong> Sell your tokens instantly on DEXs. Traditional domain sales take months.</p><p><strong>Accessibility:</strong> Domains were previously gatekept to wealthy investors. Now anyone can participate.</p><h4>Domain Leasing & Revenue Models</h4><p>Domain owners can lease their domains for revenue. Smart contracts handle lease payments, enforcement, and distribution. Token holders receive pro-rata lease income.</p><p><strong>Example:</strong> A .ai domain leases for \$10,000/year. 100,000 tokens outstanding = \$0.10 per token annually. Distributed automatically monthly or quarterly.</p><h4>Trading Domains as DeFi Assets</h4><p>Tokenized domains trade on DEXs like Uniswap or DOMA's native marketplace. Price discovery emerges organically based on supply/demand. Domain values can appreciate based on:</p><p>- Market demand for the extension (.com always in demand; .ai surging with AI boom)</p><p>- Industry trends (insurance.com rises during fintech bull runs)</p><p>- Lease income yields</p><p>- Development status (if community is building on a Web3 TLD like .sol)</p><h4>Collateralization & Lending</h4><p>Tokenized domains can be used as collateral in DeFi protocols. Borrow stablecoins against domain holdings. The domain remains operational; you access liquidity without selling. Lending protocols assess collateral value, loan-to-value ratios, and liquidation mechanics.</p><h4>The D3 App: Your Domain Marketplace</h4><p>The D3 App is where users discover, mint, and trade Web3-native name tokens like ape or shib. While not yet official TLDs (pending ICANN approval), these names function across Web3 and can evolve into future domain extensions. Full DomainFi trading on-chain.</p>`,
    4: `<h4>What Makes Domains Valuable?</h4><p>Domain value depends on multiple factors: extension, length, keyword quality, brandability, search traffic, lease income potential, and market demand.</p><h4>Extension Premium Hierarchy</h4><p><strong>.com:</strong> Universal standard, highest value, proven brand, works globally. \$5-$50+ per character.</p><p><strong>.ai:</strong> Emerging tech, AI boom demand, 3 letters = premium. \$500-\$5,000+ per character.</p><p><strong>.io:</strong> Startup favorite, tech-forward perception. \$100-\$1,000+ per character.</p><p><strong>.xyz, .co:</strong> Generic but tradable. \$10-$100+ per character.</p><p><strong>.sol, .anime, .shib:</strong> Web3-native, community-driven value, speculative.</p><h4>Character Length & Memorability</h4><p>Shorter = more valuable (exponentially). 1-2 character domains are ultra-premium ($100K-$M+). 3 characters 1/10th the price. 4+ characters 1/100th. Memorability and brandability drive huge premiums.</p><h4>Keyword Quality</h4><p>Generic keywords (chat.com, insurance.com, weather.com) command millions. They capture search traffic and have immediate business utility. niche keywords are less valuable but still tradable.</p><h4>Historical Sales & Comps</h4><p>Domain valuation uses comparable sales. chat.com sold for \$15.5M. weather.com sold for $9M. These set price floors for similar domains. DOMA brings transparency to this market via on-chain pricing history.</p><h4>Lease Income as Valuation Driver</h4><p>Domains that generate annual lease income ($1K-$100K+) are valued based on yield multiples. A domain generating $50K/year might be valued at 10-20x annual income ($500K-$1M). Tokenization makes this yield visible and tradable.</p><h4>DOMA Valuation Oracles</h4><p>DOMA integrates price oracles to provide independent domain valuations. Reflects marketplace transactions, comparable sales, and income potential. Accurate pricing prevents manipulation and helps collateralization assessments.</p><h4>Investment Thesis</h4><p>Domains are digital real estate. Supply is fixed (can't create new .com domains—ICANN controls new TLDs). Demand grows with internet adoption and AI. Tokenization unlocks $350B+ of trapped capital. Early adopters can accumulate premium domains at current prices—potential multi-bagger returns as DomainFi market matures.</p>`,
    5: `<h4>DOMA Protocol: Architecture Overview</h4><p>DOMA Protocol is an EVM-compatible Layer 2 blockchain built on the OP Stack (same infrastructure powering Optimism). This ensures Ethereum-grade security, fast finality, low gas fees, and native Solidity/Hardhat compatibility.</p><h4>DNS Compliance: The Core Innovation</h4><p>DOMA is the first DNS-compliant blockchain. This means tokenized domains maintain full Internet functionality while gaining Web3 programmability. The domain infrastructure bridges DOMA with traditional DNS, enabling seamless interoperability. No parallel internet—enhanced existing internet.</p><h4>Supported Domain Extensions</h4><p><strong>ICANN-Approved Domains:</strong> .com, .ai, .xyz, .io, .co, .tv, and 1,000+ others. These have established brand value and web traffic.</p><p><strong>Web3-Native Extensions:</strong> .sol, .anime, .shib, .ape. Future-approved by ICANN as community demand grows.</p><h4>On-Chain Domain Registry</h4><p>All tokenized domains are registered on-chain in DOMA's domain registry smart contract. Ownership is tracked on-chain forever. No central database that can fail. Truly decentralized domain ownership.</p><h4>Smart Contract Architecture</h4><p><strong>Domain Smart Contract:</strong> Represents individual domain, minting associated tokens, managing lease agreements, and handling settlement.</p><p><strong>DOMA Registry:</strong> Master contract managing all domains, tracking ownership, and enforcing rules.</p><p><strong>Token Standards:</strong> ERC-20 for fungible tokens; optional ERC-721 for governance/voting rights.</p><p><strong>Marketplace Contracts:</strong> Enable listing, bidding, and OTC trading of domain tokens.</p><h4>Multi-Chain Interoperability</h4><p>DOMA's tokens are wrapped and bridged to Ethereum, Solana, Base, and Avalanche. Domain tokens can trade across multiple chains. Users access liquidity wherever they prefer—Ethereum, Solana, or native DOMA.</p><h4>Doma Forge: Developer Ecosystem</h4><p>DOMA Forge provides APIs, SDKs, smart contract templates, and grants for builders. Develop dApps, marketplaces, analytics, financial protocols—all leveraging tokenized domains. Robust tooling accelerates DomainFi innovation.</p><h4>Security & Audits</h4><p>DOMA smart contracts are professionally audited. Open-source code enables community review. Full transparency ensures trust in the protocol.</p>`,
    6: `<h4>The DOMA Ecosystem: D3, Mizu, Interstellar, & Forge</h4><p><strong>D3 Global:</strong> Core team building DomainFi infrastructure. Led by industry veterans from .xyz, .tv TLDs. Raises institutional capital ($25M Series A from Paradigm, Coinbase Ventures, Polygon Labs). Focused on product development, partnerships, and ecosystem growth.</p><p><strong>Mizu:</strong> The user-facing marketplace for Web3-native name tokens (ape, shib, etc.). Discover, mint, and trade domain name tokens. Full DomainFi trading on-chain. Starting point for retail users entering domain investing.</p><p><strong>Interstellar:</strong> Institutional platform for professional domain traders and portfolio managers. Advanced features, batch operations, sophisticated analytics. For serious domain operators.</p><p><strong>DOMA Forge:</strong> Developer program providing grants, technical support, and early tooling. Build dApps leveraging tokenized domains. Democratizes access to DOMA infrastructure.</p><h4>Use Cases Enabled by DOMA</h4><p><strong>Portfolio Diversification:</strong> Own fractions of 50+ premium domains. Spread risk across extensions, industries, and geographies.</p><p><strong>Yield Generation:</strong> Collect lease income from tokenized domains. Passive revenue streams on-chain.</p><p><strong>Speculation & Trading:</strong> Trade domain tokens for appreciation. Capitalize on .ai boom, Web3 adoption, or specific industry trends.</p><p><strong>Web3 Integration:</strong> Use domains as identity layers in dApps. .sol domains as Solana wallet addresses. Community-owned extensions (.shib, .ape) as membership tokens.</p><p><strong>DeFi Composability:</strong> Use domain tokens as collateral in lending protocols. Farm yield across multiple protocols. Leverage DeFi stacking.</p><h4>Getting Started with DOMA</h4><p><strong>1. Understand the Basics:</strong> Read docs at docs.doma.xyz. Understand tokenization, DNS compliance, and DomainFi.</p><p><strong>2. Start Small:</strong> Buy some Web3-native name tokens on Mizu (\$100-\$1,000). Get feel for trading, custody, and on-chain interactions.</p><p><strong>3. Research Domains:</strong> Study historical sales. Understand extension premiums. Follow domain market trends.</p><p><strong>4. Diversify:</strong> As you scale, allocate across different extensions, quality tiers, and lease income levels.</p><p><strong>5. Build or Trade:</strong> If you're technical, integrate DOMA into dApps via Forge. If you're investor-focused, manage portfolio for appreciation and yield.</p><h4>The Vision: $1T+ DomainFi Economy</h4><p>DOMA aims to transform domains from static digital assets into dynamic, programmable, yield-generating instruments. Current $350B domain market is just the beginning. As DomainFi matures and DeFi integrates domain collateral, the addressable market could reach $1T+. Early adopters are positioning for generational wealth creation.</p>`
};

const QUIZZES = {
    1: [
        { q: "What is the global domain market currently valued at?", options: ["$1B", "$10B", "$50B", "$350B+"], answer: 1, hint: "Check the valuation section" },
        { q: "What makes DOMA different from ENS or Unstoppable Domains?", options: ["DOMA is cheaper", "DOMA tokenizes actual Web2 domains while others create Web3-only names", "DOMA has more users", "They're identical"], answer: 1, hint: "Review the differentiation section" },
        { q: "How much did chat.com sell for historically?", options: ["$1M", "$5M", "\$15.5M", "$50M"], answer: 2, hint: "Check domain valuation examples" },
        { q: "Which Layer 2 technology does DOMA use?", options: ["Arbitrum", "OP Stack", "StarkNet", "Polygon"], answer: 1, hint: "Review DOMA Protocol tech stack" },
        { q: "What is DOMA's core mission?", options: ["Create new domains", "Tokenize 362M+ existing domains for DeFi", "Compete with ICANN", "Replace DNS"], answer: 1, hint: "Check the mission statement" }
    ],
    2: [
        { q: "What is domain tokenization?", options: ["Buying domain coins", "Converting domains into blockchain tokens", "DNS registration", "Web hosting"], answer: 1, hint: "Review tokenization definition" },
        { q: "What does 'DNS-compliant' mean for DOMA?", options: ["Requires central server", "Tokenized domains still work on Internet", "Only works in Web3", "No Internet functionality"], answer: 1, hint: "Check DNS compliance section" },
        { q: "What's the key advantage of smart contracts for domain transactions?", options: ["Cheaper hosting", "Instant execution without intermediaries", "Larger file sizes", "Better performance"], answer: 1, hint: "Review smart contract benefits" },
        { q: "If a domain earns $50K/year with 10,000 tokens, how much does each token earn annually?", options: ["\$0.50", "\$5", "\$50", "\$500"], answer: 1, hint: "Calculate: 50000 / 10000" },
        { q: "How are revenue distributions handled on DOMA?", options: ["Manual wire transfers", "Automatic via smart contracts", "Monthly checks", "Requires lawyer approval"], answer: 1, hint: "Check revenue distribution section" }
    ],
    3: [
        { q: "What is DomainFi?", options: ["Domain-focused DeFi primitives for domains", "A new domain extension", "Domain registration service", "Email platform"], answer: 0, hint: "Review DomainFi definition" },
        { q: "A $500K domain tokenizes into 500 tokens. What's the price per token?", options: ["\$100", "\$500", "\$1,000", "\$5,000"], answer: 2, hint: "Divide: 500,000 / 500" },
        { q: "What's the main advantage of fractional domain ownership?", options: ["Faster registration", "Lower capital needed; more diversification", "Better performance", "Higher security"], answer: 1, hint: "Check fractional ownership benefits" },
        { q: "Can tokenized domains be used as collateral in DeFi?", options: ["No", "Only on specific exchanges", "Yes, in lending protocols", "Not yet"], answer: 2, hint: "Review collateralization section" },
        { q: "What is the D3 App?", options: ["A blockchain", "Marketplace for Web3 name tokens", "Email service", "DNS server"], answer: 1, hint: "Check D3 App description" }
    ],
    4: [
        { q: "Which domain extension typically commands the highest value?", options: [".ai", ".xyz", ".com", ".io"], answer: 2, hint: "Review extension hierarchy" },
        { q: "How much more valuable is a 2-character domain vs 4-character?", options: ["Same price", "2x more", "10x more", "100x+ more"], answer: 3, hint: "Check character length section" },
        { q: "What makes keyword domains (like weather.com) valuable?", options: ["Shorter names", "They capture search traffic and have business utility", "Better marketing", "Exclusive extensions"], answer: 1, hint: "Review keyword quality section" },
        { q: "If a domain generates $50K/year and is valued at 15x income, what's its price?", options: ["$50K", "$250K", "$750K", "\$1.5M"], answer: 2, hint: "Calculate: 50K x 15" },
        { q: "What's the investment thesis for domain appreciation?", options: ["Unlimited supply", "Supply is fixed; demand grows with internet adoption", "No real value", "Declining market"], answer: 1, hint: "Check investment thesis section" }
    ],
    5: [
        { q: "What is DOMA built on?", options: ["Ethereum mainnet", "OP Stack (Layer 2)", "Bitcoin", "Polkadot"], answer: 1, hint: "Review DOMA architecture" },
        { q: "How many domain extensions can DOMA support?", options: ["Only .com", "5-10", "1,000+ ICANN + Web3-native", "Unlimited only Web3"], answer: 2, hint: "Check supported extensions" },
        { q: "What does 'EVM-compatible' mean?", options: ["Works with Ethereum tools/Solidity", "More expensive", "Less secure", "Slower speed"], answer: 0, hint: "Review tech stack details" },
        { q: "What is DOMA Forge?", options: ["Mining pool", "Developer program with grants and tools", "Marketplace", "Tokenization service"], answer: 1, hint: "Check Forge section" },
        { q: "Are DOMA domain tokens bridged to other chains?", options: ["No", "Yes, to Ethereum, Solana, Base, Avalanche", "Only Ethereum", "Only Solana"], answer: 1, hint: "Review multi-chain section" }
    ],
    6: [
        { q: "Who are the core team behind DOMA?", options: ["Anonymous", "D3 Global from .xyz, .tv TLDs", "ICANN employees", "ENS team"], answer: 1, hint: "Check D3 background" },
        { q: "What Series funding did D3 raise?", options: ["$5M Seed", "$25M Series A", "$100M Series B", "No funding"], answer: 1, hint: "Review funding details" },
        { q: "What investors backed D3 Global?", options: ["Only retail", "Paradigm, Coinbase Ventures, Polygon Labs", "Only crypto VCs", "Anonymous"], answer: 1, hint: "Check investor list" },
        { q: "For a beginner starting with DOMA, what's the first step?", options: ["Tokenize your domain", "Read docs and buy small amount of name tokens", "Become a developer", "Wait for mainstream adoption"], answer: 1, hint: "Review getting started section" },
        { q: "What's the long-term addressable market for DomainFi?", options: ["$350B (current)", "$500B", "$1T+", "Declining market"], answer: 2, hint: "Check vision section" }
    ]
};

const FLASHCARDS = [
    { term: "Domain Tokenization", definition: "Converting traditional domain ownership into blockchain-based ERC-20 tokens, enabling fractional ownership and automated transactions." },
    { term: "DomainFi", definition: "Application of decentralized finance primitives to tokenized domains, enabling lending, trading, staking, and yield generation." },
    { term: "DNS Compliance", definition: "DOMA's breakthrough: tokenized domains maintain full Internet functionality while gaining Web3 programmability. They still resolve to websites and handle email." },
    { term: "Fractional Ownership", definition: "Owning a portion of a domain asset via tokens. A $500K domain becomes accessible to retail with \$100-$1K minimum entry." },
    { term: "Extension Premium", definition: "Pricing hierarchy for domain types: .com (highest), .ai (premium), .io (high), .xyz (standard), .com domains worth 10-100x more than .io per character." },
    { term: "ERC-20 Token", definition: "Ethereum token standard used by DOMA for fungible domain tokens. Works with any wallet, DEX, or DeFi protocol." },
    { term: "OP Stack", definition: "Modular blockchain infrastructure used by DOMA to build Layer 2. Ensures Ethereum-grade security, fast finality, and low fees." },
    { term: "Mizu", definition: "D3's user-facing marketplace for discovering, minting, and trading Web3-native name tokens like ape, shib, and other community extensions." },
    { term: "Interstellar", definition: "D3's institutional platform for professional domain traders, portfolio managers, and large-scale domain operations with advanced analytics." },
    { term: "DOMA Forge", definition: "Developer program providing grants, technical support, documentation, and smart contract templates for building DomainFi applications." },
    { term: "Domain Valuation", definition: "Price of a domain determined by extension, length, keyword quality, search traffic, lease income potential, and comparable market sales." },
    { term: "Collateralization", definition: "Using tokenized domains as collateral in DeFi lending protocols to borrow stablecoins while maintaining domain ownership and functionality." },
    { term: "D3 Global", definition: "Core team behind DOMA Protocol, led by industry veterans from .xyz and .tv TLDs, raised $25M Series A from Paradigm and other tier-1 VCs." },
    { term: "Web3-Native Domains", definition: "New domain extensions designed for Web3 communities (.sol for Solana, .ape for ApeCoin, .shib for Shiba Inu). Future ICANN-approved pending community demand." },
    { term: "Lease Income", definition: "Revenue generated from leasing tokenized domains. Smart contracts automatically distribute pro-rata to all token holders monthly/quarterly." },
    { term: "Smart Contract", definition: "Self-executing code on blockchain managing domain ownership, transfers, settlements, and revenue distribution without intermediaries." },
    { term: "Multi-Chain Interoperability", definition: "DOMA domain tokens bridged to Ethereum, Solana, Base, Avalanche. Users trade and use domains across preferred blockchain." },
    { term: "ICANN-Approved Domains", definition: "Traditional domains with full Internet authority approval (.com, .ai, .xyz, .io, etc.). Have brand value, web traffic, and proven utility." },
    { term: "Yield Generation", definition: "Earning passive returns from tokenized domain ownership through lease income, appreciation, or DeFi farming." },
    { term: "Domamine", definition: "Cultural concept within DOMA community: the energy/engagement that fuels DomainFi ecosystem through creativity, contributions, and community participation." }
];

const LIBRARY_ENTRIES = [
    { title: "The History of Domains: From Web1 to DomainFi", content: "Domains have existed since 1985, predating HTTP by 3 years. .com launched in 1985. During the dot-com boom (1995-2000), domains became speculative assets. Some sold for millions (business.com = \$7.5M in 1997). Market matured into traditional aftermarket. Until DOMA, domains never entered DeFi. Now they're poised to become the largest new asset class on blockchain." },
    { title: "Extension Economics: .com Dominance", content: ".com dominates because it's universally recognized, has highest search engine value, and strongest brand perception. ~55% of all domains are .com. Price premiums are extreme: chat.com = \$15.5M while similar Web3 names trade for $50K. As DomainFi matures, .com scarcity will drive continued value." },
    { title: "The AI Domain Boom: Why .ai is Surging", content: "With AI explosion, .ai domains exploded in value. Insurance.ai sold for $500K. Weather.ai worth $250K+. .ai supply is limited (only for Anguilla, a small Caribbean island). Scarcity + demand = 10-50x appreciation in 2023-2024. DOMA positions token holders to capture continued .ai appreciation." },
    { title: "Web3-Native Domains: Community Ownership Models", content: ".sol works as wallet addresses on Solana—immensely valuable for users and devs. .ape represents ApeCoin community. .shib represents Shiba Inu community. These extensions turn domains into community membership tokens, enabling new governance and utility models impossible in Web2." },
    { title: "Lease Models: Recurring Revenue from Domains", content: "Premium domains generate annual lease income. Parked domains earn $1K-$100K/year from parking services. Active business domains lease for $10K-$500K+ annually. Smart contracts automate lease collection, enforcement, and distribution. Token holders receive steady passive income." },
    { title: "Domain Valuation Science: Comps & Oracles", content: "Domain valuation historically relied on opaque broker estimates. DOMA introduces on-chain valuation oracles based on comparable sales, lease income multiples, and market data. Brings transparency to traditionally opaque market. Enables accurate collateral assessments for lending protocols." },
    { title: "Fractional Ownership Use Cases", content: "Enables portfolio diversification impossible in Web2. Instead of $15M to own chat.com, own 1% for $150K (or fractions for smaller capital). Enables thematic investing: AI bull markets buy .ai domains, fintech bull markets buy finance.com fractions. Collective investing democratizes access." },
    { title: "DNS Compliance Technology: How It Works", content: "DOMA bridges DOMA blockchain registry with traditional DNS infrastructure via special nameservers. When domain resolves, lookup queries hit both traditional DNS and DOMA chain simultaneously. Domain owners retain Web2 functionality while gaining Web3 programming. True interoperability, not a parallel internet." },
    { title: "Smart Contract Risk: Audits & Security", content: "DOMA smart contracts undergo professional security audits. Code is open-source for community review. Single-signature vulnerabilities eliminated via multisig timelock governance. Liquidation mechanisms tested under stress scenarios. Regular security upgrades patch emerging threats." },
    { title: "The Four Horsemen: Domain Trading Strategies", content: "1) Registry Arbitrage: Buy cheap unappreciated domains, tokenize on DOMA for liquidity premium. 2) Thematic Investing: Buy extension clusters (.ai for AI hype, .sol for Solana L1). 3) Yield Farming: Stake domain tokens in DOMA Forge protocols. 4) M&A Aggregation: Token pools buy large portfolios, sell tokenized fractions." },
    { title: "Cross-Chain Domain Liquidity", content: "DOMA tokens bridge to Ethereum, Solana, Base, Avalanche. Traders access liquidity across chains. Arbitrage opportunities between chains. L1 developers integrate DOMA domains into applications on their networks. Multi-chain liquidity attracts massive volume." },
    { title: "Identity Revolution: .sol Addresses & .ape Governance", content: ".sol domains revolutionize Solana user experience. Instead of long wallet addresses, memorable identities. .ape holders get ApeCoin governance voting tied to domain reputation. Domains become identity layers, reputation systems, and governance tokens simultaneously." },
    { title: "Institutional Adoption: Interstellar & Professional Trading", content: "Interstellar platform attracts domain portfolio managers, family offices, VCs with domain investments. Batch operations, advanced analytics, institutional-grade custody. Professional traders using DOMA to consolidate fragmented domain assets into single DeFi platform." },
    { title: "Developer Ecosystem: Doma Forge Acceleration", content: "Forge grants and technical support fast-track builders. Developers create analytics dashboards (domain price oracles), lending protocols (use domains as collateral), portfolio management tools, and community platforms. Ecosystem effects compound as tooling matures." },
    { title: "The DomainFi Bull Case: Path to $1T Market", content: "$350B current domain market + $10T+ global real estate parallels + blockchain's liquidity multiplier = potential $1T+ DomainFi market cap. Early DOMA participants capturing value asymmetrically. Similar to early Ethereum positions—generational wealth creation for informed investors positioning now." }
];

let userProgress = initializeProgress();
let currentQuizState = null;
let domainSimulatorState = null;
let priceHistory = [];
let animationFrameId = null;
let chart = null;

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    updateStreak();
    renderLessonsList();
    renderFlashcards();
    renderLibrary();
    updateGlobalProgress();
    showSection('home');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(e.target.getAttribute('data-section'));
        });
    });
});

function initializeProgress() {
    const defaultState = { streak: 0, lastLogin: null, lessons: {} };
    LESSONS.forEach(lesson => {
        defaultState.lessons[lesson.id] = { completed: false, quizPassed: false, readProgress: 0 };
    });

    const saved = localStorage.getItem('domaProgress');
    if (!saved) return defaultState;

    const parsed = JSON.parse(saved);
    LESSONS.forEach(lesson => {
        if (!parsed.lessons[lesson.id]) {
            parsed.lessons[lesson.id] = { completed: false, quizPassed: false, readProgress: 0 };
        }
    });
    return parsed;
}

function saveProgress() {
    localStorage.setItem('domaProgress', JSON.stringify(userProgress));
    updateGlobalProgress();
}

// NAVIGATION
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');

    const navItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (navItem) navItem.classList.add('active');

    if (sectionId === 'certificate') {
        checkCertificateEligibility();
    }
}

// PROGRESS & STREAK
function updateGlobalProgress() {
    const total = LESSONS.length;
    const passed = LESSONS.filter(lesson => userProgress.lessons[lesson.id]?.quizPassed).length;
    const percent = total ? Math.round((passed / total) * 100) : 0;

    const bar = document.getElementById('overall-progress-bar');
    const label = document.getElementById('progress-percent');
    if (bar) bar.style.width = `${percent}%`;
    if (label) label.textContent = `${percent}% Completed (${passed}/${total} Lessons Passed)`;

    renderLessonsList();
}

function updateStreak() {
    const today = new Date().toDateString();
    const last = userProgress.lastLogin;
    let streak = userProgress.streak || 0;

    if (last !== today) {
        if (last) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            streak = (last === yesterday.toDateString()) ? streak + 1 : 1;
        } else {
            streak = 1;
        }
        userProgress.streak = streak;
        userProgress.lastLogin = today;
    }

    const streakEl = document.getElementById('current-streak');
    const streakElHeader = document.getElementById('current-streak-header');
    if (streakEl) streakEl.textContent = `${userProgress.streak} Days`;
    if (streakElHeader) streakElHeader.textContent = `${userProgress.streak} Days`;

    saveProgress();
}

// LESSONS
function renderLessonsList() {
    const container = document.getElementById('lessons-list');
    if (!container) return;
    container.innerHTML = '';

    LESSONS.forEach((lesson, index) => {
        const status = userProgress.lessons[lesson.id];
        const isCompleted = !!status.quizPassed;
        const isLocked = index > 0 && !userProgress.lessons[lesson.id - 1].quizPassed;

        const card = document.createElement('div');
        card.className = `lesson-card section-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;

        let statusText = 'Start Lesson';
        let icon = '<i class="fas fa-play"></i>';
        if (isLocked) {
            statusText = 'Locked';
            icon = '<i class="fas fa-lock"></i>';
        } else if (isCompleted) {
            statusText = 'Quiz Passed';
            icon = '<i class="fas fa-check-circle"></i>';
        }

        card.innerHTML = `
            <p>Lesson ${lesson.id}</p>
            <h3>${lesson.title}</h3>
            <div class="lesson-status">
                <span>${statusText}</span>
                ${icon}
            </div>
        `;

        if (!isLocked) {
            card.addEventListener('click', () => openLesson(lesson.id));
        }

        container.appendChild(card);
    });
}

function openLesson(id) {
    showSection('lesson-viewer');

    document.getElementById('lesson-title').textContent = LESSONS[id - 1].title;
    document.getElementById('lesson-content-display').innerHTML = LESSON_CONTENT[id];

    const quizArea = document.getElementById('quiz-area');
    const lessonNavFooter = document.getElementById('lesson-navigation-footer');
    const nextLessonBtn = document.getElementById('next-lesson-btn');

    if (userProgress.lessons[id].quizPassed) {
        quizArea.classList.add('hidden');
        lessonNavFooter.classList.remove('hidden');
        
        const nextLessonId = id + 1;
        if (nextLessonId <= LESSONS.length) {
            nextLessonBtn.onclick = () => openLesson(nextLessonId);
            nextLessonBtn.textContent = `Go to Lesson ${nextLessonId}: ${LESSONS[nextLessonId-1].title} `;
            const arrowIcon = document.createElement('i');
            arrowIcon.className = 'fas fa-arrow-right';
            nextLessonBtn.appendChild(arrowIcon);
        } else {
            nextLessonBtn.textContent = 'View Certificate ';
            const trophyIcon = document.createElement('i');
            trophyIcon.className = 'fas fa-trophy';
            nextLessonBtn.appendChild(trophyIcon);
            nextLessonBtn.onclick = () => showSection('certificate');
        }
    } else {
        quizArea.classList.remove('hidden');
        lessonNavFooter.classList.add('hidden');
        startStepByStepQuiz(id);
    }

    const wrapper = document.querySelector('.lesson-content-wrapper');
    wrapper.scrollTop = 0;
    wrapper.onscroll = () => updateReadProgress(id, wrapper);
    updateReadProgress(id, wrapper, true);
}

function updateReadProgress(lessonId, container, init = false) {
    const scrollable = container.scrollHeight - container.clientHeight;
    const scrolled = container.scrollTop;
    let progress = 0;

    if (scrollable > 0) {
        progress = Math.min(100, Math.round((scrolled / scrollable) * 100));
    }

    if (init) {
        progress = userProgress.lessons[lessonId].readProgress || 0;
    } else {
        userProgress.lessons[lessonId].readProgress = progress;
        saveProgress();
    }

    document.getElementById('lesson-read-progress').style.width = `${progress}%`;
    document.getElementById('read-progress-percent').textContent = `${progress}%`;
}

// ANSWER SHUFFLING
function shuffleAnswers(options, correctAnswerIndex) {
    const indexed = options.map((opt, idx) => ({ opt, idx }));
    
    for (let i = indexed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }
    
    const correctIndex = indexed.findIndex(item => item.idx === correctAnswerIndex);
    
    return {
        options: indexed.map(item => item.opt),
        correctIndex: correctIndex
    };
}

// QUIZ
function startStepByStepQuiz(lessonId) {
    currentQuizState = {
        lessonId: lessonId,
        questions: QUIZZES[lessonId],
        currentIndex: 0,
        userAnswers: new Array(QUIZZES[lessonId].length).fill(null),
        started: false
    };

    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-question-display').innerHTML = '';
    document.getElementById('quiz-navigation').classList.remove('hidden');
    document.getElementById('quiz-next-btn').onclick = handleQuizNext;
    document.getElementById('quiz-next-btn').textContent = "Next Question";
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const state = currentQuizState;
    const q = state.questions[state.currentIndex];
    
    document.getElementById('quiz-step-indicator').textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
    
    const shuffledOptions = shuffleAnswers(q.options, q.answer);
    
    const container = document.getElementById('quiz-question-display');
    container.innerHTML = `
        <div class="quiz-question-single">
            <h4>${q.q}</h4>
            ${shuffledOptions.options.map((opt, idx) => `
                <div class="quiz-option" data-option="${idx}">
                    <input type="radio" name="current-question" value="${idx}" id="opt-${idx}">
                    <label for="opt-${idx}">${opt}</label>
                </div>
            `).join('')}
        </div>
    `;
    
    if (state.userAnswers[state.currentIndex] !== null && typeof state.userAnswers[state.currentIndex] === 'object') {
        const prevSelected = container.querySelector(`.quiz-option[data-option="${state.userAnswers[state.currentIndex].shuffledIndex}"]`);
        if (prevSelected) {
            prevSelected.classList.add('selected');
            prevSelected.querySelector('input').checked = true;
        }
    }

    container.querySelectorAll('.quiz-option').forEach(opt => {
        opt.onclick = () => {
            container.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
            state.userAnswers[state.currentIndex] = {
                shuffledIndex: parseInt(opt.dataset.option),
                correctIndex: shuffledOptions.correctIndex,
                original: q.answer
            };
        };
    });
}

function handleQuizNext() {
    const state = currentQuizState;
    const selectedValue = state.userAnswers[state.currentIndex];
    
    if (selectedValue === null || selectedValue === undefined) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const state = currentQuizState;
    let correct = 0;
    
    const reviewHTML = state.questions.map((q, idx) => {
        const userAns = state.userAnswers[idx];
        
        let isCorrect;
        
        if (typeof userAns === 'object' && userAns !== null && userAns.shuffledIndex !== undefined) {
            isCorrect = userAns.shuffledIndex === userAns.correctIndex;
        } else if (typeof userAns === 'number') {
            isCorrect = userAns === q.answer;
        } else {
            isCorrect = false;
        }
        
        if (isCorrect) correct++;
        
        const correctAnswerText = q.options[q.answer];

        return `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>Q${idx + 1}:</strong> ${q.q}<br>
                ${!isCorrect ? `<strong>Correct answer:</strong> ${correctAnswerText}<br>` : ''}
                ${!isCorrect ? `<em>Hint:</em> ${q.hint}` : '<strong style="color: #2ECC71;">✓ Correct!</strong>'}
            </div>
        `;
    }).join('');
    
    const passed = correct >= 4;
    
    document.getElementById('quiz-question-display').innerHTML = '';
    document.getElementById('quiz-navigation').classList.add('hidden');
    
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.classList.remove('hidden');
    
    document.getElementById('quiz-score').innerHTML = `
        <strong class="${passed ? 'result-message success' : 'result-message fail'}">
            You scored ${correct} out of ${state.questions.length}. ${passed ? '✅ You passed!' : '❌ You need 4 correct to pass.'}
        </strong>
    `;
    
    document.getElementById('quiz-review').innerHTML = reviewHTML;
    document.getElementById('quiz-hints').innerHTML = '';

    if (!passed) {
        document.getElementById('quiz-hints').innerHTML = `
            <h4><i class="fas fa-lightbulb"></i> Study Tips:</h4>
            <p>Review the lesson material carefully. Domain tokenization is complex—take your time! Try again when ready.</p>
        `;
        document.getElementById('retry-quiz-btn').classList.remove('hidden');
        document.getElementById('retry-quiz-btn').onclick = () => startStepByStepQuiz(state.lessonId);
        document.getElementById('finish-quiz-btn').classList.add('hidden');
    } else {
        userProgress.lessons[state.lessonId].quizPassed = true;
        userProgress.lessons[state.lessonId].completed = true;
        saveProgress();
        showLessonCompletedNotification(state.lessonId);
        
        document.getElementById('finish-quiz-btn').classList.remove('hidden');
        document.getElementById('finish-quiz-btn').onclick = () => showSection('lessons');
        document.getElementById('retry-quiz-btn').classList.add('hidden');
    }
}

function showLessonCompletedNotification(lessonId) {
    const notification = document.getElementById('lesson-completed-notification');
    const message = document.getElementById('completed-message');
    message.textContent = `Lesson ${lessonId} Completed! 🚀`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}

// FLASHCARDS
function renderFlashcards() {
    const grid = document.getElementById('flashcard-grid');
    if (!grid) return;
    grid.innerHTML = '';

    FLASHCARDS.forEach(cardInfo => {
        const wrapper = document.createElement('div');
        wrapper.className = 'flashcard-wrapper';

        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-front section-card">${cardInfo.term}</div>
            <div class="flashcard-back section-card">
                <p><strong>${cardInfo.term}</strong></p>
                <p>${cardInfo.definition}</p>
            </div>
        `;
        card.addEventListener('click', () => card.classList.toggle('flipped'));

        wrapper.appendChild(card);
        grid.appendChild(wrapper);
    });
}

// LIBRARY
function renderLibrary() {
    const container = document.getElementById('library-content');
    if (!container) return;
    container.innerHTML = '';

    LIBRARY_ENTRIES.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'library-item section-card';
        item.innerHTML = `
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
        `;
        container.appendChild(item);
    });
}

// CERTIFICATE
function checkCertificateEligibility() {
    const total = LESSONS.length;
    const completed = LESSONS.filter(lesson => userProgress.lessons[lesson.id]?.quizPassed).length;

    const message = document.getElementById('certificate-message');
    const img = document.getElementById('certificate-display');
    const button = document.getElementById('download-certificate');

    if (completed === total) {
        message.textContent = "🎉 Congratulations! You've mastered DomainFi!";
        img.classList.remove('hidden');
        button.classList.remove('hidden');
        button.onclick = () => alert("Certificate ready! You're now certified in DOMA Protocol and DomainFi. Visit start.doma.xyz to begin trading domains.");
        triggerConfetti();
    } else {
        message.textContent = `Complete ${total - completed} more lesson${total - completed !== 1 ? 's' : ''} to earn your certification.`;
        img.classList.add('hidden');
        button.classList.add('hidden');
    }
}

function triggerConfetti() {
    const confettiColors = ['#4A4FFF', '#FFFFFF', '#2ECC71', '#FFB800', '#5B5FFF'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.setProperty('--confetti-color', confettiColors[Math.floor(Math.random() * confettiColors.length)]);
        confetti.style.setProperty('--x', `${Math.random() * 200 - 100}vw`);
        confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 2}s`);
        confetti.style.setProperty('--fall-delay', `${Math.random() * 5}s`);
        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', () => confetti.remove());
    }
}

// DOMAIN SIMULATOR
function openDomainSimulator() {
    document.getElementById('domain-simulator-modal').classList.remove('hidden');
    document.getElementById('tokenization-setup').classList.remove('hidden');
    document.getElementById('trading-phase').classList.add('hidden');
    priceHistory = [];
    domainSimulatorState = null;
}

function closeDomainSimulator() {
    document.getElementById('domain-simulator-modal').classList.add('hidden');
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
}

function selectTokenType(type) {
    document.getElementById('fractional-btn').classList.toggle('active', type === 'fractional');
    document.getElementById('nft-btn').classList.toggle('active', type === 'nft');
}

function tokenizeDomain() {
    const extension = document.getElementById('domain-extension').value;
    const quality = document.getElementById('domain-quality').value;
    const valuation = parseFloat(document.getElementById('domain-valuation').value);
    const isFractional = document.getElementById('fractional-btn').classList.contains('active');

    if (!extension || !quality || !valuation) {
        alert('Please fill all fields');
        return;
    }

    let tokenCount = 1000;
    if (quality === 'premium') tokenCount = 500;
    else if (quality === 'common') tokenCount = 5000;

    const exampleName = ['example', 'demo', 'alpha', 'beta'][Math.floor(Math.random() * 4)];

    domainSimulatorState = {
        domainName: exampleName + extension,
        extension: extension,
        quality: quality,
        valuation: valuation,
        tokenCount: tokenCount,
        tokenPrice: valuation / tokenCount,
        tokenType: isFractional ? 'Fractional' : 'NFT',
        currentTokenPrice: valuation / tokenCount,
        currentValuation: valuation,
        tradingVolume: 0,
        holders: 1,
        listings: 0,
        weekCount: 0
    };

    priceHistory = [domainSimulatorState.tokenPrice];

    document.getElementById('tokenization-setup').classList.add('hidden');
    document.getElementById('trading-phase').classList.remove('hidden');
    
    updateSimulatorDisplay();
    startPriceAnimation();
}

function startPriceAnimation() {
    const generatePrice = () => {
        const lastPrice = priceHistory[priceHistory.length - 1];
        const volatility = domainSimulatorState.extension === '.ai' ? 0.005 : 0.002;
        const change = (Math.random() - 0.5) * lastPrice * volatility;
        const newPrice = Math.max(lastPrice * 0.5, lastPrice + change);
        priceHistory.push(newPrice);
    };

    const updateDisplay = () => {
        if (priceHistory.length < 100) {
            generatePrice();
        } else {
            priceHistory.shift();
            generatePrice();
        }

        domainSimulatorState.currentTokenPrice = priceHistory[priceHistory.length - 1];
        domainSimulatorState.currentValuation = domainSimulatorState.currentTokenPrice * domainSimulatorState.tokenCount;
        domainSimulatorState.tradingVolume += Math.random() * 1000;
        domainSimulatorState.holders = Math.min(100, 1 + Math.floor(domainSimulatorState.weekCount / 2));
        domainSimulatorState.listings = Math.max(0, Math.floor(domainSimulatorState.holders / 5));

        updateSimulatorDisplay();
        updatePriceChart();

        animationFrameId = requestAnimationFrame(updateDisplay);
    };

    updateDisplay();
}

function updateSimulatorDisplay() {
    const state = domainSimulatorState;
    
    const formatPrice = (p) => '$' + (typeof p === 'number' ? p.toFixed(2) : '0.00');

    document.getElementById('display-domain').textContent = state.domainName;
    document.getElementById('current-price-display').textContent = formatPrice(state.currentTokenPrice);
    document.getElementById('total-valuation').textContent = formatPrice(state.currentValuation);

    document.getElementById('extension-display').textContent = state.extension;
    document.getElementById('quality-display').textContent = state.quality.charAt(0).toUpperCase() + state.quality.slice(1);
    document.getElementById('tokentype-display').textContent = state.tokenType;
    document.getElementById('total-tokens-display').textContent = state.tokenCount.toLocaleString();

    const appreciation = state.currentValuation - state.valuation;
    const appreciationPercent = (appreciation / state.valuation) * 100;

    document.getElementById('appreciation-display').textContent = (appreciation >= 0 ? '+' : '') + formatPrice(appreciation);
    document.getElementById('appreciation-percent').textContent = (appreciationPercent >= 0 ? '+' : '') + appreciationPercent.toFixed(2) + '%';

    document.getElementById('trading-volume').textContent = formatPrice(state.tradingVolume);
    document.getElementById('holders-count').textContent = state.holders;
    document.getElementById('active-listings').textContent = state.listings;
}

function advanceWeek() {
    domainSimulatorState.weekCount++;
    
    // Add some market dynamics
    if (domainSimulatorState.extension === '.ai') {
        domainSimulatorState.valuation *= 1.02; // AI domains appreciate faster
    } else if (domainSimulatorState.extension === '.com') {
        domainSimulatorState.valuation *= 1.005; // COM steady growth
    }

    updateSimulatorDisplay();
    updatePriceChart();
}

function updatePriceChart() {
    const canvas = document.getElementById('price-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = 'rgba(74, 79, 255, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(74, 79, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    if (priceHistory.length < 2) return;

    const min = Math.min(...priceHistory);
    const max = Math.max(...priceHistory);
    const range = max - min || 1;

    ctx.strokeStyle = '#1ABC9C';
    ctx.lineWidth = 3;
    ctx.beginPath();

    for (let i = 0; i < priceHistory.length; i++) {
        const x = (i / Math.max(1, priceHistory.length - 1)) * width;
        const y = height - ((priceHistory[i] - min) / range) * height * 0.9 - height * 0.05;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 217, 61, 0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    const initialY = height - ((domainSimulatorState.tokenPrice - min) / range) * height * 0.9 - height * 0.05;
    ctx.beginPath();
    ctx.moveTo(0, initialY);
    ctx.lineTo(width, initialY);
    ctx.stroke();
    ctx.setLineDash([]);
}