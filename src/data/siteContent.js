// EXTERNAL SETUP REQUIRED (toggle featureFlags when ready):
//   1. Google Business Profile — enables reviews links
//   2. WhatsApp Business — enables WhatsApp CTAs
//   3. Calendly account — enables booking CTAs
//   4. Spec pack PDF — enables architect download
export const featureFlags = {
  googleReviews: false,
  whatsapp: false,
  calendly: false,
  specPackDownload: false,
}

export const images = {
  heroHome: '/assets/images/hero-home.jpg',
  cabinMachineRoom: '/assets/images/cabin-machine-room.jpg',
  officeBuilding: '/assets/images/office-building.jpg',
  homeResidential: '/assets/images/home-residential.jpg',
  projectBananaIsland: '/assets/images/project-banana-island.jpg',
  projectIslandClub: '/assets/images/project-island-club.jpg',
  projectIkoyiClub: '/assets/images/project-ikoyi-club.jpg',
  projectAlausa: '/assets/images/project-alausa.jpg',
  projectAfikpo: '/assets/images/project-afikpo.jpg',
  projectSwiftLift: '/assets/images/project-swift-lift.jpg',
  projectBabaIteri: '/assets/images/project-baba-iteri.jpg',
  projectGabrielSite: '/assets/images/project-gabriel-site.jpeg',
  projectJohnsonSite: '/assets/images/project-johnson-site.jpeg',
}

export const brand = {
  logo: '/assets/open-design/assets/logo/vip-lift-nigeria-horizontal-navy.svg',
  logoLight: '/assets/open-design/assets/logo/vip-lift-nigeria-horizontal-white.svg',
  favicon: '/assets/favicon.png',
  faviconLight: '/assets/favicon-light.png',
  faviconDark: '/assets/favicon-dark.png',
  tagline: 'Value, Innovation and Prestige',
}

export const contact = {
  email: 'sales@viplift.com.ng',
  phone: '+234 1 4540118',
  phoneHref: 'tel:+23414540118',
  whatsappLabel: 'WhatsApp',
  whatsappHref:
    'https://wa.me/23414540118?text=Hello%20VIP%20Lift%2C%20I%20would%20like%20to%20discuss%20a%20lift%20solution.',
  hours: 'Monday - Friday, 08:00 - 17:00',
  responseTime: 'We respond within 1 business day.',
  address:
    'Suite 1910, 19th Floor, 8/10 Broad Street, Western House, Lagos Island, Lagos, Nigeria',
  mapHref:
    'https://www.google.com/maps/search/?api=1&query=Western%20House%208%2F10%20Broad%20Street%20Lagos%20Island%20Lagos%20Nigeria',
  googleBusinessHref:
    'https://www.google.com/maps/search/?api=1&query=VIP%20Lift%20Nigeria%20Lagos',
  calendlyHref: 'https://calendly.com/viplift/consultation',
  calendlyLabel: 'Book a Consultation',
  specPackMailtoSubject: 'VIP%20Lift%20Technical%20Spec%20Pack%20Request',
}

export const inquiryBar = {
  prompt: 'Discuss a lift solution for your home or business.',
  cta: { label: 'Email VIP Lift', subject: 'VIP%20Lift%20Project%20Enquiry' },
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services/home-lifts' },
  { label: 'Customize Lift', href: '/customize-lift' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  eyebrow: 'Value, Innovation and Prestige',
  title: 'Lift solutions for homes and businesses in Lagos',
  summary:
    'VIP Lift Nigeria supplies, installs, and maintains elegant platform and MRL lift systems for private homes, public buildings, and commercial environments across Nigeria.',
  promo: 'Supply, installation, and maintenance from Lagos',
  primaryCta: {
    label: 'Call for a Site Visit',
    href: contact.phoneHref,
  },
  secondaryCta: {
    label: 'Request Home Lift Consultation',
    href: `mailto:${contact.email}?subject=VIP%20Lift%20Home%20Lift%20Consultation`,
  },
  image: images.heroHome,
}

export const pageHeroes = {
  about: {
    eyebrow: 'Who we are',
    title: 'A lift technology and engineering company operating from Lagos.',
    summary:
      'VIP Lift specializes in the supply, installation, and maintenance of Cibes lifts and other premium elevating solutions for private homes and public buildings.',
    image: images.cabinMachineRoom,
  },
  projects: {
    eyebrow: 'Completed projects',
    title: 'Selected lift installations across homes, clubs, and public buildings.',
    summary:
      'VIP Lift supports everything from drawings and material selection to installation, service, and maintenance.',
    image: images.officeBuilding,
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Discuss a lift solution for your home or business.',
    summary:
      'We would be delighted to discuss how VIP Lift can present valuable, innovative, and prestigious lift solutions at a date and time convenient to you.',
    image: images.homeResidential,
  },
  serviceArea: {
    eyebrow: 'Where we work',
    title: 'Lift supply, installation, and maintenance across Nigeria.',
    summary:
      'VIP Lift is based in Lagos and coordinates lift projects for residential, commercial, and public buildings nationwide.',
    image: images.officeBuilding,
  },
  customizeLift: {
    eyebrow: 'Configure your lift',
    title: 'Tell us about your building and lift requirements.',
    summary:
      'Answer a few questions about your space and we will prepare a tailored enquiry for our engineering team.',
    image: images.homeResidential,
  },
}

export const processSteps = [
  {
    step: '01',
    title: 'Enquiry',
    summary: 'Call, email, or WhatsApp us with your building type and lift requirements.',
  },
  {
    step: '02',
    title: 'Site survey',
    summary: 'We assess your space, access routes, and structural considerations on site.',
  },
  {
    step: '03',
    title: 'Design and quote',
    summary: 'Receive specifications, drawings where needed, and a detailed quotation.',
  },
  {
    step: '04',
    title: 'Install and support',
    summary: 'Coordinated installation followed by maintenance and after-sales support.',
  },
]

export const faqItems = [
  {
    question: 'Can a platform lift fit in an existing home without major construction?',
    answer:
      'In many cases, yes. Cibes platform lifts are designed for retrofit installations with compact footprints and flexible dimensions. A site survey confirms what is possible for your building.',
  },
  {
    question: 'How long does installation typically take?',
    answer:
      'Timelines depend on building type, lift model, and site readiness. After a site survey, we provide a project schedule covering supply, installation, and commissioning.',
  },
  {
    question: 'Do you provide maintenance after installation?',
    answer:
      'Yes. VIP Lift offers after-sales maintenance for Cibes platform lifts and Italian MRL installations, with coordinated support from our Lagos office.',
  },
  {
    question: 'What certifications do your lifts carry?',
    answer:
      'Our lifts are CE-certified and compliant with European Standard EN 81-41 and the Machinery Directive 2006/42/EC.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Contact us by phone, email, or WhatsApp to arrange a consultation or site visit. We provide detailed quotations after assessing your requirements.',
  },
  {
    question: 'Do you work with architects and contractors?',
    answer:
      'Yes. We support specifiers with technical documentation, drawings, and project coordination from design through installation.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Lagos and serve clients across Nigeria, including residential, commercial, and public-sector projects.',
  },
  {
    question: 'Is pricing available on the website?',
    answer:
      'Lift pricing depends on building conditions, model, and finish. We provide transparent quotations after a site assessment rather than generic online pricing.',
  },
]

export const certifications = [
  { label: 'CE Certified', detail: 'European conformity assessment' },
  { label: 'EN 81-41', detail: 'Platform lift safety standard' },
  { label: 'Machinery Directive', detail: '2006/42/EC compliant' },
  { label: 'Cibes Partner', detail: 'Swedish platform lift systems' },
]

export const testimonials = [
  {
    quote:
      'The installation was coordinated smoothly from specification through commissioning. The lift fits the building well and operates quietly.',
    source: 'Facility manager',
    context: 'Private club installation, Lagos',
  },
  {
    quote:
      'VIP Lift provided the technical drawings and dimensions we needed early in the design phase, which helped keep the project on schedule.',
    source: 'Project architect',
    context: 'Residential retrofit, Lagos Island',
  },
  {
    quote:
      'We needed accessibility access in an existing public building. The platform lift solution addressed the space constraints without extensive structural changes.',
    source: 'Building owner representative',
    context: 'Public building, Lagos',
  },
]

export const serviceAreas = [
  'Lagos Island',
  'Victoria Island',
  'Ikoyi',
  'Lekki',
  'Banana Island',
  'Ikeja',
  'Abuja',
  'Port Harcourt',
  'Nationwide project coordination',
]

export const services = [
  {
    slug: 'home-lifts',
    title: 'Home Lifts',
    summary:
      'Space-conscious platform lifts designed as tasteful alternatives to stairs and value-adding additions to private homes.',
    description:
      'VIP Lift supplies and installs platform lifts for private residences where conventional elevators may not fit. Our home lift solutions are quiet, compact, and suitable for new builds and retrofits in existing homes.',
    image: images.homeResidential,
    highlights: [
      'Compact footprint for existing homes',
      'Electric screw technology — quiet operation',
      'Flexible interior finishes',
      'Capacities up to 1000 kg',
    ],
    primaryCta: {
      label: 'Request Home Lift Consultation',
      subject: 'VIP%20Lift%20Home%20Lift%20Consultation',
    },
  },
  {
    slug: 'public-lifts',
    title: 'Public Lifts',
    summary:
      'Flexible lift solutions for hospitals, shopping malls, churches, offices, schools, restaurants, factories, clubs, and apartment buildings.',
    description:
      'From clubs and offices to hospitals and public buildings, VIP Lift provides MRL and platform lift systems designed for high-traffic environments with reliable performance and coordinated installation.',
    image: images.officeBuilding,
    highlights: [
      'Commercial and public building experience',
      'Italian MRL lift systems',
      'Accessibility and compliance focus',
      'Project coordination from Lagos',
    ],
    primaryCta: {
      label: 'Get a Project Quote',
      subject: 'VIP%20Lift%20Public%20Lift%20Quote',
    },
  },
  {
    slug: 'maintenance',
    title: 'Maintenance',
    summary:
      'First-class after-sales maintenance support for Swedish-made Cibes lifts and Italian MRL lift installations.',
    description:
      'Keep your lift running safely with scheduled maintenance and responsive support. VIP Lift maintains Cibes platform lifts and Italian MRL installations with a fixed contact point from our Lagos office.',
    image: images.cabinMachineRoom,
    highlights: [
      'After-sales support from Lagos',
      'Cibes and MRL system expertise',
      'Scheduled maintenance programmes',
      'Existing lift? Call for support',
    ],
    primaryCta: {
      label: 'Book a Service Call',
      subject: 'VIP%20Lift%20Maintenance%20Enquiry',
    },
  },
]

export const proofPoints = [
  'Swedish-made Cibes platform lifts and Italian MRL lift systems',
  'CE-Certified safe and compliant with European Standard EN 81-41',
  'Compliant with the Machinery Directive 2006/42/EC',
  'Powered by electric lifting screw technology, not hydraulics',
  'Quiet, user-friendly, robust, and suitable for existing buildings',
  'After-sales maintenance and project coordination from Lagos',
]

export const audiences = [
  {
    slug: 'architects',
    title: 'For architects',
    summary:
      'Technical specifications, quotations, drawings, illustrations, and design support for projects where functionality and interior finish both matter.',
    description:
      'VIP Lift supports architects with early-stage lift specifications, dimensional drawings, and finish options. We help you integrate lift solutions into residential and commercial designs without compromising aesthetics or compliance.',
    benefits: [
      'Technical specifications and dimensional drawings',
      'Design support for shaft and platform layouts',
      'Quotations for project budgeting',
      'Coordination through installation',
    ],
    primaryCta: {
      label: 'Request Technical Specs and Drawings',
      subject: 'VIP%20Lift%20Architect%20Spec%20Request',
    },
    image: images.cabinMachineRoom,
  },
  {
    slug: 'contractors',
    title: 'For contractors',
    summary:
      'Reliable project coordination, required building details, prompt delivery, and a fixed contact point from planning through installation.',
    description:
      'Contractors working on new builds and retrofits rely on VIP Lift for predictable delivery, clear building requirements, and a single point of contact from planning through commissioning.',
    benefits: [
      'Fixed contact point for the project duration',
      'Clear building and structural requirements',
      'Coordinated delivery and installation schedules',
      'Support for handover and maintenance planning',
    ],
    primaryCta: {
      label: 'Discuss Installation Timeline',
      subject: 'VIP%20Lift%20Contractor%20Project%20Enquiry',
    },
    image: images.officeBuilding,
  },
  {
    slug: 'building-owners',
    title: 'For building owners',
    summary:
      'Stylish, durable, and easy-to-install platform lifts with flexible dimensions for new and existing buildings where conventional lifts may not fit.',
    description:
      'Whether you manage a private residence, club, or commercial property, VIP Lift helps you select a lift that fits your space, serves your users, and adds long-term value to the building.',
    benefits: [
      'Solutions for new and existing buildings',
      'Quiet, user-friendly operation',
      'European-standard safety and compliance',
      'After-sales maintenance from Lagos',
    ],
    primaryCta: {
      label: 'Call for a Site Visit',
      href: contact.phoneHref,
    },
    image: images.homeResidential,
  },
]

export const projects = [
  {
    slug: 'banana-island-lift',
    title: 'Lift built at Banana Island',
    location: 'Lagos',
    category: 'Residential',
    image: images.projectBananaIsland,
    summary:
      'A private residential platform lift installed at a home on Banana Island, designed to fit existing building constraints while providing reliable vertical access.',
    story:
      'The client needed vertical access within an established residence where a conventional elevator shaft was not practical. VIP Lift assessed the available space, specified a compact platform lift, and coordinated installation to complement the home interior.',
    specs: [
      'Residential platform lift',
      'Retrofit installation',
      'Banana Island, Lagos',
    ],
    featured: true,
  },
  {
    slug: 'island-club-lagos',
    title: 'Island Club, Lagos',
    location: 'Lagos',
    category: 'Commercial',
    image: images.projectIslandClub,
    summary:
      'Lift installation at Island Club, Lagos — a commercial club environment requiring reliable access for members and staff.',
    story:
      'Island Club required a lift solution suited to a busy club environment. VIP Lift managed supply and installation with attention to operational reliability and integration with the existing building layout.',
    specs: ['Commercial club installation', 'High-traffic environment', 'Lagos Island'],
    featured: true,
  },
  {
    slug: 'ikoyi-club-elevator',
    title: 'Elevator at Ikoyi Club',
    location: 'Ikoyi',
    category: 'Commercial',
    image: images.projectIkoyiClub,
    summary:
      'Elevator installation at Ikoyi Club serving members across multiple floors in a premium club setting.',
    story:
      'The Ikoyi Club project called for a lift system that could handle regular daily use while meeting the standards expected in a premium club facility. VIP Lift delivered supply, installation, and ongoing support coordination.',
    specs: ['Club facility', 'Ikoyi, Lagos', 'Multi-floor access'],
    featured: true,
  },
  {
    slug: 'alausa-secretariat-lift',
    title: 'Disabled Lift at Alausa Secretariat',
    location: 'Alausa',
    category: 'Accessibility',
    image: images.projectAlausa,
    summary:
      'Accessibility lift at Alausa Secretariat providing compliant vertical access in a public building.',
    story:
      'This public-sector project required an accessibility-focused lift solution within an existing government building. VIP Lift specified and installed a platform lift designed for users with mobility needs.',
    specs: ['Public building', 'Accessibility lift', 'Alausa, Lagos'],
    featured: false,
  },
  {
    slug: 'afikpo-site-lift',
    title: 'Lift at Afikpo site',
    location: 'Afikpo',
    category: 'Commercial',
    image: images.projectAfikpo,
    summary: 'Lift installation coordinated for a commercial site in Afikpo.',
    story:
      'VIP Lift coordinated supply and installation for this site outside Lagos, demonstrating nationwide project capability.',
    specs: ['Site installation', 'Afikpo', 'Nationwide coordination'],
    featured: false,
  },
  {
    slug: 'swift-lift',
    title: 'Swift Lift',
    location: 'Nigeria',
    category: 'Residential',
    image: images.projectSwiftLift,
    summary: 'Swift lift installation for a residential client.',
    story: 'A compact lift solution supplied and installed for residential vertical access.',
    specs: ['Residential', 'Compact platform lift'],
    featured: false,
  },
  {
    slug: 'baba-iteri-elevator',
    title: 'Elevator at Baba Iteri site',
    location: 'Nigeria',
    category: 'Commercial',
    image: images.projectBabaIteri,
    summary: 'Elevator installation at the Baba Iteri site.',
    story: 'Full elevator supply and installation coordinated for this commercial site.',
    specs: ['Commercial site', 'Elevator installation'],
    featured: false,
  },
  {
    slug: 'gabriel-site-swift-lift',
    title: 'Swift Lift at Gabriel site',
    location: 'Nigeria',
    category: 'Residential',
    image: images.projectGabrielSite,
    summary: 'Swift lift installed at the Gabriel site.',
    story: 'Platform lift installation tailored to the building layout at this residential site.',
    specs: ['Residential site', 'Swift lift model'],
    featured: false,
  },
  {
    slug: 'johnson-site-swift-lift',
    title: 'Swift lift at Johnson site',
    location: 'Nigeria',
    category: 'Residential',
    image: images.projectJohnsonSite,
    summary: 'Swift lift installation at the Johnson site.',
    story: 'Another residential Swift lift installation demonstrating flexible site adaptation.',
    specs: ['Residential site', 'Swift lift model'],
    featured: false,
  },
]

export const customizeLiftSteps = [
  {
    id: 'building',
    title: 'Building type',
    question: 'What type of building is the lift for?',
    options: ['Private home', 'Apartment building', 'Office or commercial', 'Club or hospitality', 'Public building', 'Other'],
  },
  {
    id: 'purpose',
    title: 'Primary use',
    question: 'What is the main purpose of the lift?',
    options: ['Accessibility', 'General vertical access', 'Retrofit in existing building', 'New build installation'],
  },
  {
    id: 'floors',
    title: 'Floors served',
    question: 'How many floors should the lift serve?',
    options: ['2 floors', '3 floors', '4+ floors', 'Not sure yet'],
  },
  {
    id: 'timeline',
    title: 'Timeline',
    question: 'When are you looking to proceed?',
    options: ['As soon as possible', 'Within 3 months', 'Within 6 months', 'Planning stage only'],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getAudienceBySlug(slug) {
  return audiences.find((audience) => audience.slug === slug)
}

export function mailtoHref(subject, body = '') {
  const params = new URLSearchParams()
  if (subject) params.set('subject', decodeURIComponent(subject))
  if (body) params.set('body', body)
  const query = params.toString()
  return `mailto:${contact.email}${query ? `?${query}` : ''}`
}
