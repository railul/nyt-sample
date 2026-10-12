import { Article, Category } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'lead-mideast-airports',
    kicker: 'Middle East Briefing',
    section: 'World',
    subsection: 'Middle East',
    headline: 'Israeli and Yemeni Airports Are Hit in New Round of Strikes',
    summary:
      'At least one person was killed in the Saudi capital, Riyadh, hospital authorities said. The attacks could derail an aid deal for Yemen’s capitulated airport.',
    byline: 'By Ben Hubbard and Declan Walsh',
    readTime: '4 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 6,
    paragraphs: [
      'RIYADH, Saudi Arabia — A coordinated barrage of ballistic missiles and armed drones struck aviation facilities across the Arabian Peninsula and the Levant before dawn on Monday, damaging runways, disrupting civilian flight corridors, and imperiling delicate cease-fire negotiations.',
      'In Riyadh, the blast shattered glass in commercial terminals and triggered air-defense interceptors across the metropolitan sky. Hospital authorities confirmed that at least one foreign national was killed and several groundskeepers were treated for severe shrapnel wounds.',
      'Simultaneously, strikes targeted Yemeni infrastructure near Sanaa, where rebel-held logistical arteries had only recently reopened under a United Nations-supervised humanitarian corridor. Eyewitnesses described multiple explosions sending plumes of black smoke into the early morning mist.',
      'The escalations threaten to scuttle months of clandestine diplomatic efforts facilitated by regional mediators. Delegations had been preparing to finalize a multilateral humanitarian pact that would have expanded civilian evacuations and unblocked delayed medical cargo.',
      '“We are observing an alarming threshold being crossed where critical civilian transport hubs are treated as negotiable leverage,” said a senior diplomatic official familiar with the closed-door talks in Muscat. “Without immediate de-escalation, commercial insurance premiums will effectively isolate these airspaces indefinitely.”',
      'By mid-morning, airline consortiums had grounded dozens of intercontinental departures routed through the Red Sea basin, forcing long detours across Central Asia and East Africa.'
    ],
    pullQuote: {
      text: '“We are observing an alarming threshold being crossed where critical civilian transport hubs are treated as negotiable leverage.”',
      attribution: 'Senior Diplomatic Official, Muscat Negotiations'
    },
    comments: [
      {
        id: 'c1',
        author: 'Elena R.',
        location: 'Geneva, Switzerland',
        timestamp: '1 hour ago',
        content: 'Targeting civilian logistics hubs violates fundamental international humanitarian law. The fragile aid channels to Yemen took three years of diplomatic sweat to build.',
        likes: 42,
        isNytPick: true
      },
      {
        id: 'c2',
        author: 'Marcus Vance',
        location: 'London, UK',
        timestamp: '45 mins ago',
        content: 'The insurance implications alone will close these corridors for weeks. Re-routing around Africa adds 2.5 hours and tons of jet fuel per flight.',
        likes: 19
      }
    ]
  },
  {
    id: 'saudi-detainees-riyadh',
    kicker: 'Diplomacy',
    section: 'World',
    subsection: 'Middle East',
    headline: 'Saudi Arabia May Free Detainees in Riyadh as Core Act of Modernization',
    summary:
      'Crown Prince Mohammed bin Salman seeks to quiet international criticism as major summit draws foreign investors.',
    byline: 'By Vivian Nereim',
    readTime: '6 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 8,
    paragraphs: [
      'RIYADH, Saudi Arabia — Saudi authorities are preparing to commute sentences and release several high-profile political and economic detainees ahead of the kingdom’s premier investment conclave, according to officials familiar with internal discussions.',
      'The prospective move is seen as an effort by Crown Prince Mohammed bin Salman to address persistent concerns among Western partners and multinational corporations over judicial transparency and human rights, at a time when the kingdom is accelerating its Vision 2030 economic diversification drive.',
      'Foreign direct investment has remained below ambitious targets set by Riyadh, despite hundreds of billions pledged toward monumental giga-projects like Neom and the Red Sea hospitality corridor.',
      '“Riyadh is keenly aware that institutional investors require predictability and civil protections before committing 30-year capital,” noted Dr. Farah Al-Khatib, an economic analyst based in Dubai. “This gesture signals a pragmatic pivot toward legal predictability.”',
      'The expected pardons would encompass both civil society figures and former commercial leaders who have been subjected to travel bans since previous anti-corruption crackdowns.'
    ],
    pullQuote: {
      text: '“Riyadh is keenly aware that institutional investors require predictability and civil protections before committing 30-year capital.”',
      attribution: 'Dr. Farah Al-Khatib, Middle East Economic Forum'
    },
    comments: [
      {
        id: 'c3',
        author: 'Jonathan K.',
        location: 'New York, NY',
        timestamp: '3 hours ago',
        content: 'A classic diplomatic overture before the annual investment gathering. Whether this translates into permanent statutory reform remains to be seen.',
        likes: 28,
        isNytPick: true
      }
    ]
  },
  {
    id: 'eu-defense-debt',
    kicker: 'European Policy',
    section: 'World',
    subsection: 'Europe',
    headline: 'E.U. Nations Weigh Collective Defense Debt in Historic Shift',
    summary:
      'Member states consider pooling sovereign borrowing power to finance a €500 billion modernization fund amid regional security pressures.',
    byline: 'By Matina Stevis-Gridneff',
    readTime: '5 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 5,
    paragraphs: [
      'BRUSSELS — European Union finance ministers are advancing discussions on a groundbreaking shared-debt instrument modeled on the post-pandemic recovery fund, intended to finance joint defense procurement and interoperable armaments.',
      'While traditionally frugal northern capitals had long resisted mutualized obligations, ongoing geopolitical realities on the bloc’s eastern frontier have prompted Paris, Rome, and Warsaw to build a formidable coalition in favor of the initiative.',
      'The proposed Eurobonds would fund standardized air defense batteries, ammunition manufacturing capacity, and integrated satellite surveillance networks.',
      '“A fragmented defense architecture is no longer merely inefficient; it is a strategic vulnerability,” remarked one commissioner. “Common funding is the only realistic way to achieve economies of scale.”'
    ]
  },
  {
    id: 'carbon-coal-demand',
    kicker: 'Climate & Energy',
    section: 'Science',
    subsection: 'Environment',
    headline: 'Global Carbon Emission Goals Slip Further as Coal Demand Rebounds',
    summary:
      'Despite rapid solar and wind deployment, surging demand for computational energy and industrial manufacturing keeps coal plants firing.',
    byline: 'By Brad Plumer and Raymond Zhong',
    readTime: '5 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 6,
    paragraphs: [
      'Global carbon emissions are projected to reach another high this year, as the staggering electricity consumption of new data centers and heavy industrial sectors outpaces the addition of renewable generation.',
      'According to an exhaustive assessment released by the International Energy Agency, thermal coal consumption in major Asian economies expanded by 2.4 percent over the past three quarters.',
      'While solar panel installations have broken all historical records, grid bottlenecks and battery storage shortages mean dispatchable fossil fuels continue to supply base-load demand during peak evening hours.'
    ]
  },
  {
    id: 'beijing-microchip-tariffs',
    kicker: 'Global Trade',
    section: 'Business',
    subsection: 'Technology',
    headline: 'How Beijing’s Microchip Push Is Sidestepping Western Tariffs',
    summary:
      'Chinese semiconductor foundries are flooding legacy chip markets, leveraging domestic scale and third-party assembly hubs.',
    byline: 'By Paul Mozur and Keith Bradsher',
    readTime: '6 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 7,
    paragraphs: [
      'SHANGHAI — Stricter export controls and steep tariffs enacted by Washington and Brussels were intended to constrain China’s semiconductor ambition. Instead, they have catalyzed an unprecedented state-backed buildout of legacy and mid-tier silicon manufacturing.',
      'By dominating the market for 28-nanometer and 14-nanometer chips — the workhorses powering automobiles, medical appliances, and smart grids — Chinese foundries are creating dependencies that Western industrial manufacturers find difficult to sever.',
      '“You don’t need a 2-nanometer chip to run a washing machine or an anti-lock braking module,” said Dan Wang, a technology analyst. “And in those categories, Chinese cost advantages are nearly impossible to match.”'
    ]
  },
  {
    id: 'commercial-aviation-corridors',
    kicker: 'International Aviation',
    section: 'Business',
    subsection: 'Aviation',
    headline: 'Inside the Vulnerable Skies: Why Commercial Aviation Corridors Are Under Pressure',
    summary:
      'Dozens of air carriers have altered Eurasian flight paths, stretching flight times and ballooning fuel surcharges as missile threats proliferate.',
    byline: 'By Niraj Chokshi',
    readTime: '7 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 9,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQEMqSauozwc5qaKBRFgdsckIDRGDLTpPRZq_vYFDHh0g9fqBL-6QHrzCI125tdN2FMqPzYHT5vGMUCesyiyyK8TaV0vn982y4iJ8oTy_nAwXx8MMufHYBiuDSY65zqj-Zkc9cXPzJGGIRQd0x3anC_C_Gqfy4qARQy-h48owuxXSk5NJHeu3Ybq5IXI3qQaD169hnnz-_ciB2lv7lf24jFYF-7EznFPbpNzDtxzgFtedgdxiPgmHU',
    imageCaption:
      'Smoke rising over Sanaa’s international terminal following reported airstrikes early Monday morning.',
    imageCredit: 'EPA, via Shutterstock',
    paragraphs: [
      'Over the past decade, international commercial aviation operated on an unspoken covenant: skies above regional skirmishes were treated as neutral transit corridors, monitored by civilian air traffic controllers and respected by combatants.',
      'That era has decisively come to an end. Following today’s missile engagements over the Red Sea and Arabian Gulf, major carriers including Lufthansa, Singapore Airlines, and British Airways announced sweeping detours around the entire Middle Eastern corridor.',
      'The logistical fallout is immediate and punishing. Flights connecting London or Frankfurt to Singapore now routinely add between 90 and 150 minutes of flight time, requiring thousands of additional liters of jet fuel and necessitating crew rest rotations that disrupt scheduled turnarounds.',
      '“We are seeing the commercial map of the globe pinched in the middle,” said aviation safety consultant Sarah Thornton. “The viable corridors connecting Europe and Asia are narrowing to a slender northern Arctic passage and a lengthy southern oceanic detour.”',
      'The economic toll extends beyond passenger inconveniences. High-value cargo — from temperature-controlled pharmaceuticals to express consumer electronics — faces sharp capacity reductions as planes must carry more fuel in lieu of freight.',
      'Pilots navigating the margins of sovereign restricted zones report frequent GPS spoofing incidents, where cockpit navigation displays receive fake coordinates, complicating instrument landings and demanding heightened vigilance from flight crews.'
    ],
    pullQuote: {
      text: '“We are seeing the commercial map of the globe pinched in the middle. The viable corridors connecting Europe and Asia are narrowing rapidly.”',
      attribution: 'Sarah Thornton, Senior Aviation Risk Analyst'
    },
    comments: [
      {
        id: 'c4',
        author: 'Captain David H.',
        location: 'Frankfurt, Germany',
        timestamp: '2 hours ago',
        content: 'Flying the southern detour over the Indian Ocean adds 12 tons of fuel burn to our A350 trips. The GPS spoofing mentioned in the piece is also extraordinarily disruptive.',
        likes: 54,
        isNytPick: true
      },
      {
        id: 'c5',
        author: 'Mira Sundaram',
        location: 'Mumbai, India',
        timestamp: '1 hour ago',
        content: 'Ticket prices between Mumbai and Heathrow have surged 40% in just six weeks due to these flight diversions. Global interconnectedness is taking a real hit.',
        likes: 31
      }
    ]
  },
  {
    id: 'guest-essay-eu-power',
    kicker: 'GUEST ESSAY',
    section: 'Opinion',
    subsection: 'Foreign Affairs',
    headline: '“The European Union Must Decide What Power Actually Means in the 21st Century”',
    summary:
      'Soft power alone cannot deter ballistic threats. Leaders in Brussels must face their sovereign military reality.',
    byline: 'By Thomas Kohl',
    authorTitle: 'Senior Fellow, Munich Security Forum',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ1p-1Vo7TTj6EoJbWLi5YCxNYewAnn9OuNK1M1ztOUTPVGIGBfK6zTX_nLKYbjTf-eOAuc21m77-aoAg9oCDGR6s54IAld2wyvyccaOLnyQyVo9TncldicVoztqiQw0JpVX-gHV8YhaiF2by7MoIqIPqYqjS8oV-u17OhzmI5GAnRYRiGLizydzKpYU3hePYw-I8VYhsOPRuELEgV-LAot8a2VpMOHVkZgqe_SR0j4l0_cchJX2IB',
    readTime: '5 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 7,
    paragraphs: [
      'For three generations, the European project defined its exceptionalism through the conscious renunciation of hard coercive power. It built the world’s most prosperous common market, instituted pioneering environmental regulations, and championed international legal norms.',
      'Yet today’s geopolitical landscape is exposing the profound limits of regulatory hegemony in an era defined by ballistic coercion and sovereign assertion.',
      'When commercial air corridors are closed by non-state actors and undersea communications cables are severed without attribution, legal memoranda and diplomatic demarches cannot substitute for integrated air defenses and sovereign deterrents.',
      'To survive as an autonomous geopolitical actor, Europe must abandon the comforting illusion that economic gravity alone guarantees immunity. Sovereign defense is not an alternative to the rule of law; it is the prerequisite condition that makes the rule of law possible.'
    ],
    pullQuote: {
      text: '“Sovereign defense is not an alternative to the rule of law; it is the prerequisite condition that makes the rule of law possible.”',
      attribution: 'Thomas Kohl'
    },
    comments: [
      {
        id: 'c6',
        author: 'Klaus B.',
        location: 'Berlin, Germany',
        timestamp: '4 hours ago',
        content: 'Spot on essay. For too long, European capitals outsourced physical security while maintaining high-minded lectures on diplomacy. Reality has arrived.',
        likes: 67,
        isNytPick: true
      }
    ]
  },
  {
    id: 'krugman-tariffs-dilemma',
    kicker: 'OPINION',
    section: 'Opinion',
    subsection: 'Columnist',
    headline: 'The Tariffs Dilemma That No Politician Wants to Acknowledge',
    summary:
      'Why protectionist nostalgia is clashing hard against automated supply chains.',
    byline: 'By Paul Krugman',
    readTime: '4 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 5,
    paragraphs: [
      'Both major political parties in the United States have settled on a shared romantic fantasy: that by erecting steep tariff barriers around basic industrial manufacturing, we can resurrect the mid-20th-century factory town.',
      'It is an understandable political impulse. But it ignores the fundamental truth of contemporary industrial economics: manufacturing output in advanced economies has never been higher, while manufacturing employment has steadily declined due to robotics and software automation.',
      'Tariffs do not reverse automation. When you tax imported intermediate goods — like specialized steel or circuit boards — you simply raise input costs for downstream domestic producers, handicapping American exporters on the global stage.',
      'We need genuine industrial investment and worker safety nets. But mistaking 19th-century trade tools for 21st-century economic strategy is an expensive error.'
    ]
  },
  {
    id: 'dowd-campaign-theater',
    kicker: 'OPINION',
    section: 'Opinion',
    subsection: 'Columnist',
    headline: 'When the Campaign Theater Reaches Its Absurdist Peak',
    summary:
      'Behind the scripted photo-ops, a peculiar silence hangs over the race.',
    byline: 'By Maureen Dowd',
    readTime: '4 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 5,
    paragraphs: [
      'WASHINGTON — We have reached the stage of the political season where campaigns resemble traveling dinner theater productions performed before exhausted audiences who know all the lines by heart.',
      'Candidates don factory-fresh high-visibility vests and pose solemnly next to assembly lines that haven’t operated since Tuesday, while press aides monitor TikTok engagement metrics on dual iPhones.',
      'What is missing from the spectacle is any genuine grappling with the profound shifts underway in our society. The public senses the artificiality, which explains why the prevailing mood across battleground states is not fervor, but a weary skepticism.'
    ]
  },
  {
    id: 'stephens-deterrence-levant',
    kicker: 'OPINION',
    section: 'Opinion',
    subsection: 'Columnist',
    headline: 'What Deterrence Really Requires in the Levant',
    summary:
      'Treaties without enforcement mechanisms are merely cordial invitations to aggression.',
    byline: 'By Bret Stephens',
    readTime: '4 MIN READ',
    date: 'October 13, 2025',
    audioMinutes: 5,
    paragraphs: [
      'In statecraft, the most dangerous word is “de-escalation” when invoked as a substitute for victory or credible deterrence.',
      'Over the past two decades, Western diplomacy in the Levant has operated under the thesis that any temporary cessation of hostilities is inherently superior to a decisive outcome. The result has been a predictable cycle: ceasefire, rearmament, bolder provocation, renewed conflict.',
      'True stability in the region will not be achieved through another round of UN Security Council communiqués. It requires clear, enforceable red lines backed by overwhelming willingness to impose costs.'
    ]
  },
  {
    id: 'venice-biennale-colonial-horizon',
    kicker: 'Art Review',
    section: 'Arts',
    subsection: 'Contemporary Art',
    headline: 'At the Venice Biennale, Pavilions Challenge the Colonial Horizon',
    summary:
      'Indigenous artists take center stage in curated installations that question classical frontiers.',
    byline: 'By Jason Farago',
    readTime: '5 MIN READ',
    date: 'October 13, 2025',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZynyoNXrnSgcHoc1JWWybnmIKuL_XSmU_111sLNdvDrjF6YoBbuiPnWzcf57w8XTj250H5Mefz4vqH9R5gtaPZr5JF7jmEtjBeCCgBj6F8umRAVBNGNB9tHvaGD0OpSj7BOJlVnHfMys9DnmXV48LJ-UJXkjx4y42tFpBf-Vxlbu3d4bEcKVsxUVH1ftvT3LdJD7-bCnHDK5zbykDxHZslCTFp83dgs1tWPzfZS95TWhs_c-3FB7M',
    imageCaption: 'Visitors exploring the monumental installations inside the Arsenale pavilions in Venice.',
    imageCredit: 'Andrea Avezzù, Venice Biennale',
    audioMinutes: 6,
    paragraphs: [
      'VENICE — Inside the cavernous brick arches of the Arsenale, the 61st International Art Exhibition departs sharply from the nationalistic pageantry that has characterized the Biennale since its founding in 1895.',
      'Curated under the overarching theme of diasporic and ancestral cartographies, this year’s most compelling national presentations discard marble plinths in favor of living, organic materials: suspended woven reeds, submerged tidal recordings, and tapestries dyed with natural indigo.',
      'The Nordic Pavilion, reimagined entirely by Sámi practitioners, features monumental reindeer antler sculptures that vibrate in resonant harmony with ambient water currents from the lagoon.',
      '“The Biennale is no longer an Olympic arena for nation-states to plant cultural flags,” observes curator Adriano Pedrosa. “It is an active site of unlearning.”'
    ]
  },
  {
    id: 'french-cinema-biggest-year',
    kicker: 'Cinema',
    section: 'Arts',
    subsection: 'Film',
    headline: 'Why French Cinema Is Having Its Biggest International Year Since 2001',
    summary:
      'Independent studios blend auteur craft with streamer budgets to captivate global cinephiles.',
    byline: 'By Manohla Dargis',
    readTime: '5 MIN READ',
    date: 'October 13, 2025',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8wOCTFtsZ62VR-FiVHZMIsLFEzggLbQ5w9b14bnoEahe_q2Sj4mgvL5cUMI96aQgcDPzTpYSuJKRbbWEEiER_cxzEIb3fbmf1WpGez2cSSsaBcXUgMmXYY5JhjvXSo2SxwIvY04Ug2cnlyn17xAiquUI43FhdJ3qf3-9qxrnqugF5z03AjvPMTMhYpqtL11di65d_kj_Y52feTt1P16iltgxdI-2aFlNJSf8rTQ7jPLjnvVU6j8KZ',
    imageCaption: 'A film crew filming in the Belleville neighborhood of Paris during golden hour.',
    imageCredit: 'Les Films du Losange',
    audioMinutes: 6,
    paragraphs: [
      'PARIS — Not since the phenomenon of “Amélie” in 2001 has French cinematic storytelling commanded such widespread box office and critical acclaim across international markets.',
      'A new vanguard of directors is defying the traditional dichotomy between cerebral Parisian arthouse dramas and broad television comedies, crafting genre-bending thrillers and intimate family epics that travel effortlessly across continents.',
      'Backed by progressive national production subsidies and competitive co-financing from streaming platforms, French productions earned five Academy Award nominations and swept top honors at Venice and Cannes this festival cycle.'
    ]
  },
  {
    id: 'translation-novels-fall-list',
    kicker: 'Fiction',
    section: 'Books',
    subsection: 'Book Review',
    headline: 'Ten New Translation Novels You Need on Your Fall Reading List',
    summary:
      'From Japanese mystery thrillers to lyrical Nordic memoirs exploring deep grief and renewal.',
    byline: 'By Dwight Garner',
    readTime: '6 MIN READ',
    date: 'October 13, 2025',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgF3BBcMUh_B8pe6LZsp9-S0rkV33mLncigi7Mx-Gr-PIQC-q2PdMmtsAL_V5ai2v8sabZLwdRqFkwpusU7IEeOIBws4-z_ke4RDweVI5cM-356nWns2yCTjXBaAyKHDTKJCe7hFdVi3Rbw5QbcWSpVlDPj8lFbzDYgt3XYWxDzgFN87UPMawXXUfRiKp2VS6UaC9Satt_KlQ-I9ax_4JTJWk3JBIjByVBNT-eeh-CH9iHZIAwSPQP',
    imageCaption: 'A reader reviewing digital translations on an editorial desk.',
    imageCredit: 'The New York Times',
    audioMinutes: 7,
    paragraphs: [
      'For decades, translated literature in the Anglophone world hovered around an infamous “three percent” threshold. This autumn, publishers report a dramatic surge in translation acquisitions, driven by a new generation of bilingual editors and passionate digital readers.',
      'Leading our recommended list is Mieko Kawakami’s haunting new Tokyo noir, followed by a luminous Norwegian sea novella translated by Damion Searls that captures the exact atmospheric weight of northern winter light.',
      'These works don’t just bridge linguistic divides; they challenge the narrative formulas of contemporary Western fiction with fresh syntax and radical emotional honesty.'
    ]
  },
  {
    id: 'danish-studio-medieval-wharf',
    kicker: 'Design',
    section: 'Arts',
    subsection: 'Architecture',
    headline: 'How a Danish Studio Rebuilt a Medieval Wharf Out of Salvaged Pine',
    summary:
      'Sustainability meets heritage preservation in an ambitious Scandinavian public pavilion.',
    byline: 'By Michael Kimmelman',
    readTime: '5 MIN READ',
    date: 'October 13, 2025',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPIirkWSEnTIWRbOsxSokLbV2MDLtPfu3kfUKJ7I3vpbRpw7Xdyi3oTeduEwKlAV4FgJIDPtlYPT2Q1NkIJtUKx0sE84r-vPfTAbT1xsx4QyCVIDZ7MGswljqY5iJET47suGevkiu20egAEd82S-4HQfJ12hhjlLUL-pRfWROrKCfnpSSPSRgvxgZRkN8WtG5ZaZiZsMqdr1vmmQwdEFQfxxCyVkcn0cfZWplShAOGCsCJO6INjH4y',
    imageCaption: 'The cantilevered timber waterfront pavilion overlooking the Copenhagen harbor.',
    imageCredit: 'Rasmus Hjortshøj / COAST Studio',
    audioMinutes: 6,
    paragraphs: [
      'COPENHAGEN — Along the blustery edge of the historic maritime district, where merchant ships once unloaded salted herring and timber in the 14th century, a new municipal cultural pavilion appears to rise directly out of the tidal foam.',
      'Designed by Copenhagen architecture collective Studio Værft, the structure utilizes more than 4,000 reclaimed pine pilings salvaged during harbor harbor-dredging operations, kiln-dried and re-milled using computer-controlled joinery.',
      'The result is a low-carbon public masterpiece that breathes with the humidity of the sea while offering shelter to kayakers, swimmers, and winter sauna enthusiasts alike.'
    ]
  },
  {
    id: 'popular-1-architects-heat',
    kicker: 'Architecture & Climate',
    section: 'Magazine',
    headline: 'The Quiet Revolution in How Architects Are Insulating Cities Against Extreme Heat',
    summary:
      'From reflective terracotta louvers in Seville to vegetative breeze corridors in Singapore, urbanists are redesigning the urban fabric.',
    byline: 'By Alexandra Lange',
    readTime: '6 MIN READ',
    date: 'October 13, 2025',
    paragraphs: [
      'As urban heat island effects push metropolitan temperatures to historic highs, modern architects are rediscovering ancient Mediterranean and Mesopotamian cooling techniques.',
      'By integrating passive airflow shafts, high-albedo limestone pavements, and evaporative rooftop courtyards, new civic projects in southern Europe and Southeast Asia reduce indoor ambient temperatures by up to 7 degrees Celsius without power-hungry air conditioning.'
    ]
  },
  {
    id: 'popular-2-ten-thousand-steps',
    kicker: 'Well',
    section: 'Health',
    headline: 'How 10,000 Steps a Day Became an Accidental Fitness Standard',
    summary:
      'The ubiquitous metric began as a marketing campaign for a Japanese pedometer in 1965. Here is what modern cardiologists actually recommend.',
    byline: 'By Gretchen Reynolds',
    readTime: '4 MIN READ',
    date: 'October 13, 2025',
    paragraphs: [
      'Every day, tens of millions of fitness trackers buzz in celebration when their wearers hit 10,000 steps. Yet few realize the number was never rooted in epidemiological clinical trials.',
      'In 1965, a Japanese clock maker manufactured a pedometer dubbed “Manpo-kei,” which translates literally to “10,000-steps meter,” choosing the name because the Japanese character for 10,000 looks like a walking person.',
      'Recent longitudinal studies published in JAMA show that mortality benefits plateau between 7,000 and 8,000 daily steps for most adults.'
    ]
  },
  {
    id: 'popular-3-lemon-ricotta-pasta',
    kicker: 'NYT Cooking',
    section: 'Cooking',
    headline: 'Recipe: 20-Minute Creamy Lemon Ricotta Pasta That Won Over TikTok',
    summary:
      'With fresh zest, starchy pasta water, freshly grated Pecorino, and whipped whole-milk ricotta, dinner comes together in the time it takes to boil water.',
    byline: 'By Ali Slagle',
    readTime: '3 MIN READ',
    date: 'October 13, 2025',
    paragraphs: [
      'The secret to this viral weeknight dinner lies in respecting the emulsifying power of starchy pasta water. Whole milk ricotta on its own can turn grainy when heated over direct flame, but whisked together with half a cup of simmering water, it forms a glossy, velvety coating.',
      'Ingredients:\n• 1 pound rigatoni or paccheri\n• 1½ cups whole-milk ricotta\n• 1 cup finely grated Pecorino Romano\n• Zest and juice of 2 Meyer lemons\n• Freshly cracked black pepper and fresh basil leaves'
    ]
  },
  {
    id: 'popular-4-connections-hints',
    kicker: 'Games',
    section: 'Games',
    headline: 'Connections Companion: Hints for Puzzle #491',
    summary:
      'Need a nudge with today’s word puzzle? Here are spoiler-free clues for Monday’s groups, plus full answers if you are truly stuck.',
    byline: 'By Wyna Liu',
    readTime: '2 MIN READ',
    date: 'October 13, 2025',
    paragraphs: [
      'Welcome to Monday’s Connections companion guide. Today’s grid features a few tricky overlapping categories involving homophones and everyday office supplies.',
      'Yellow Group hint: Things you might find in an artist’s studio.\nGreen Group hint: Words that can follow “Paper.”\nBlue Group hint: Types of boats with sails.\nPurple Group hint: Words starting with Roman numerals.'
    ]
  }
];

export const TRENDING_TOPICS = [
  'Middle East Crisis',
  'European Summit',
  'Artificial Intelligence Pact',
  'Global Markets',
  'Nobel Season',
  'Strands Game'
];

export const NAVIGATION_CATEGORIES: Category[] = [
  'World',
  'U.S.',
  'Politics',
  'Business',
  'Tech',
  'Science',
  'Health',
  'Sports',
  'Arts',
  'Books',
  'Style',
  'Food',
  'Travel',
  'Magazine',
  'T Magazine',
  'Real Estate',
  'Video',
  'Opinion',
  'Audio',
  'Games',
  'Cooking',
  'Wirecutter',
  'The Athletic'
];

export const ALL_SECTIONS_LIST = [
  {
    heading: 'News',
    items: [
      'World',
      'U.S.',
      'Politics',
      'New York',
      'Business',
      'Tech',
      'Science',
      'Climate',
      'Health',
      'Sports',
      'Obituaries'
    ]
  },
  {
    heading: 'Opinion',
    items: [
      'Today’s Opinion',
      'Columnists',
      'Editorials',
      'Guest Essays',
      'Letters',
      'Sunday Opinion'
    ]
  },
  {
    heading: 'Arts & Culture',
    items: [
      'Art & Design',
      'Books',
      'Best Sellers',
      'Dance',
      'Movies',
      'Music',
      'Television',
      'Theater'
    ]
  },
  {
    heading: 'Living & Lifestyle',
    items: [
      'Style',
      'Food & Wine',
      'Travel',
      'Magazine',
      'T Magazine',
      'Real Estate',
      'Well',
      'Love',
      'Jobs'
    ]
  },
  {
    heading: 'More from The Times',
    items: [
      'Games & Crosswords',
      'NYT Cooking',
      'Wirecutter',
      'The Athletic',
      'Podcasts & Audio',
      'Headway',
      'Times Insider'
    ]
  }
];
