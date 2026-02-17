import { LearnTopic } from '@/types';

export const learnTopics: LearnTopic[] = [
  {
    slug: 'what-is-a-social-casino',
    title: 'What Is a Social Casino?',
    excerpt: 'Social casinos are entertainment platforms offering casino-themed games with virtual currency only. No real money is wagered, won, or lost.',
    icon: 'fa-solid fa-dice',
    content: `
## Defining the Social Casino

A social casino is a digital entertainment platform that replicates the look, feel, and mechanics of traditional casino games — slots, poker, blackjack, bingo, and table games — while operating exclusively on virtual currency. Players never risk real money, and winnings cannot be converted to cash.

## How Social Casinos Operate

Social casinos generate revenue through three primary channels:

**In-App Purchases** — Players may optionally buy additional virtual coins, tokens, or premium features. This is never required, and free play is always available.

**Advertising** — Banner ads, video ads, and sponsored content provide revenue without directly affecting the player experience.

**Premium Features** — Exclusive themed rooms, customisation options, or ad-free experiences may be offered for a fee.

## Legal Classification

Because no real-money gambling occurs, social casinos are generally classified as entertainment software rather than gambling services. This means they are not typically regulated by gambling commissions, though they may fall under consumer protection and software distribution regulations.

However, reputable social casinos voluntarily implement responsible gaming measures, age verification, and transparent communication about the nature of their services.

## The Market Scale

The social casino industry generates billions in annual revenue worldwide. Major operators include Zynga (with games like Zynga Poker and Hit It Rich!), Playtika (Slotomania, House of Fun), and numerous independent developers.

## Key Differentiators

- **No financial risk** for players
- **Accessible to broader demographics** (no gambling barriers)
- **Focus on entertainment** over monetary outcomes
- **Social features** (friends, gifts, leaderboards) integral to the experience
- **Lower regulatory burden** compared to gambling platforms
    `,
    dateUpdated: '2026-02-01',
    thumbnailAlt: 'Friendly illustration explaining social casino concept with virtual coins, game icons, and a "no real money" stamp',
    relatedGuideSlugs: ['what-is-a-social-casino', 'social-gaming-vs-real-money'],
    relatedGameSlugs: ['starburst', 'classic-blackjack', 'viking-runecraft-bingo'],
  },
  {
    slug: 'rng-explained',
    title: 'RNG Explained',
    excerpt: 'Random Number Generators ensure every game outcome is fair and unpredictable. Learn the technology that underpins all digital gaming.',
    icon: 'fa-solid fa-shuffle',
    content: `
## What Is a Random Number Generator?

A Random Number Generator (RNG) is a computational algorithm that produces sequences of numbers with no discernible pattern. In gaming, RNG determines every outcome — which symbols land on slot reels, which cards are dealt, which bingo numbers are called.

## Types of RNG

**True Random Number Generators (TRNGs)** — Derive randomness from physical phenomena (atmospheric noise, radioactive decay, thermal noise). Used in lottery systems and high-security applications.

**Pseudorandom Number Generators (PRNGs)** — Use mathematical algorithms to produce sequences that are statistically random. Faster and more practical for gaming applications.

**Cryptographically Secure PRNGs (CSPRNGs)** — A subset of PRNGs specifically designed to be unpredictable even to someone who knows the algorithm. Used in online gaming and security applications.

## How RNG Works in Practice

1. The system initialises with a seed value (often from a high-entropy source)
2. The algorithm applies mathematical transformations to produce a number
3. This number maps to a game outcome (symbol position, card value, etc.)
4. The process repeats for every game action

## Testing and Certification

Professional gaming RNG systems undergo rigorous testing by independent laboratories (GLI, eCOGRA, iTech Labs). Tests verify:
- **Statistical randomness** — outputs pass recognised randomness tests
- **Unpredictability** — future outputs cannot be predicted from past data
- **Non-repeatability** — sequences do not cycle within practical timeframes
- **Independence** — each output is uninfluenced by previous outputs

## RNG Myths Debunked

"The game is due for a win" — False. Each outcome is independent.
"Playing at certain times improves odds" — False. RNG operates identically regardless of time.
"Casinos can adjust RNG remotely" — In regulated environments, this is prohibited and monitored.
    `,
    dateUpdated: '2026-01-20',
    thumbnailAlt: 'Technical illustration of RNG process showing seed input flowing through algorithm to produce random game outcomes',
    relatedGuideSlugs: ['understanding-rng', 'slot-volatility-and-rtp'],
    relatedGameSlugs: ['book-of-dead', 'super-wheel'],
  },
  {
    slug: 'social-vs-real-money-gaming',
    title: 'Social vs Real-Money Gaming',
    excerpt: 'A comprehensive comparison of social gaming platforms and real-money gambling, covering legal, psychological, and practical differences.',
    icon: 'fa-solid fa-scale-balanced',
    content: `
## Understanding the Divide

The gaming industry spans a wide spectrum, from purely social entertainment to real-money gambling. Understanding where each experience sits on this spectrum is crucial for making informed choices.

## Head-to-Head Comparison

### Currency
- **Social Gaming**: Virtual coins, gems, or tokens with no monetary value
- **Real-Money Gaming**: Actual currency (GBP, USD, EUR) with real financial implications

### Regulation
- **Social Gaming**: Consumer protection laws, app store guidelines
- **Real-Money Gaming**: Gambling commissions, extensive licensing requirements, mandatory responsible gambling tools

### Player Risk
- **Social Gaming**: Zero financial risk; time investment only
- **Real-Money Gaming**: Financial risk proportional to wagering amounts

### Demographics
- **Social Gaming**: Broad demographic appeal (all ages 18+, all income levels)
- **Real-Money Gaming**: Typically narrower demographic, higher average income

### Revenue Model
- **Social Gaming**: Optional purchases, advertising, premium features
- **Real-Money Gaming**: House edge on all games (mathematical advantage)

### Psychological Impact
- **Social Gaming**: Entertainment-focused emotional response
- **Real-Money Gaming**: Financial anxiety combined with entertainment

## The Grey Areas

Some platforms blur the lines between social and real-money gaming. Sweepstakes casinos, skill-based gaming platforms, and certain loot box mechanics create hybrid experiences. As a consumer, understanding where a platform falls on this spectrum helps you make informed decisions.

## Our Position

Caledonia Games operates firmly in the social entertainment space. We believe casino-themed entertainment can be genuinely enjoyable without financial risk. Our platform is designed to deliver the fun of gaming without the potential harms of gambling.
    `,
    dateUpdated: '2026-02-10',
    thumbnailAlt: 'Comparison infographic with two columns — social gaming with virtual coins and smiles versus real-money gaming with cash and warning signs',
    relatedGuideSlugs: ['social-gaming-vs-real-money', 'responsible-play'],
    relatedGameSlugs: ['classic-blackjack', 'starburst'],
  },
  {
    slug: 'how-free-to-play-games-make-money',
    title: 'How Free-to-Play Games Make Money',
    excerpt: 'Free does not mean unprofitable. Discover the business models that sustain the multi-billion-pound free-to-play gaming industry.',
    icon: 'fa-solid fa-coins',
    content: `
## The Free-to-Play Revolution

The free-to-play (F2P) model has transformed digital entertainment. By removing the upfront cost barrier, F2P games reach vastly larger audiences — and monetise through alternative revenue streams.

## Primary Revenue Streams

### In-App Purchases (IAP)
The most significant revenue source. Players voluntarily purchase virtual goods:
- **Virtual Currency**: Coins, gems, or tokens used within the game
- **Cosmetic Items**: Visual customisations (skins, themes, avatars) with no gameplay advantage
- **Premium Content**: Access to exclusive games, rooms, or features
- **Convenience Items**: Time-savers, boosts, or skip mechanics

### Advertising
Games display ads in various formats:
- **Banner Ads**: Persistent, non-intrusive placements
- **Interstitial Ads**: Full-screen ads between game sessions
- **Rewarded Video**: Players choose to watch ads in exchange for in-game rewards
- **Native Ads**: Advertisements integrated naturally into the game environment

### Subscription Models
Increasingly popular, offering:
- Ad-free experience
- Daily bonus virtual currency
- Exclusive features or early access
- Premium customer support

## The Economics

Only a small percentage of players (typically 2-5%) make any purchase at all. Within that group, a tiny fraction — often called "whales" — account for the majority of revenue. The vast majority of players enjoy the game entirely free, supported by the spending of others.

## Ethical Considerations

Responsible F2P design ensures that:
- Free players have a complete, enjoyable experience
- Purchases are truly optional and provide fair value
- Spending is not incentivised through manipulative mechanics
- Clear spending limits and parental controls are available
    `,
    dateUpdated: '2026-01-15',
    thumbnailAlt: 'Business model diagram showing free-to-play game at centre with revenue streams (ads, IAP, subscriptions) flowing outward',
    relatedGuideSlugs: ['game-design-secrets', 'what-is-a-social-casino'],
    relatedGameSlugs: [],
  },
  {
    slug: 'evolution-of-digital-entertainment',
    title: 'The Evolution of Digital Entertainment',
    excerpt: 'From the first computer games to immersive social platforms, trace the technological leaps that shaped modern digital entertainment.',
    icon: 'fa-solid fa-rocket',
    content: `
## From Pixels to Platforms

Digital entertainment has undergone a remarkable transformation in just a few decades, evolving from simple pixelated experiences to sophisticated social platforms that connect millions of people worldwide.

## The Early Years (1950s–1970s)

The first digital games were academic experiments. OXO (1952), Spacewar! (1962), and Pong (1972) demonstrated the potential of interactive electronic entertainment. These pioneering titles laid the groundwork for an industry that would eventually surpass film and music combined in revenue.

## The Arcade and Console Era (1980s–1990s)

Arcade cabinets and home consoles brought gaming into mainstream culture. The Nintendo Entertainment System, Sega Genesis, and PlayStation created generation-defining experiences and established gaming as a primary entertainment medium.

## The Internet Revolution (Late 1990s–2000s)

Internet connectivity transformed gaming from a solitary or local activity into a global social experience. Multiplayer online games, digital distribution platforms, and the first online casinos emerged during this period.

## The Mobile Revolution (2007–Present)

The iPhone's launch in 2007 catalysed the most dramatic shift in gaming history. Suddenly, everyone carried a gaming device. Free-to-play models, social gaming, and casual entertainment exploded in popularity.

Social casino games emerged as a distinct category, offering casino-themed entertainment designed for the mobile-first, free-to-play audience.

## The Current Landscape

Today's digital entertainment ecosystem includes:
- **Cloud Gaming**: Stream high-quality games to any device
- **Social Gaming Platforms**: Community-driven entertainment experiences
- **VR/AR Gaming**: Immersive experiences that blend digital and physical
- **AI-Enhanced Gaming**: Adaptive difficulty, personalised content, intelligent NPCs

## What Comes Next

The convergence of AI, social interaction, and increasingly powerful devices suggests a future where entertainment is more personalised, social, and accessible than ever before. Social gaming platforms like Caledonia Games sit at the intersection of these trends — delivering engaging entertainment that anyone can enjoy, anywhere, any time.
    `,
    dateUpdated: '2026-02-15',
    thumbnailAlt: 'Timeline illustration showing evolution from 1950s pixel art through arcade cabinets and consoles to modern mobile and VR gaming',
    relatedGuideSlugs: ['history-of-casino-games', 'ux-principles-gaming'],
    relatedGameSlugs: ['classic-keno', 'dragon-tiger'],
  },
];

export function getLearnTopicBySlug(slug: string): LearnTopic | undefined {
  return learnTopics.find((t) => t.slug === slug);
}
