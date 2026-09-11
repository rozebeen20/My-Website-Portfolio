const PX = 'https://images.pexels.com/photos'

const specialFiles = {
  6224: { file: 'hands-people-woman-working.jpg' },
  4158: { file: 'apple-iphone-smartphone-desk.jpg' },
  147413: { file: 'twitter-facebook-together-exchange-of-information-147413.jpeg' },
  907607: { file: 'pexels-photo-907607.png' },
}

export const px = (id, w = 1200) => {
  const base = specialFiles[id] ? specialFiles[id].file : `pexels-photo-${id}.jpeg`
  return `${PX}/${id}/${base}?auto=compress&cs=tinysrgb&w=${w}`
}

export const headerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Creative', href: '#creative' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'Web Design',
  'E-Commerce',
  'UI/UX',
  'Static Ads',
  'Email Marketing',
  'Video Editing',
  '3D Design',
  'Digital Marketing',
  'Full-Stack Development',
  'Shopify',
  'Funnels',
  'Amazon Creative',
]

export const portraitTags = [
  'Website Developer / Designer',
  'Funnel Builder',
  'Graphic Designer',
  'Video Editor',
]

export const categories = [
  { id: 'web', label: 'Web Design & Development', short: 'WEB' },
  { id: 'ecommerce', label: 'E-Commerce / Shopify', short: 'E-COMMERCE' },
  { id: 'uiux', label: 'UI/UX Design', short: 'UI/UX' },
  { id: 'ads', label: 'Static Ads / Performance Creative', short: 'STATIC ADS' },
  { id: 'email', label: 'Email Marketing', short: 'EMAIL' },
  { id: 'video', label: 'Video Editing / Motion Graphics', short: 'VIDEO' },
  { id: '3d', label: 'Photoshop / 3D Design', short: '3D' },
  { id: 'marketing', label: 'Digital Marketing / Research', short: 'MARKETING' },
  { id: 'webdev', label: 'Web Development', short: 'WEB DEV' },
]

export const services = [
  {
    icon: 'CodeXml',
    title: 'Web Design & Development',
    description:
      'Custom websites built with modern frameworks. From luxury studio sites to high-converting SaaS landing pages.',
    number: '01',
    id: 'web',
  },
  {
    icon: 'ShoppingBag',
    title: 'E-Commerce / Shopify',
    description:
      'Conversion-focused Shopify storefronts with custom themes, product pages, and subscription integrations.',
    number: '02',
    id: 'ecommerce',
  },
  {
    icon: 'Megaphone',
    title: 'Static Ads / Performance Creative',
    description:
      'Scroll-stopping ad creatives for paid social. Multi-ad campaigns with benefit-driven copy and premium design.',
    number: '03',
    id: 'ads',
  },
  {
    icon: 'Mail',
    title: 'Email Marketing',
    description:
      'Welcome series, abandoned cart flows, product launches, and retention emails designed to convert.',
    number: '04',
    id: 'email',
  },
  {
    icon: 'Video',
    title: 'Video Editing / Motion Graphics',
    description:
      'Product commercials, social media campaigns, brand films, and motion graphics for any platform.',
    number: '05',
    id: 'video',
  },
  {
    icon: 'Box',
    title: 'Photoshop / 3D Design',
    description:
      'Surreal product composites, 3D renders, fashion editorials, and hero shots with advanced compositing.',
    number: '06',
    id: '3d',
  },
  {
    icon: 'LayoutDashboard',
    title: 'UI/UX Design',
    description:
      'Fintech dashboards, mobile apps, and SaaS interfaces designed with user research and interactive prototypes.',
    number: '07',
    id: 'uiux',
  },
  {
    icon: 'TrendingUp',
    title: 'Digital Marketing / Research',
    description:
      'Competitor analysis, ad research, social strategy, SEO, and full campaign concepts with creative direction.',
    number: '08',
    id: 'marketing',
  },
  {
    icon: 'Terminal',
    title: 'Web Development',
    description:
      'Full-stack development — frontend, backend, databases, APIs, Shopify, funnels, CMS, deployment, and integrations.',
    number: '09',
    id: 'webdev',
  },
]

export const footerServices = [
  'Web Design',
  'E-Commerce',
  'UI/UX Design',
  'Static Ads',
  'Email Marketing',
  'Video Editing',
  '3D Design',
  'Digital Marketing',
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Creative', href: '#creative' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const capabilityStripItems = [
  'FUNNELS',
  'CRO',
  'E-COMMERCE',
  'WEB DEVELOPMENT',
  'VIDEO',
  'PERFORMANCE CREATIVE',
]

export const selectedWork = [
  {
    id: 'sw-01',
    number: '01',
    title: 'DTC Funnel Builder Portfolio',
    category: 'DTC FUNNELS • CRO',
    description:
      'An end-to-end DTC funnel portfolio covering pre-sale experiences, quiz/product discovery, personalized matching, PDP optimization, checkout UX, and CRO thinking.',
    visual: 'funnel',
    cta: {
      label: 'VIEW LIVE FUNNEL PORTFOLIO',
      href: 'https://my-funnel-builder-portfolio.vercel.app',
      external: true,
    },
  },
  {
    id: 'sw-02',
    number: '02',
    title: 'Minotti Luxury Furniture',
    category: 'WEB DESIGN • E-COMMERCE',
    description:
      'A refined digital experience combining editorial design, responsive development, and luxury e-commerce storytelling.',
    isPlaceholder: true,
    placeholderTitle: 'MINOTTI',
    placeholderSubtitle: 'Luxury Furniture Website',
    placeholderCategory: 'WEB DESIGN • E-COMMERCE',
    cta: { label: 'VIEW LIVE WEBSITE', href: 'https://minotti-website.onrender.com', external: true },
  },
  {
    id: 'sw-03',
    number: '03',
    title: 'LUMEN — Luxury Lighting',
    category: 'E-COMMERCE • WEB DEVELOPMENT',
    description:
      'A premium lighting storefront designed around product discovery, visual storytelling, and conversion-focused e-commerce UX.',
    isPlaceholder: true,
    placeholderTitle: 'LUMEN',
    placeholderSubtitle: 'Luxury Lighting E-commerce',
    placeholderCategory: 'E-COMMERCE • WEB DEVELOPMENT',
    cta: { label: 'VIEW LIVE WEBSITE', href: 'https://lumen-shop-website.vercel.app/', external: true },
  },
  {
    id: 'sw-04',
    number: '04',
    title: 'Performance Video Creative',
    category: 'VIDEO • PERFORMANCE CREATIVE',
    description:
      'Product commercials, paid social video, and motion-driven creative designed to convert.',
    projectRef: 'video-01',
    cta: { label: 'VIEW VIDEO', href: '#services' },
  },
  {
    id: 'sw-05',
    number: '05',
    title: 'Static Ads & Performance Creative',
    category: 'STATIC ADS • PERFORMANCE CREATIVE',
    description:
      'Scroll-stopping ad creatives for paid social with benefit-driven copy and premium design.',
    projectRef: 'ads-01',
    cta: { label: 'VIEW CREATIVE', href: '#services' },
  },
  {
    id: 'sw-06',
    number: '06',
    title: 'Creative & Marketing Strategy',
    category: 'MARKETING STRATEGY • RESEARCH',
    description:
      'Competitor analysis, ad research, audience strategy, and campaign concepts with creative direction.',
    visual: 'strategy',
    cta: { label: 'VIEW PROJECT', href: '#services' },
  },
]

export const capabilityCards = [
  {
    id: 'cc-01',
    title: 'DTC Funnels & CRO',
    skills: [
      'Funnel Strategy',
      'Landing Pages',
      'Pre-Sale Pages',
      'Advertorials',
      'Quiz Funnels',
      'Product Funnels',
      'Upsells / Downsells',
      'Conversion Optimization',
      'A/B Testing',
      'Customer Journey Mapping',
    ],
    cta: { label: 'EXPLORE FUNNELS', href: '#work' },
  },
  {
    id: 'cc-02',
    title: 'Web & E-Commerce',
    skills: [
      'Frontend Development',
      'Responsive Websites',
      'React',
      'Next.js',
      'JavaScript',
      'E-commerce UX',
      'Product Pages',
      'Conversion-Focused Websites',
      'API Integration',
    ],
    cta: { label: 'EXPLORE WEB WORK', href: '#work' },
  },
  {
    id: 'cc-03',
    title: 'Video & Motion',
    skills: [
      'Paid Social Video',
      'Product Videos',
      'Short-Form Video',
      'Long-Form Video',
      'Motion Graphics',
      'Promotional Content',
      'Video Editing',
    ],
    cta: { label: 'EXPLORE VIDEO', href: '#work' },
  },
  {
    id: 'cc-04',
    title: 'Static Ads & Creative',
    skills: [
      'Static Ads',
      'Paid Social Creative',
      'Product Creative',
      'Amazon Creative',
      'Social Graphics',
      'Graphic Design',
      'Creative Direction',
    ],
    cta: { label: 'EXPLORE CREATIVE', href: '#work' },
  },
]

export const differentiatorFlow = [
  'CREATIVE',
  'TRAFFIC',
  'FUNNEL',
  'EXPERIENCE',
  'CONVERSION',
]

export const skillsCategories = [
  {
    title: 'Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs', 'Git', 'GitHub'],
  },
  {
    title: 'E-Commerce',
    skills: ['Shopify', 'Shopify Liquid', 'Product Pages', 'Collection Pages', 'E-commerce UX', 'Conversion-Focused UI'],
  },
  {
    title: 'Funnels & CRO',
    skills: ['Funnel Strategy', 'Landing Pages', 'Pre-Sale Pages', 'Advertorials', 'Quiz Funnels', 'CRO', 'A/B Testing', 'Customer Journey Mapping'],
  },
  {
    title: 'Creative',
    skills: ['Photoshop', 'Illustrator', 'Figma', 'Canva', 'Premiere Pro', 'After Effects', 'Motion Graphics', 'Video Editing'],
  },
  {
    title: 'Marketing',
    skills: ['Meta Ads', 'Google Ads', 'SEO', 'Content Marketing', 'Audience Research', 'Competitor Research', 'Campaign Strategy', 'Performance Analysis'],
  },
  {
    title: 'AI & Automation',
    skills: ['AI Image Generation', 'AI Video Creation', 'AI Content Creation', 'Prompt Engineering', 'AI Automation', 'AI Web Development', 'AI Chatbot Integration', 'Generative AI Workflows'],
  },
]

export const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    id: 'web-01',
    title: 'Luxury Architecture Studio',
    category: 'web',
    categoryLabel: 'Web Design',
    description:
      'A high-end responsive website combining modern frontend development, interactive motion, performance-focused layouts, and a premium visual experience.',
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'GSAP',
      'Responsive Design',
      'REST API',
      'Git',
      'GitHub',
    ],
    image: px(35142390),
    aspect: 'wide',
    role: 'Web Developer & Digital Creative',
    overview:
      'A full redesign for a high-end architecture firm seeking a digital presence that mirrors the scale and refinement of their physical work. The site uses immersive full-bleed photography, a restrained type system, and smooth scroll-driven transitions.',
    creativeDirection:
      'Editorial, gallery-first layout with generous negative space. A monochrome palette with a single warm accent lets the architecture speak for itself.',
    challenge:
      'The firm had decades of projects but no organized digital archive. The site needed to showcase large-format photography without sacrificing load speed or mobile usability.',
    approach:
      'Built a custom CMS-driven project gallery with lazy-loaded full-screen imagery, GSAP-powered scroll animations, and a fully responsive grid that reflows elegantly from desktop to mobile.',
    gallery: [px(35142390), px(12705203), px(19707470)],
  },
  {
    id: 'web-02',
    title: 'SaaS Analytics Landing Page',
    category: 'web',
    categoryLabel: 'Web Design',
    description:
      'Modern SaaS website with dashboard mockups, feature sections, pricing tiers, testimonials, and strong CTA design.',
    tools: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
    image: px(38984817),
    aspect: 'tall',
    role: 'Web Designer & Frontend Developer',
    overview:
      'A conversion-focused landing page for a B2B analytics SaaS. The page guides visitors from a bold hero through feature breakdowns, social proof, and a frictionless signup flow.',
    creativeDirection:
      'Clean, confident, data-driven aesthetic. Deep navy and electric blue accents communicate trust and intelligence without feeling corporate.',
    challenge:
      'The product was powerful but hard to explain quickly. The landing page needed to communicate value in under 10 seconds while still serving detailed feature exploration.',
    approach:
      'Designed a progressive disclosure layout — a punchy hero with an animated dashboard preview, followed by expandable feature blocks. Pricing used a toggle for monthly/annual with smooth transitions.',
    gallery: [px(38984817), px(27141307), px(241188)],
  },
  {
    id: 'web-03',
    title: 'Creative Agency Website',
    category: 'web',
    categoryLabel: 'Web Design',
    description:
      'Bold creative agency site with experimental typography, case studies, scroll animations, and an interactive portfolio.',
    tools: ['Figma', 'React', 'GSAP', 'Lenis'],
    image: px(6224),
    aspect: 'wide',
    role: 'Creative Director & Developer',
    overview:
      'A daring, personality-driven website for an independent creative agency. The design breaks conventional grid structures with kinetic typography and scroll-triggered case study reveals.',
    creativeDirection:
      'Maximalist energy with controlled chaos. Oversized type, asymmetric layouts, and bold color blocks create a memorable, gallery-like experience.',
    challenge:
      'The agency wanted to stand out in a saturated market of look-alike agency sites. They needed something that felt like a creative statement in itself.',
    approach:
      'Implemented a custom scroll engine with Lenis for buttery smooth scrolling, GSAP timelines for staggered text reveals, and a magnetic cursor that responds to interactive elements.',
    gallery: [px(6224), px(39190570), px(1170412)],
  },
  {
    id: 'web-04',
    title: 'Personal Brand Portfolio',
    category: 'web',
    categoryLabel: 'Web Design',
    description:
      'Premium personal portfolio for an entrepreneur with editorial layouts, interactive sections, and a refined about experience.',
    tools: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
    image: px(36712864),
    aspect: 'tall',
    role: 'Web Designer & Developer',
    overview:
      'A personal brand site for a serial entrepreneur and public speaker. The design blends magazine-style editorial layouts with interactive storytelling sections.',
    creativeDirection:
      'Sophisticated and warm. A muted earth-tone palette with serif display type creates an approachable yet authoritative presence.',
    challenge:
      'The client had multiple businesses and needed a site that could serve as a unified hub without feeling like a generic resume.',
    approach:
      'Built a modular homepage with switchable "chapters" — each business gets its own editorial spread with unique layouts, linked by a persistent navigation rail.',
    gallery: [px(36712864), px(5955103), px(30552490)],
  },
  {
    id: 'web-05',
    title: 'Fine Dining Restaurant',
    category: 'web',
    categoryLabel: 'Web Design',
    description:
      'High-end restaurant website featuring food photography, menu interface, reservations CTA, location info, and elegant mobile design.',
    tools: ['Figma', 'React', 'Tailwind CSS'],
    image: px(8194817),
    aspect: 'wide',
    role: 'Web Designer & Developer',
    overview:
      'A sensory digital experience for a Michelin-considered restaurant. Full-bleed food photography, an interactive menu, and a seamless reservation flow.',
    creativeDirection:
      'Dark, intimate, and luxurious. Deep charcoal backgrounds with gold accents and generous letter-spacing evoke fine dining menus.',
    challenge:
      'The restaurant needed to convey its premium positioning online while making the reservation process effortless on mobile devices.',
    approach:
      'Designed a dark-mode-first experience with a sticky reservation bar, an interactive menu with dietary filtering, and an integrated OpenTable booking widget.',
    gallery: [px(8194817), px(6327536), px(59782)],
  },
  {
    id: 'ecom-01',
    title: 'Premium Skincare Store',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description:
      'Luxury skincare Shopify storefront with product photography, bundles, reviews, and a conversion-focused layout.',
    tools: ['Shopify', 'Figma', 'Liquid', 'Klaviyo'],
    image: px(8015790),
    aspect: 'tall',
    role: 'Shopify Designer & Developer',
    overview:
      'A complete Shopify build for a luxury skincare brand. The store features editorial product photography, bundle builders, and a review-driven social proof system.',
    creativeDirection:
      'Clean, clinical, and premium. Soft whites with sage green accents and minimalist typography convey purity and efficacy.',
    challenge:
      'The brand had a loyal customer base but their old Shopify theme felt generic. They needed a custom storefront that reflected their premium positioning.',
    approach:
      'Built a custom Shopify theme with a bundle builder, subscription integration, and a review carousel. Product pages used sticky add-to-cart and ingredient spotlight sections.',
    gallery: [px(8015790), px(7670694), px(8101512)],
  },
  {
    id: 'ecom-02',
    title: 'Fashion Brand Store',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description:
      'Modern fashion e-commerce site with editorial photography, product collections, filters, and minimalist product pages.',
    tools: ['Shopify', 'Figma', 'Liquid'],
    image: px(37233404),
    aspect: 'wide',
    role: 'Shopify Designer & Developer',
    overview:
      'A fashion-forward Shopify storefront for a contemporary clothing brand. Editorial lookbooks blend with a clean, filterable product catalog.',
    creativeDirection:
      'Editorial and minimalist. Monochrome palette with oversized product imagery lets the clothing take center stage.',
    challenge:
      'The brand released seasonal collections monthly and needed a storefront that could showcase lookbooks alongside shoppable product grids.',
    approach:
      'Created a dual-mode collection page — toggle between editorial lookbook view and grid shopping view. Implemented AJAX-powered filtering by size, color, and collection.',
    gallery: [px(37233404), px(11911863), px(1488470)],
  },
  {
    id: 'ecom-03',
    title: 'Supplement Brand Store',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description:
      'High-converting supplement product page with renders, benefits, ingredients, reviews, comparison sections, and CTA.',
    tools: ['Shopify', 'Figma', 'Liquid', 'ReCharge'],
    image: px(13013778),
    aspect: 'tall',
    role: 'Shopify Designer & Developer',
    overview:
      'A conversion-optimized Shopify build for a DTC supplement brand. The product page combines scientific credibility with punchy, benefit-driven copy.',
    creativeDirection:
      'Bold, energetic, and trustworthy. Vibrant product renders on clean backgrounds with data-backed benefit callouts.',
    challenge:
      'The supplement market is crowded and skeptical. The store needed to build trust quickly while driving fast purchase decisions.',
    approach:
      'Designed a long-form product page with comparison tables, ingredient transparency sections, subscription savings prompts, and a sticky purchase bar with quantity selector.',
    gallery: [px(13013778), px(17604755), px(13013774)],
  },
  {
    id: 'ecom-04',
    title: 'Home & Lifestyle Store',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description:
      'Premium home products storefront with lifestyle photography, collections, product storytelling, and clean navigation.',
    tools: ['Shopify', 'Figma', 'Liquid'],
    image: px(2117238),
    aspect: 'wide',
    role: 'Shopify Designer & Developer',
    overview:
      'A warm, inviting Shopify store for a home and lifestyle brand. Lifestyle photography and product storytelling create an immersive shopping experience.',
    creativeDirection:
      'Warm, tactile, and lived-in. Natural tones, soft shadows, and lifestyle-first product presentation make the store feel like a curated home tour.',
    challenge:
      'The brand sold across multiple home categories and needed a navigation system that felt curated rather than overwhelming.',
    approach:
      'Built a mega-menu with lifestyle imagery previews, collection pages with editorial intro sections, and product pages with "style it with" cross-sell modules.',
    gallery: [px(2117238), px(12804226), px(6296919)],
  },
  {
    id: 'ecom-05',
    title: 'Tech Product Store',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description:
      'Modern technology e-commerce site with product renders, specifications, comparison sections, and interactive product presentation.',
    tools: ['Shopify', 'Figma', 'Liquid', 'Three.js'],
    image: px(3721941),
    aspect: 'tall',
    role: 'Shopify Designer & Developer',
    overview:
      'A sleek Shopify storefront for a tech accessories brand. Interactive product presentations and detailed spec sheets cater to informed buyers.',
    creativeDirection:
      'Dark, premium, and futuristic. Matte black backgrounds with subtle gradients and crisp product renders create a high-tech feel.',
    challenge:
      'Tech buyers research extensively before purchasing. The store needed to present detailed specifications without losing visual appeal.',
    approach:
      'Implemented interactive product galleries with 360-degree views, expandable spec tables, a product comparison tool, and a feature highlight reel on each product page.',
    gallery: [px(3721941), px(14541063), px(8003995)],
  },
  {
    id: 'ads-01',
    title: 'Skincare Ad Campaign',
    category: 'ads',
    categoryLabel: 'Static Ads',
    description:
      '5 social media ads promoting a premium skincare product with benefit-driven copy and clean product photography.',
    tools: ['Photoshop', 'Figma', 'Illustrator'],
    image: px(10819538),
    aspect: 'tall',
    role: 'Ad Designer & Art Director',
    overview:
      'A 5-creative social media ad campaign for a premium skincare serum. Each ad highlights a different product benefit with a consistent visual system.',
    creativeDirection:
      'Clean, luminous, and aspirational. Soft gradients with product-forward compositions and punchy, benefit-first headlines.',
    challenge:
      'The brand needed ads that stopped the scroll in a saturated beauty feed while maintaining a premium aesthetic.',
    approach:
      'Designed a modular ad template system — each creative shares a layout grid but rotates benefit copy, product angle, and background gradient. All 5 ads feel cohesive yet individually striking.',
    gallery: [px(10819538), px(27544691), px(7691166), px(7691160), px(9775216)],
  },
  {
    id: 'ads-02',
    title: 'Supplement Ad Campaign',
    category: 'ads',
    categoryLabel: 'Static Ads',
    description:
      '5 performance-focused product ads featuring renders, benefits, lifestyle compositions, and strong CTAs.',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    image: px(17820733),
    aspect: 'wide',
    role: 'Ad Designer',
    overview:
      'A 5-creative performance ad campaign for a DTC supplement brand. Each ad tests a different angle — benefits, social proof, lifestyle, urgency, and comparison.',
    creativeDirection:
      'Bold, high-contrast, and data-driven. Vibrant product renders on punchy backgrounds with oversized benefit text.',
    challenge:
      'The brand needed ads that performed in a competitive supplement ad market with strict platform guidelines.',
    approach:
      'Created a set of 5 ads each testing a different psychological trigger — authority, scarcity, social proof, transformation, and value. Used consistent branding but varied layouts for A/B testing.',
    gallery: [px(17820733), px(13013778), px(7615558), px(9742804), px(17604755)],
  },
  {
    id: 'ads-03',
    title: 'Fashion Ad Campaign',
    category: 'ads',
    categoryLabel: 'Static Ads',
    description:
      '5 luxury fashion advertisements with editorial compositions and product-focused layouts.',
    tools: ['Photoshop', 'InDesign', 'Illustrator'],
    image: px(20177238),
    aspect: 'tall',
    role: 'Ad Designer & Art Director',
    overview:
      'A 5-creative fashion ad campaign with editorial-grade compositions. Each ad reads like a magazine spread adapted for social.',
    creativeDirection:
      'Editorial, dramatic, and luxurious. High-contrast studio lighting with bold typography overlays that feel like fashion magazine covers.',
    challenge:
      'The brand wanted ads that felt like editorial fashion spreads rather than typical e-commerce product ads.',
    approach:
      'Shot and composited 5 distinct creative concepts — each with its own color grade and typographic treatment — unified by a consistent model and brand watermark.',
    gallery: [px(20177238), px(37233404), px(39190660), px(1488470), px(11911863)],
  },
  {
    id: 'ads-04',
    title: 'E-Commerce Sale Campaign',
    category: 'ads',
    categoryLabel: 'Static Ads',
    description:
      '5 promotional ads featuring sale messaging, product photography, urgency cues, and strong visual hierarchy.',
    tools: ['Photoshop', 'Figma', 'Illustrator'],
    image: px(5622934),
    aspect: 'wide',
    role: 'Ad Designer',
    overview:
      'A 5-creative sale campaign with urgency-driven design. Each ad escalates visual intensity from teaser to final-hours urgency.',
    creativeDirection:
      'Energetic, bold, and urgency-forward. High-contrast red and black with countdown-style typography and dynamic product arrangements.',
    challenge:
      'The brand ran a 7-day flash sale and needed a sequence of ads that built urgency without feeling repetitive.',
    approach:
      'Designed a 5-ad sequence — teaser, launch, mid-sale push, bestseller highlight, and final hours — each with escalating visual urgency and distinct product focus.',
    gallery: [px(5622934), px(33276443), px(7986985), px(35560482), px(6214383)],
  },
  {
    id: 'ads-05',
    title: 'New Product Launch Campaign',
    category: 'ads',
    categoryLabel: 'Static Ads',
    description:
      '5 advertisements introducing a fictional product with teaser, launch, benefits, social proof, and CTA creatives.',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    image: px(36554527),
    aspect: 'tall',
    role: 'Ad Designer & Art Director',
    overview:
      'A 5-creative launch campaign for a new tech product. The sequence builds from mysterious teaser to full reveal with social proof and strong CTA.',
    creativeDirection:
      'Sleek, mysterious, and premium. Dark backgrounds with dramatic product reveals and minimalist typography create anticipation.',
    challenge:
      'The product was genuinely new to market and needed a campaign that built curiosity before the full reveal.',
    approach:
      'Created a 5-ad narrative arc — silhouette teaser, partial reveal, full launch, benefits breakdown, and social proof CTA — designed to run sequentially across the launch week.',
    gallery: [px(36554527), px(8003995), px(14541063), px(4158), px(3721941)],
  },
  {
    id: 'email-01',
    title: 'Welcome Series Email',
    category: 'email',
    categoryLabel: 'Email Marketing',
    description:
      'Premium e-commerce welcome email with brand story, featured products, and first-purchase incentive.',
    tools: ['Klaviyo', 'Figma', 'Photoshop'],
    image: px(7821760),
    aspect: 'wide',
    role: 'Email Designer & Developer',
    overview:
      'A premium welcome email for a luxury e-commerce brand. The design introduces the brand story, showcases hero products, and offers a first-purchase incentive.',
    creativeDirection:
      'Warm, inviting, and on-brand. Soft product photography with elegant typography and a clear, single CTA.',
    challenge:
      'Welcome emails have the highest open rates but the brand needed one that converted that attention into a first purchase.',
    approach:
      'Designed a two-column responsive email with a brand story hero, product carousel, and a prominent discount code block. Built in Klaviyo with dynamic product blocks.',
    gallery: [px(7821760), px(7439136), px(7821758)],
  },
  {
    id: 'email-02',
    title: 'Product Launch Email',
    category: 'email',
    categoryLabel: 'Email Marketing',
    description:
      'Product announcement email with hero product imagery, feature highlights, and a strong launch CTA.',
    tools: ['Klaviyo', 'Figma', 'Photoshop'],
    image: px(7439136),
    aspect: 'tall',
    role: 'Email Designer & Developer',
    overview:
      'A high-impact product launch email featuring a hero product render, key feature callouts, and an exclusive early-access CTA for subscribers.',
    creativeDirection:
      'Dramatic and exclusive. Dark hero image with spotlight product lighting and gold accent text for the early-access CTA.',
    challenge:
      'The brand wanted the email to feel like an exclusive invitation rather than a mass marketing blast.',
    approach:
      'Used a single dramatic hero image, minimal copy, and an exclusive "subscribers get first access" framing with a countdown timer block.',
    gallery: [px(7439136), px(7821760), px(7821758)],
  },
  {
    id: 'email-03',
    title: 'Abandoned Cart Sequence',
    category: 'email',
    categoryLabel: 'Email Marketing',
    description:
      'High-converting abandoned cart email sequence with product reminders, social proof, and urgency.',
    tools: ['Klaviyo', 'Mailchimp', 'Figma'],
    image: px(7821758),
    aspect: 'wide',
    role: 'Email Designer & Developer',
    overview:
      'A 3-email abandoned cart sequence. Email 1 is a gentle reminder, email 2 adds social proof, and email 3 creates urgency with a time-limited discount.',
    creativeDirection:
      'Clean, personal, and progressively urgent. The design shifts from soft and friendly to bold and time-sensitive across the sequence.',
    challenge:
      'Cart abandonment was high and the existing single reminder email had low conversion.',
    approach:
      'Designed a 3-part sequence with dynamic product blocks showing the exact abandoned items, review snippets in email 2, and a countdown timer in email 3.',
    gallery: [px(7821758), px(7821760), px(7439136)],
  },
  {
    id: 'email-04',
    title: 'Seasonal Promo Campaign',
    category: 'email',
    categoryLabel: 'Email Marketing',
    description:
      'Seasonal sale email campaign with multiple product sections, category navigation, and bold sale messaging.',
    tools: ['Mailchimp', 'Omnisend', 'Figma'],
    image: px(6214383),
    aspect: 'tall',
    role: 'Email Designer & Developer',
    overview:
      'A seasonal sale email with multiple product sections, category quick-links, and bold visual hierarchy that drives clicks to specific collections.',
    creativeDirection:
      'Festive, energetic, and organized. Warm seasonal colors with clear category blocks and prominent discount badges.',
    challenge:
      'The brand had a large catalog and the sale email needed to drive traffic to multiple collection pages without overwhelming the reader.',
    approach:
      'Designed a modular email with category quick-link navigation at the top, followed by 3 product section blocks, each with its own CTA button.',
    gallery: [px(6214383), px(5622934), px(7986985)],
  },
  {
    id: 'email-05',
    title: 'Customer Retention Email',
    category: 'email',
    categoryLabel: 'Email Marketing',
    description:
      'Post-purchase customer loyalty email with care tips, review requests, and personalized product recommendations.',
    tools: ['Klaviyo', 'Omnisend', 'Figma'],
    image: px(7821760),
    aspect: 'wide',
    role: 'Email Designer & Developer',
    overview:
      'A post-purchase loyalty email that thanks the customer, provides product care tips, requests a review, and suggests complementary products.',
    creativeDirection:
      'Thoughtful, warm, and personal. Handwritten-style headers with soft product photography and a genuine thank-you tone.',
    challenge:
      'The brand struggled with repeat purchases and needed a post-purchase email that built a relationship, not just pushed more products.',
    approach:
      'Designed a care-first email with product usage tips, a gentle review request, and AI-powered product recommendations based on the purchased item.',
    gallery: [px(7821760), px(7821758), px(7439136)],
  },
  {
    id: 'video-01',
    title: 'DTC Product Commercial',
    category: 'video',
    categoryLabel: 'Video Editing',
    description:
      'Fast-paced product commercial for a fictional e-commerce brand with dynamic cuts, text overlays, and sound design.',
    tools: ['Premiere Pro', 'After Effects'],
    image: px(17115910),
    aspect: 'wide',
    role: 'Video Editor / Motion Designer',
    overview:
      'A 30-second DTC product commercial with rapid cuts, kinetic typography, and beat-synced transitions. Designed for paid social and YouTube pre-roll.',
    creativeDirection:
      'High-energy, punchy, and modern. Fast cuts with motion-tracked text overlays and a driving sound design that matches the edit rhythm.',
    challenge:
      'The product video needed to hold attention in the first 3 seconds while communicating 4 key benefits in 30 seconds.',
    approach:
      'Cut a fast-paced edit with a hook in the first 2 seconds, benefit text overlays timed to the beat, and a strong CTA card. Color-graded for a premium, consistent look.',
    gallery: [px(17115910), px(32774292), px(8102680)],
  },
  {
    id: 'video-02',
    title: 'Social Media Campaign',
    category: 'video',
    categoryLabel: 'Video Editing',
    description:
      'Short-form vertical video campaign designed for Instagram Reels, TikTok, and YouTube Shorts.',
    tools: ['Premiere Pro', 'After Effects'],
    image: px(36730081),
    aspect: 'tall',
    role: 'Video Editor / Motion Designer',
    overview:
      'A set of 5 vertical short-form videos optimized for Reels, TikTok, and Shorts. Each video uses trending audio formats with brand-specific motion graphics.',
    creativeDirection:
      'Native, trendy, and snackable. Vertical-first compositions with bold captions, quick transitions, and platform-native pacing.',
    challenge:
      'The brand needed content that felt native to each platform rather than repurposed horizontal video.',
    approach:
      'Shot and edited natively in 9:16 with platform-specific caption styles, trending audio selection, and motion graphics templates for rapid iteration.',
    gallery: [px(36730081), px(33440446), px(14772071)],
  },
  {
    id: 'video-03',
    title: 'Brand Story Film',
    category: 'video',
    categoryLabel: 'Video Editing',
    description:
      'Cinematic brand storytelling video with narrative structure, color grading, and emotive sound design.',
    tools: ['Premiere Pro', 'After Effects'],
    image: px(67654),
    aspect: 'wide',
    role: 'Video Editor / Motion Designer',
    overview:
      'A 2-minute cinematic brand film telling the founder story of a craft coffee company. Shot on cinema cameras with a documentary-style edit.',
    creativeDirection:
      'Warm, intimate, and cinematic. Handheld camera work with natural lighting, film grain, and a custom score that builds emotionally.',
    challenge:
      'The brand had a compelling origin story but needed it translated into a film that could serve as their homepage hero and investor deck centerpiece.',
    approach:
      'Edited a narrative-driven piece with interview voiceover, B-roll cutaways, and a custom sound design. Color-graded with warm, earthy tones to match the brand.',
    gallery: [px(67654), px(13811053), px(10395639)],
  },
  {
    id: 'video-04',
    title: 'YouTube Long-Form Content',
    category: 'video',
    categoryLabel: 'Video Editing',
    description:
      'Professional long-form YouTube video with motion graphics, captions, B-roll, and smooth transitions.',
    tools: ['Premiere Pro', 'After Effects'],
    image: px(33440446),
    aspect: 'tall',
    role: 'Video Editor / Motion Designer',
    overview:
      'A 15-minute educational YouTube video with animated motion graphics, on-screen captions, B-roll integration, and professional transitions.',
    creativeDirection:
      'Clean, informative, and engaging. Consistent lower-third graphics with smooth animated transitions between segments.',
    challenge:
      'The creator needed long-form content that retained viewer attention across 15 minutes without feeling repetitive.',
    approach:
      'Edited with a dynamic pacing structure — intro hook, chapter markers, animated motion graphics for key points, B-roll to illustrate concepts, and custom end-screen.',
    gallery: [px(33440446), px(36730081), px(14772071)],
  },
  {
    id: 'video-05',
    title: 'Product Launch Video',
    category: 'video',
    categoryLabel: 'Video Editing',
    description:
      'Dynamic launch video combining product animation, typography, sound-design-inspired visuals, and motion graphics.',
    tools: ['Premiere Pro', 'After Effects'],
    image: px(32774292),
    aspect: 'wide',
    role: 'Video Editor / Motion Designer',
    overview:
      'A 45-second product launch video combining 3D product animation, kinetic typography, and motion graphics. Designed for keynote presentation and social.',
    creativeDirection:
      'Sleek, futuristic, and dramatic. Dark studio environment with animated product reveals and synced motion typography.',
    challenge: 'The product was still in production and needed a launch video before physical units were available.',
    approach:
      'Combined 3D product renders with motion graphics in After Effects, synced to a custom sound design. Created multiple cut-downs for different platforms.',
    gallery: [px(32774292), px(17115910), px(8102680)],
  },
  {
    id: '3d-01',
    title: 'Surreal Product Advertisement',
    category: '3d',
    categoryLabel: 'Photoshop / 3D',
    description:
      'Product floating in a dramatic surreal environment with advanced compositing and atmospheric effects.',
    tools: ['Photoshop', 'Cinema 4D', 'Illustrator'],
    image: px(582490),
    aspect: 'tall',
    role: 'Digital Artist / Art Director',
    overview:
      'A surreal product composition featuring a skincare bottle floating in a dreamlike environment with dramatic lighting and atmospheric particles.',
    creativeDirection:
      'Ethereal, dramatic, and otherworldly. Dark atmospheric backgrounds with volumetric light beams and a floating, gravity-defying product.',
    challenge:
      'The brand wanted a campaign visual that felt like art rather than a product shot, while still clearly featuring the product.',
    approach:
      'Composited product photography with custom 3D environment renders in Cinema 4D, then refined in Photoshop with volumetric lighting, particle effects, and color grading.',
    gallery: [px(582490), px(9962770), px(30869136)],
  },
  {
    id: '3d-02',
    title: '3D Product Campaign',
    category: '3d',
    categoryLabel: 'Photoshop / 3D',
    description:
      'Premium 3D-inspired product composition with dramatic lighting and studio-quality rendering.',
    tools: ['Cinema 4D', 'Photoshop', 'Octane Render'],
    image: px(7897470),
    aspect: 'wide',
    role: '3D Artist / Digital Designer',
    overview:
      'A 3D product campaign featuring a tech accessory rendered in a dramatic studio environment with custom lighting and premium materials.',
    creativeDirection:
      'Dark, premium, and sculptural. Matte product materials against dark gradient backgrounds with rim lighting that highlights form and texture.',
    challenge:
      'The product was still in prototyping and needed campaign visuals before physical production.',
    approach:
      'Created a photorealistic 3D model from CAD files, rendered with custom studio lighting in Octane, and refined color and contrast in Photoshop.',
    gallery: [px(7897470), px(12198526), px(29450016)],
  },
  {
    id: '3d-03',
    title: 'Fashion Editorial Composite',
    category: '3d',
    categoryLabel: 'Photoshop / 3D',
    description:
      'Luxury fashion campaign with advanced Photoshop compositing, dramatic lighting, and editorial art direction.',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    image: px(30869136),
    aspect: 'tall',
    role: 'Digital Artist / Retoucher',
    overview:
      'A fashion editorial composite combining studio photography with custom backgrounds, dramatic lighting effects, and advanced retouching.',
    creativeDirection:
      'Dramatic, high-contrast, and editorial. Silhouette-driven compositions with moody lighting and painterly background textures.',
    challenge:
      'The editorial needed a cohesive visual style across 5 images shot on different days with different lighting setups.',
    approach:
      'Shot models against a neutral backdrop, then composited each into custom-painted digital environments in Photoshop with unified color grading.',
    gallery: [px(30869136), px(9962770), px(582490)],
  },
  {
    id: '3d-04',
    title: 'Product Hero Shot',
    category: '3d',
    categoryLabel: 'Photoshop / 3D',
    description:
      'E-commerce product transformed into a premium advertising hero image with studio compositing.',
    tools: ['Photoshop', 'Cinema 4D', 'Lightroom'],
    image: px(12198526),
    aspect: 'wide',
    role: 'Digital Artist',
    overview:
      'A product hero shot for e-commerce featuring a skincare bottle composited onto a premium studio background with custom lighting and reflections.',
    creativeDirection:
      'Clean, premium, and shelf-ready. Soft gradient backgrounds with precise product lighting and subtle reflections for a high-end catalog feel.',
    challenge:
      'The brand needed a hero image that worked equally well on their product page, Amazon listing, and ad campaigns.',
    approach:
      'Shot the product in a controlled studio setup, then composited onto a custom gradient background in Photoshop with manual reflection and shadow work.',
    gallery: [px(12198526), px(7897470), px(29450016)],
  },
  {
    id: '3d-05',
    title: 'Experimental Creative Composition',
    category: '3d',
    categoryLabel: 'Photoshop / 3D',
    description:
      'Artistic commercial composition combining photography, typography, 3D elements, and digital manipulation.',
    tools: ['Photoshop', 'Cinema 4D', 'Illustrator'],
    image: px(29450016),
    aspect: 'tall',
    role: 'Digital Artist / Art Director',
    overview:
      'An experimental creative composition blending 3D geometric forms, product photography, and bold typography into a single art-directed campaign visual.',
    creativeDirection:
      'Avant-garde, sculptural, and bold. Abstract 3D forms interact with product photography in unexpected compositions with oversized type.',
    challenge:
      'The brand wanted a campaign visual that would stop people in their feed — something that felt more like art than advertising.',
    approach:
      'Rendered abstract 3D geometric forms in Cinema 4D, composited with product photography in Photoshop, and integrated bold typography as a design element, not just a label.',
    gallery: [px(29450016), px(7897470), px(12198526)],
  },
  {
    id: 'uiux-01',
    title: 'Fintech Dashboard',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    description:
      'Modern financial dashboard UI with account overview, transaction history, and investment tracking.',
    tools: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    image: px(97080),
    aspect: 'wide',
    role: 'Product Designer',
    overview:
      'A fintech dashboard design for a personal finance app. The interface shows account balances, spending insights, investment performance, and recent transactions.',
    creativeDirection:
      'Clean, trustworthy, and data-forward. Deep navy with mint green accents and card-based layouts for scannable financial data.',
    challenge:
      'Users needed to understand their full financial picture at a glance without feeling overwhelmed by data.',
    approach:
      'Designed a card-based dashboard with a summary hero card, expandable transaction lists, and interactive charts. Conducted user testing with 12 participants to refine the information hierarchy.',
    gallery: [px(97080), px(38808473), px(38933571)],
  },
  {
    id: 'uiux-02',
    title: 'E-Commerce Mobile App',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    description:
      'Product discovery, product detail, cart, and checkout screens for a modern e-commerce mobile app.',
    tools: ['Figma', 'UI Design', 'Prototyping', 'UX Research'],
    image: px(5444435),
    aspect: 'tall',
    role: 'Product Designer',
    overview:
      'A complete e-commerce mobile app design covering product discovery, product detail, cart, and a 3-step checkout flow. Designed for iOS and Android.',
    creativeDirection:
      'Clean, image-forward, and tactile. Full-bleed product imagery with floating UI elements and smooth gesture-based interactions.',
    challenge:
      'The app needed to reduce cart abandonment while providing a premium shopping experience that matched the brand website.',
    approach:
      'Designed a gesture-driven interface with swipe-to-cart, a persistent mini-cart, and a streamlined 3-step checkout. Prototyped the full flow in Figma and tested with 20 users.',
    gallery: [px(5444435), px(147413), px(969462)],
  },
  {
    id: 'uiux-03',
    title: 'SaaS Dashboard',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    description:
      'Clean SaaS application interface with analytics, team management, and account settings.',
    tools: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    image: px(38808473),
    aspect: 'wide',
    role: 'Product Designer',
    overview:
      'A SaaS analytics dashboard with data visualization, team management, and account configuration. Designed for both power users and first-time customers.',
    creativeDirection:
      'Minimal, functional, and professional. Light theme with subtle shadows, clear data hierarchy, and a persistent sidebar navigation.',
    challenge:
      'The product served both technical analysts and non-technical business owners who needed very different levels of detail.',
    approach:
      'Designed a customizable dashboard with drag-and-drop widgets, a simple/advanced toggle, and role-based navigation. Created a design system in Figma with 60+ components.',
    gallery: [px(38808473), px(38933571), px(97080)],
  },
  {
    id: 'uiux-04',
    title: 'Travel Discovery App',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    description:
      'Travel discovery and booking experience with destination search, itinerary planning, and booking flow.',
    tools: ['Figma', 'UI Design', 'Prototyping', 'UX Research'],
    image: px(8713556),
    aspect: 'tall',
    role: 'Product Designer',
    overview:
      'A travel app design covering destination discovery, trip planning, and booking. The interface uses immersive photography and a card-based exploration pattern.',
    creativeDirection:
      'Immersive, inspiring, and adventurous. Full-screen destination photography with floating glassmorphic UI elements and warm accent colors.',
    challenge:
      'Travel apps often overwhelm users with options. The design needed to inspire exploration while keeping the booking flow simple.',
    approach:
      'Designed a discovery-first interface with curated destination cards, a swipe-based favorites system, and a step-by-step booking wizard. Prototyped and tested the full booking flow.',
    gallery: [px(8713556), px(34408978), px(7455241)],
  },
  {
    id: 'uiux-05',
    title: 'Health & Lifestyle App',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    description:
      'Modern mobile app interface with activity dashboard, tracking, and profile screens.',
    tools: ['Figma', 'UI Design', 'Prototyping', 'UX Research'],
    image: px(4428994),
    aspect: 'wide',
    role: 'Product Designer',
    overview:
      'A health and lifestyle app design with an activity dashboard, workout tracking, nutrition logging, and profile screens. Designed for daily engagement.',
    creativeDirection:
      'Energetic, motivating, and clean. Vibrant gradient accents on white backgrounds with circular progress indicators and friendly data visualizations.',
    challenge:
      'Health apps often lose users after the first week. The design needed to feel motivating and rewarding for daily use.',
    approach:
      'Designed a gamified dashboard with daily streaks, achievement badges, and social comparison features. Conducted a 2-week diary study to understand user motivation patterns.',
    gallery: [px(4428994), px(6823515), px(4428992)],
  },
  {
    id: 'mkt-01',
    title: 'Competitor Research Dashboard',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    description:
      'Visual competitor analysis dashboard showing market positioning, ad strategies, and content performance.',
    tools: ['Figma', 'Notion', 'Google Analytics'],
    image: px(38933571),
    aspect: 'wide',
    role: 'Marketing Strategist',
    overview:
      'A visual competitor research dashboard analyzing 8 competing brands across positioning, ad creative, content strategy, and performance metrics.',
    creativeDirection:
      'Analytical, clear, and strategic. Clean data visualizations with color-coded competitor profiles and a summary insights panel.',
    challenge:
      'The client needed a comprehensive competitor overview that was digestible enough to share with stakeholders and actionable enough to guide strategy.',
    approach:
      'Built a visual dashboard in Figma combining market positioning maps, ad creative audits, content frequency analysis, and a prioritized insights summary.',
    gallery: [px(38933571), px(38808473), px(97080)],
  },
  {
    id: 'mkt-02',
    title: 'Winning Ad Research Board',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    description:
      'Creative research board showing ad concepts, hooks, visual directions, and messaging strategies.',
    tools: ['Figma', 'Miro', 'Meta Ads Library'],
    image: px(15635241),
    aspect: 'tall',
    role: 'Marketing Strategist',
    overview:
      'A creative research board analyzing 50+ winning ads in the DTC supplement space. The board categorizes hooks, visual patterns, and messaging angles.',
    creativeDirection:
      'Organized, visual, and strategic. A masonry-style board with color-coded category tags and annotation callouts on each ad creative.',
    challenge:
      'The brand needed to understand why certain competitor ads were winning before briefing their own creative team.',
    approach:
      'Collected and tagged 50+ ads from the Meta Ads Library, categorized by hook type, visual pattern, and messaging angle. Created a visual board with insights and recommended directions.',
    gallery: [px(15635241), px(6956303), px(15635245)],
  },
  {
    id: 'mkt-03',
    title: 'Social Media Strategy',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    description:
      'Content strategy and campaign planning dashboard with content pillars, posting cadence, and performance targets.',
    tools: ['Figma', 'Notion', 'Later'],
    image: px(6956303),
    aspect: 'wide',
    role: 'Marketing Strategist',
    overview:
      'A social media strategy presentation defining content pillars, posting cadence, platform priorities, and 90-day content calendar.',
    creativeDirection:
      'Structured, visual, and actionable. Clean calendar grids with color-coded content pillars and a strategy summary dashboard.',
    challenge:
      'The brand was posting inconsistently and needed a sustainable content system that aligned with their growth goals.',
    approach:
      'Defined 4 content pillars, created a weekly posting cadence per platform, built a 90-day content calendar, and set up performance tracking dashboards.',
    gallery: [px(6956303), px(15635241), px(15635245)],
  },
  {
    id: 'mkt-04',
    title: 'SEO Research Presentation',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    description:
      'Keyword and content research presentation showing search volume, difficulty, and content gap analysis.',
    tools: ['Ahrefs', 'SEMrush', 'Figma', 'Google Sheets'],
    image: px(942331),
    aspect: 'tall',
    role: 'SEO Strategist',
    overview:
      'An SEO research presentation with keyword opportunity analysis, competitor content gap audit, and a prioritized content roadmap.',
    creativeDirection:
      'Data-rich, clear, and strategic. Clean keyword tables with opportunity scoring and a visual content gap matrix.',
    challenge:
      'The brand had strong domain authority but was ranking for the wrong keywords. They needed a focused content strategy.',
    approach:
      'Analyzed 500+ keywords for volume, difficulty, and intent. Identified content gaps against 5 competitors. Created a prioritized 6-month content roadmap.',
    gallery: [px(942331), px(907607), px(270637)],
  },
  {
    id: 'mkt-05',
    title: 'Marketing Campaign Concept',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    description:
      'Complete campaign concept showing audience targeting, creative direction, content plan, and campaign assets.',
    tools: ['Figma', 'Meta Ads', 'Google Ads', 'Notion'],
    image: px(15635245),
    aspect: 'wide',
    role: 'Marketing Strategist',
    overview:
      'A complete marketing campaign concept for a product launch, covering audience segmentation, creative direction, content plan, and multi-channel asset deployment.',
    creativeDirection:
      'Comprehensive, visual, and strategic. A campaign overview dashboard with linked sections for audience, creative, content, and assets.',
    challenge:
      'The brand needed a coordinated launch across 5 channels with consistent messaging but platform-native creative.',
    approach:
      'Defined 3 audience segments, created a unified creative direction with platform-specific adaptations, built a 4-week content calendar, and deployed across Meta, Google, TikTok, email, and influencer channels.',
    gallery: [px(15635245), px(15635241), px(6956303)],
  },
  {
    id: 'webdev-01',
    title: 'Full-Stack E-Commerce Platform',
    category: 'webdev',
    categoryLabel: 'Web Development',
    description:
      'Fictional full-stack e-commerce experience with product database, product pages, cart, checkout concept, customer account, and admin dashboard.',
    tools: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    image: px(35560482),
    aspect: 'wide',
    role: 'Full-Stack Developer',
    overview:
      'A complete e-commerce platform concept covering the full customer journey — product discovery, cart, checkout, customer account, and an admin dashboard for managing products and orders.',
    creativeDirection:
      'Clean, modern, and conversion-focused. A light theme with bold product cards and a streamlined checkout flow.',
    challenge:
      'The concept needed to demonstrate full-stack capability — frontend, backend, database, and admin — in a single cohesive project.',
    approach:
      'Designed a React frontend with a Node.js backend and PostgreSQL database. Product pages, cart, checkout concept, customer accounts, and a full admin dashboard with order and inventory management.',
    gallery: [px(35560482), px(5632391), px(38984817)],
  },
  {
    id: 'webdev-02',
    title: 'SaaS Web Application',
    category: 'webdev',
    categoryLabel: 'Web Development',
    description:
      'SaaS application concept with authentication, dashboard, user management, database, API integration, and analytics.',
    tools: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase'],
    image: px(38808473),
    aspect: 'tall',
    role: 'Full-Stack Developer',
    overview:
      'A SaaS application concept with user authentication, a feature-rich dashboard, user management, database-driven analytics, and third-party API integration.',
    creativeDirection:
      'Minimal, professional, and data-forward. A clean dashboard interface with clear data hierarchy and role-based navigation.',
    challenge:
      'The concept needed to show both the user-facing application and the admin-side management system in one project.',
    approach:
      'Built a Next.js frontend with authentication, a dashboard with analytics charts, user management with role-based access, a PostgreSQL database schema, and API integration for analytics data.',
    gallery: [px(38808473), px(38933571), px(97080)],
  },
  {
    id: 'webdev-03',
    title: 'CRM / Lead Management System',
    category: 'webdev',
    categoryLabel: 'Web Development',
    description:
      'Lead management system concept with landing page, lead form, CRM database, admin dashboard, and automation.',
    tools: ['React', 'Node.js', 'PostgreSQL', 'GoHighLevel', 'Tailwind CSS'],
    image: px(15635241),
    aspect: 'wide',
    role: 'Full-Stack Developer',
    overview:
      'A CRM and lead management system concept connecting a landing page lead form to a CRM database with an admin dashboard and automated follow-up sequences.',
    creativeDirection:
      'Functional, organized, and modern. A split-view interface with lead pipeline and detail panels with clear status tracking.',
    challenge:
      'The concept needed to show the full lead journey from capture to conversion, including automation.',
    approach:
      'Built a landing page with a lead capture form, a PostgreSQL-backed CRM database, an admin dashboard with lead pipeline view, and webhook-driven automation for email follow-up sequences.',
    gallery: [px(15635241), px(15635245), px(6956303)],
  },
  {
    id: 'webdev-04',
    title: 'Custom Shopify Store',
    category: 'webdev',
    categoryLabel: 'Web Development',
    description:
      'Shopify store concept with homepage, collection page, product page, cart, mobile experience, and custom sections.',
    tools: ['Shopify', 'Liquid', 'Figma', 'Klaviyo'],
    image: px(11911863),
    aspect: 'tall',
    role: 'Shopify Developer',
    overview:
      'A custom Shopify store concept with a designed homepage, collection pages with filtering, product pages with variant selectors, cart, and a mobile-optimized experience.',
    creativeDirection:
      'Editorial, clean, and brand-driven. Custom Shopify sections with lifestyle imagery and a seamless mobile shopping experience.',
    challenge:
      'The concept needed to show custom Shopify development beyond a standard theme — custom sections, Liquid logic, and mobile optimization.',
    approach:
      'Built custom Shopify sections with Liquid, a designed homepage with editorial blocks, collection pages with AJAX filtering, product pages with variant selectors and sticky add-to-cart, and a fully optimized mobile experience.',
    gallery: [px(11911863), px(1488470), px(3965545)],
  },
  {
    id: 'webdev-05',
    title: 'Amazon Brand Experience',
    category: 'webdev',
    categoryLabel: 'Web Development',
    description:
      'Amazon brand experience concept with listing creative, product infographics, A+ content, storefront design, and advertising creative.',
    tools: ['Photoshop', 'Illustrator', 'Figma', 'Amazon Ads'],
    image: px(17604755),
    aspect: 'wide',
    role: 'Amazon Creative Designer',
    overview:
      'A complete Amazon brand experience concept covering the full customer journey — from main listing image through product infographics, A+ content, storefront design, and advertising creative.',
    creativeDirection:
      'Conversion-focused, clean, and brand-consistent. Professional product infographics with benefit callouts and a cohesive storefront design.',
    challenge:
      'The concept needed to show the full Amazon creative pipeline from listing to advertising in a single project.',
    approach:
      'Designed the main listing image, product infographics with feature callouts, A+ content modules, a brand storefront with category navigation, and sponsored ad creative — all with a unified visual system.',
    gallery: [px(17604755), px(13013778), px(17820733)],
  },
]

export const CREATIVE_VIDEO = '/creative/video'
export const CREATIVE_STATIC = '/creative/static-ads'
export const CREATIVE_GRAPHIC = '/creative/graphic-design'
export const CREATIVE_EMAIL = '/creative/email-marketing'

export const videoPortfolio = [
  {
    id: 'video-wardiere',
    title: 'Wardiere Residence',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'featured',
    type: 'video',
    src: `${CREATIVE_VIDEO}/wardiere-residence.mp4`,
    description:
      'Featured long-form brand film — cinematic interior residence showcase.',
  },
  {
    id: 'video-0824',
    title: '0824',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'featured',
    type: 'video',
    src: `${CREATIVE_VIDEO}/0824.mp4`,
    description:
      'Featured long-form film — atmospheric narrative edit.',
  },
  {
    id: 'video-casio',
    title: 'CASIO Watch',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/casio-watch-ads.mp4`,
    description:
      'Performance social ad for CASIO timepieces.',
  },
  {
    id: 'video-hair',
    title: 'Hair Supplement',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/hair-supplement-ads.mp4`,
    description:
      'Performance creative for a hair supplement brand.',
  },
  {
    id: 'video-hikari',
    title: 'Hikari',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/hikari-ads.mp4`,
    description:
      'Social ad creative for Hikari.',
  },
  {
    id: 'video-0829',
    title: '0829',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/0829.mp4`,
    description:
      'Performance short-form edit.',
  },
  {
    id: 'video-nike',
    title: 'Nike',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/nike-ads.mp4`,
    description:
      'Performance ad creative for Nike.',
  },
  {
    id: 'video-cayene',
    title: 'Cayene',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/cayene-ads.mp4`,
    description:
      'Performance ad creative for Cayene.',
  },
  {
    id: 'video-vit-d3',
    title: 'Vit D3',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/vit-d3-promotion.mp4`,
    description:
      'Product video promotion for a Vit D3 supplement.',
  },
  {
    id: 'video-goli',
    title: 'Goli Gummies',
    category: 'video',
    categoryLabel: 'Video & Motion',
    group: 'performance',
    type: 'video',
    src: `${CREATIVE_VIDEO}/goli-gummies-promotion.mp4`,
    description:
      'Product video promotion for Goli gummies.',
  },
]

export const staticAdsPortfolio = [
  {
    id: 'static-01',
    title: 'Crispier. Tastier. Happier.',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/01_KFC_Crispier_Tastier_Happier.png`,
    description: 'KFC performance ad creative.',
  },
  {
    id: 'static-02',
    title: 'Good Coffee, Better Days',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/02_Corner_Cafe_Good_Coffee_Better_Days.png`,
    description: 'Corner Café ad creative.',
  },
  {
    id: 'static-03',
    title: 'Smart Focus Today',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/03_Ginkgo_Smart_Focus_Today.png`,
    description: 'Ginkgo supplement ad creative.',
  },
  {
    id: 'static-04',
    title: 'A Scent',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/04_Victorias_Secret_A_Scent.png`,
    description: "Victoria's Secret fragrance ad creative.",
  },
  {
    id: 'static-05',
    title: 'Fresh Floral',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/05_Victorias_Secret_Fresh_Floral.png`,
    description: "Victoria's Secret fragrance ad creative.",
  },
  {
    id: 'static-06',
    title: 'Dewy Skin Starts Here',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/06_Dewy_Skin_Starts_Here.png`,
    description: 'Skincare product ad creative.',
  },
  {
    id: 'static-07',
    title: 'Peak Performance',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/07_B157_Peak_Performance.png`,
    description: 'B157 supplement ad creative.',
  },
  {
    id: 'static-08',
    title: 'Brewed For Your Moments',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/08_Corner_Cafe_Brewed_For_Your_Moments.png`,
    description: 'Corner Café ad creative.',
  },
  {
    id: 'static-09',
    title: 'Scents & Stories: Catch-22',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/09_Scents_Stories_Catch_22.png`,
    description: 'Fragrance storytelling ad creative.',
  },
  {
    id: 'static-10',
    title: 'Beauty In Every Perspective',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/10_Beauty_In_Every_Perspective.png`,
    description: 'Beauty brand ad creative.',
  },
  {
    id: 'static-11',
    title: 'Email Marketing That Drives Results',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/11_Email_Marketing_That_Drives_Results.png`,
    description: 'Email marketing service ad creative.',
  },
  {
    id: 'static-12',
    title: 'Live Bold',
    category: 'static-ads',
    categoryLabel: 'Static Ads & Creative',
    type: 'image',
    src: `${CREATIVE_STATIC}/12_MAKA_Home_Live_Bold.png`,
    description: 'MAKA Home brand ad creative.',
  },
]

export const graphicDesignPortfolio = [
  {
    id: 'gd-a',
    title: 'Graphic Design — A',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-a.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-b',
    title: 'Graphic Design — B',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-b.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-c',
    title: 'Graphic Design — C',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-c.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-d',
    title: 'Graphic Design — D',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-d.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-e',
    title: 'Graphic Design — E',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-e.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-f',
    title: 'Graphic Design — F',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-f.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-g',
    title: 'Graphic Design — G',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-g.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-h',
    title: 'Graphic Design — H',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-h.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-i',
    title: 'Graphic Design — I',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-i.png`,
    description: 'Approved graphic design artwork.',
  },
  {
    id: 'gd-j',
    title: 'Graphic Design — J',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    type: 'image',
    src: `${CREATIVE_GRAPHIC}/graphic-j.png`,
    description: 'Approved graphic design artwork.',
  },
]

export const emailMarketingPortfolio = [
  {
    id: 'email-lumiere',
    title: 'Lumière Email Campaign',
    category: 'email-marketing',
    categoryLabel: 'Email Marketing',
    type: 'image',
    src: `${CREATIVE_EMAIL}/01_Lumiere_Email_Campaign.png`,
    description:
      'Long-form luxury email campaign — oversized product storytelling.',
  },
  {
    id: 'email-solara',
    title: 'Solara Email Campaign',
    category: 'email-marketing',
    categoryLabel: 'Email Marketing',
    type: 'image',
    src: `${CREATIVE_EMAIL}/02_Solara_Email_Campaign.png`,
    description:
      'Long-form lifestyle email campaign — floating product compositing.',
  },
  {
    id: 'email-corner-cafe',
    title: 'Corner Café Email Campaign',
    category: 'email-marketing',
    categoryLabel: 'Email Marketing',
    type: 'image',
    src: `${CREATIVE_EMAIL}/03_Corner_Cafe_Email_Campaign.png`,
    description:
      'Long-form café email campaign — editorial product storytelling.',
  },
  {
    id: 'email-purely',
    title: 'Purely Orange Juice Email Campaign',
    category: 'email-marketing',
    categoryLabel: 'Email Marketing',
    type: 'image',
    src: `${CREATIVE_EMAIL}/04_Purely_Orange_Juice_Email_Campaign.png`,
    description:
      'Long-form beverage email campaign — liquid effects and gradient transitions.',
  },
]

export const creativePortfolio = [
  {
    id: 'video',
    label: 'VIDEO & MOTION',
    sublabel: 'FILM · EDIT · MOTION',
    type: 'video',
    items: videoPortfolio,
  },
  {
    id: 'static-ads',
    label: 'STATIC ADS & CREATIVE',
    sublabel: 'PERFORMANCE · SOCIAL · PRODUCT',
    type: 'image',
    items: staticAdsPortfolio,
  },
  {
    id: 'graphic-design',
    label: 'GRAPHIC DESIGN',
    sublabel: 'BRAND · PRODUCT · EDITORIAL',
    type: 'image',
    items: graphicDesignPortfolio,
  },
  {
    id: 'email-marketing',
    label: 'EMAIL MARKETING',
    sublabel: 'DTC · STORYTELLING · CONVERSION',
    type: 'image',
    items: emailMarketingPortfolio,
  },
]