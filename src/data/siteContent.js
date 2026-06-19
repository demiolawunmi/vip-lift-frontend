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
  heroHome: '/assets/images/brand/residential-lift-hero.jpg',
  platformLift: '/assets/images/brand/platform-lift-atrium.jpg',
  commercialLift: '/assets/images/brand/commercial-lift-lobby.jpg',
  architecturalPattern: '/assets/brand/architectural-shaft-pattern.svg',
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
  logo: '/assets/brand/logo-horizontal-navy.svg',
  logoLight: '/assets/brand/logo-horizontal-white.svg',
  symbol: '/assets/brand/symbol-navy.svg',
  symbolLight: '/assets/brand/symbol-white.svg',
  favicon: '/assets/favicon.png',
  tagline: 'Value. Innovation. Prestige.',
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

export const contactPage = {
  hero: {
    eyebrow: 'Contact VIP Lift Nigeria',
    title: 'Speak with a lift specialist.',
    summary:
      'Tell us about your building, lift project, repair, or maintenance requirement. We help homes, businesses, and public buildings choose, install, service, and maintain reliable lift systems.',
    helper:
      'Choose an option to open the short enquiry form with the right request type selected.',
  },
  inquiries: [
    {
      value: 'New lift project',
      title: 'New Lift Projects',
      summary:
        'Platform and traction lift guidance for homes, apartments, offices, hotels, and public buildings.',
      number: '01',
    },
    {
      value: 'Repair or breakdown support',
      title: 'Repairs & Breakdown Support',
      summary:
        'Tell us about an existing lift fault, service issue, or repair requirement.',
      number: '02',
    },
    {
      value: 'Maintenance or servicing',
      title: 'Maintenance & Service Contracts',
      summary:
        'Discuss scheduled servicing, inspections, reliability checks, and long-term support.',
      number: '03',
    },
    {
      value: 'Site inspection',
      title: 'Consultation / Site Inspection',
      summary:
        'Get building-specific guidance before selecting or planning a lift system.',
      number: '04',
    },
  ],
  inquiryOptions: [
    'New lift project',
    'Platform lift / home lift',
    'Traction lift / commercial lift',
    'Repair or breakdown support',
    'Maintenance or servicing',
    'Site inspection',
    'General enquiry',
  ],
  buildingTypes: [
    'Private home / duplex',
    'Apartment building',
    'Office',
    'Hotel',
    'Mall / retail',
    'Church / public building',
    'Hospital / accessibility use',
    'Other',
  ],
  nextSteps: [
    {
      step: '01',
      title: 'Share the requirement',
      summary: 'Tell us about the building, project, lift issue, and location.',
    },
    {
      step: '02',
      title: 'We review the details',
      summary: 'Our team considers the building type, use case, and urgency.',
    },
    {
      step: '03',
      title: 'A specialist follows up',
      summary: 'We respond with the appropriate quote, inspection, or service next step.',
    },
  ],
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/services/home-lifts' },
  { label: 'Maintenance', href: '/services/maintenance' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  eyebrow: 'Lift solutions, supported locally',
  title: 'Premium lift solutions for Nigerian homes and buildings.',
  summary:
    'VIP Lift Nigeria supplies, installs, repairs, services, and maintains selected international lift systems for residential, commercial, and public spaces.',
  promo: 'Platform lifts · Traction lifts · Maintenance',
  primaryCta: {
    label: 'Request a Quote',
    href: `mailto:${contact.email}?subject=VIP%20Lift%20Project%20Enquiry`,
  },
  secondaryCta: {
    label: 'Book an Inspection',
    href: contact.phoneHref,
  },
  image: images.heroHome,
}

export const pageHeroes = {
  about: {
    eyebrow: 'Who we are',
    title: 'A Nigerian lift-solutions partner with local support at its core.',
    summary:
      'We help homeowners, architects, developers, and property teams select, install, and care for lift systems suited to each building.',
    image: images.platformLift,
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
      'Tell us about the building, the people it needs to serve, and whether you are planning a new lift or need support for an existing system.',
    image: images.platformLift,
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
    title: 'Consultation',
    summary: 'Tell us about the building, users, space, and project goals.',
  },
  {
    step: '02',
    title: 'Site assessment',
    summary: 'We review the available space, access, and practical building conditions.',
  },
  {
    step: '03',
    title: 'Lift selection',
    summary: 'We recommend an appropriate platform or traction lift direction.',
  },
  {
    step: '04',
    title: 'Supply & installation',
    summary: 'Delivery, preparation, and installation are coordinated with the project team.',
  },
  {
    step: '05',
    title: 'Service & maintenance',
    summary: 'Handover is followed by a clear path for servicing and long-term support.',
  },
]

export const faqItems = [
  {
    question: 'Can a platform lift fit in an existing home without major construction?',
    answer:
      'In many cases, yes. Platform lifts can suit retrofit installations with compact footprints and flexible layouts. A site survey confirms what is possible for your building.',
  },
  {
    question: 'How long does installation typically take?',
    answer:
      'Timelines depend on building type, lift model, and site readiness. After a site survey, we provide a project schedule covering supply, installation, and commissioning.',
  },
  {
    question: 'Do you provide maintenance after installation?',
    answer:
      'Yes. VIP Lift provides routine servicing, repairs, inspections, and maintenance support for systems within its supported range.',
  },
  {
    question: 'Which lift type is right for my building?',
    answer:
      'Platform lifts often suit homes, duplexes, accessibility retrofits, and low-rise spaces. Traction lifts are generally better suited to apartments, hotels, offices, and higher-use buildings. We confirm the appropriate direction after reviewing the site and usage needs.',
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
  { label: 'Building-specific guidance', detail: 'Selection based on space, use, and project needs' },
  { label: 'Local coordination', detail: 'A Nigerian contact point from enquiry to support' },
  { label: 'Installation support', detail: 'Clear planning, preparation, and handover' },
  { label: 'Long-term care', detail: 'Servicing and maintenance after installation' },
]

export const testimonials = [
  {
    id: 'property-manager',
    quote:
      'VIP Lift helped us think beyond installation and plan for long-term servicing, maintenance, and tenant reliability.',
    author: 'Property Management Client',
    role: 'Residential building support',
    type: 'Maintenance',
    initials: 'PM',
    // TODO: Replace this placeholder with a real approved testimonial, name, and role.
  },
  {
    id: 'homeowner',
    quote:
      'The team made the lift selection process clearer, especially around space, comfort, and ongoing support after installation.',
    author: 'Private Home Client',
    role: 'Home lift / platform lift enquiry',
    type: 'Residential',
    initials: 'HC',
    // TODO: Replace this placeholder with a real approved testimonial, name, and role.
  },
  {
    id: 'developer',
    quote:
      'For our project, the biggest value was having a local partner who understood both lift supply and service requirements.',
    author: 'Development Client',
    role: 'Commercial lift planning',
    type: 'Commercial',
    initials: 'DC',
    // TODO: Replace this placeholder with a real approved testimonial, name, and role.
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
    title: 'Platform Lifts',
    summary:
      'Compact, design-conscious lift solutions for homes, duplexes, accessibility needs, and low-rise spaces.',
    description:
      'VIP Lift supplies and installs platform lifts for homes and low-rise buildings where space, accessibility, and visual integration matter. A site assessment determines the right footprint and installation approach.',
    image: images.platformLift,
    highlights: [
      'Homes, duplexes, and low-rise buildings',
      'Accessibility and retrofit applications',
      'Compact, space-conscious layouts',
      'Finish and configuration guidance',
    ],
    primaryCta: {
      label: 'Request Home Lift Consultation',
      subject: 'VIP%20Lift%20Home%20Lift%20Consultation',
    },
  },
  {
    slug: 'public-lifts',
    title: 'Traction Lifts',
    summary:
      'Engineered lift systems for apartments, offices, hotels, malls, churches, and higher-use buildings.',
    description:
      'VIP Lift coordinates traction lift solutions for multi-storey and higher-use buildings, helping project teams align capacity, building conditions, usage, and installation requirements.',
    image: images.commercialLift,
    highlights: [
      'Apartments, offices, and hotels',
      'Malls, churches, and public buildings',
      'Capacity and traffic-flow guidance',
      'Project coordination and installation support',
    ],
    primaryCta: {
      label: 'Get a Project Quote',
      subject: 'VIP%20Lift%20Public%20Lift%20Quote',
    },
  },
  {
    slug: 'maintenance',
    title: 'Repairs & Maintenance',
    summary:
      'Local support for lift inspections, routine servicing, repairs, and long-term reliability.',
    description:
      'Keep your lift dependable with scheduled maintenance and responsive support. VIP Lift assesses existing systems, coordinates repairs, and provides servicing for lifts within its supported range.',
    image: images.cabinMachineRoom,
    highlights: [
      'After-sales support from Lagos',
      'Scheduled maintenance programmes',
      'Inspection and fault assessment',
      'Repair and breakdown coordination',
      'A consistent local contact point',
    ],
    primaryCta: {
      label: 'Book a Service Call',
      subject: 'VIP%20Lift%20Maintenance%20Enquiry',
    },
  },
  {
    slug: 'supply-installation',
    title: 'Supply & Installation',
    summary:
      'Guidance from early product selection and site assessment through installation, handover, and support.',
    description:
      'VIP Lift coordinates the practical path from lift selection to installation. We work with clients and project teams to clarify requirements, prepare the site, manage delivery, and support handover.',
    image: images.cabinMachineRoom,
    highlights: [
      'Project consultation and lift selection',
      'Site assessment and preparation guidance',
      'Supply and installation coordination',
      'Handover and after-sales support',
    ],
    primaryCta: {
      label: 'Discuss Your Project',
      subject: 'VIP%20Lift%20Supply%20and%20Installation%20Enquiry',
    },
  },
]

export const proofPoints = [
  'Platform and traction lift guidance based on the building and its use',
  'Support for residential, commercial, institutional, and public spaces',
  'Site assessment, product selection, supply, and installation coordination',
  'Repair, servicing, and maintenance support from a Nigerian team',
  'Clear project communication from first enquiry through handover',
]

export const solutionGuide = [
  { need: 'Duplex or private home', direction: 'Platform lift' },
  { need: 'Accessibility retrofit', direction: 'Platform lift' },
  { need: 'Apartment building', direction: 'Traction lift' },
  { need: 'Hotel, office, or church', direction: 'Traction lift' },
  { need: 'Existing lift issue', direction: 'Repairs & maintenance' },
  { need: 'New lift project', direction: 'Supply & installation' },
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
      'Selection guidance based on building and usage needs',
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
