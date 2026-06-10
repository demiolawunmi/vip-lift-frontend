import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  chakra,
} from '@chakra-ui/react'
import {
  Link as ReactRouterLink,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import {
  audiences,
  brand,
  certifications,
  contact,
  customizeLiftSteps,
  faqItems,
  featureFlags,
  getAudienceBySlug,
  getProjectBySlug,
  getServiceBySlug,
  hero,
  inquiryBar,
  mailtoHref,
  navItems,
  pageHeroes,
  processSteps,
  projects,
  proofPoints,
  serviceAreas,
  services,
  testimonials,
} from './data/siteContent.js'

const RouterLink = chakra(ReactRouterLink)
const RouterNavLink = chakra(NavLink)

const pageMeta = {
  '/': ['VIP Lift Nigeria | Modern Lift Solutions', 'Premium lift solutions for homes, public buildings, and commercial spaces in Nigeria.'],
  '/about': ['About VIP Lift Nigeria', 'Learn how VIP Lift supports architects, contractors, and building owners with lift engineering services.'],
  '/projects': ['VIP Lift Projects', 'Explore selected VIP Lift Nigeria installations and lift project examples.'],
  '/contact': ['Contact VIP Lift Nigeria', 'Contact VIP Lift Nigeria in Lagos for lift supply, installation, and maintenance enquiries.'],
  '/customize-lift': ['Customize Lift | VIP Lift Nigeria', 'Configure your lift requirements and send a tailored enquiry to VIP Lift Nigeria.'],
  '/service-area': ['Service Area | VIP Lift Nigeria', 'VIP Lift serves Lagos and coordinates lift projects across Nigeria.'],
  '/for-architects': ['For Architects | VIP Lift Nigeria', 'Technical specifications, drawings, and design support for architects specifying lift solutions.'],
  '/for-contractors': ['For Contractors | VIP Lift Nigeria', 'Project coordination and installation support for contractors working with VIP Lift.'],
  '/services/home-lifts': ['Home Lifts | VIP Lift Nigeria', 'Platform lifts for private homes — compact, quiet, and suitable for retrofits in Nigeria.'],
  '/services/public-lifts': ['Public Lifts | VIP Lift Nigeria', 'Commercial and public building lift solutions for offices, clubs, hospitals, and more.'],
  '/services/maintenance': ['Lift Maintenance | VIP Lift Nigeria', 'After-sales maintenance for Cibes platform lifts and Italian MRL installations.'],
}

const sectionStyles = {
  px: { base: 5, md: 10, lg: 18 },
  py: { base: 16, md: 20, lg: 30 },
}

const headingStyles = {
  fontFamily: 'heading',
  fontWeight: '500',
  lineHeight: '1.2',
  letterSpacing: 'normal',
}

const actionStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  minH: '40px',
  minW: { base: '100%', sm: '200px' },
  px: 4,
  border: '3px solid transparent',
  borderRadius: 'control',
  fontSize: 'sm',
  fontWeight: '500',
  lineHeight: '1',
  textAlign: 'center',
  transition: 'background-color 0.33s, border-color 0.33s, color 0.33s',
}

function getPageMeta(pathname) {
  if (pathname.startsWith('/projects/')) {
    const project = getProjectBySlug(pathname.replace('/projects/', ''))
    if (project) return [`${project.title} | VIP Lift Nigeria`, project.summary]
  }
  return pageMeta[pathname] ?? pageMeta['/']
}

function MetaTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const [title, description] = getPageMeta(pathname)
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [pathname])

  return null
}

function SchemaMarkup() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.getElementById('page-schema')?.remove()

    const schemas = [{
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'VIP Lift Nigeria',
      description: 'Premium lift supply, installation, and maintenance for homes and businesses in Nigeria.',
      url: window.location.origin,
      telephone: contact.phone,
      email: contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 1910, 19th Floor, 8/10 Broad Street, Western House',
        addressLocality: 'Lagos Island',
        addressRegion: 'Lagos',
        addressCountry: 'NG',
      },
      openingHours: 'Mo-Fr 08:00-17:00',
      areaServed: serviceAreas.map((area) => ({ '@type': 'Place', name: area })),
    }]

    if (pathname === '/' || pathname === '/contact') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      })
    }

    const script = document.createElement('script')
    script.id = 'page-schema'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
    document.head.appendChild(script)
    return () => script.remove()
  }, [pathname])

  return null
}

function Eyebrow({ children, color = 'vip.pewter', ...props }) {
  return (
    <Text color={color} fontSize="sm" fontWeight="500" {...props}>
      {children}
    </Text>
  )
}

function TextLink({ to, href, children, ...props }) {
  const styles = {
    color: 'vip.pewter',
    fontSize: 'sm',
    transition: 'color 0.33s',
    _hover: { color: 'vip.ink', textDecoration: 'underline' },
    ...props,
  }

  return to
    ? <RouterLink to={to} {...styles}>{children}</RouterLink>
    : <chakra.a href={href} {...styles}>{children}</chakra.a>
}

function Action({ to, href, children, variant = 'primary', type, disabled, onClick, ...props }) {
  const variantStyles = variant === 'primary'
    ? { bg: 'brand.500', color: 'white', _hover: { bg: 'brand.600' } }
    : { bg: 'white', color: 'vip.graphite', _hover: { bg: 'vip.ash' } }

  if (type || onClick) {
    return (
      <Button
        type={type ?? 'button'}
        disabled={disabled}
        onClick={onClick}
        {...actionStyles}
        {...variantStyles}
        {...props}
      >
        {children}
      </Button>
    )
  }

  const styles = { display: 'inline-flex', ...actionStyles, ...variantStyles, ...props }
  return to
    ? <RouterLink to={to} {...styles}>{children}</RouterLink>
    : <chakra.a href={href} {...styles}>{children}</chakra.a>
}

function ButtonRow({ children, justify = 'center' }) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      flexWrap="wrap"
      justify={justify}
      gap={3}
      mt={2}
    >
      {children}
    </Flex>
  )
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <Stack gap={3} maxW="720px" mb={8}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>
        {title}
      </Heading>
      {children}
    </Stack>
  )
}

function SplitSection({ children, bg = 'white', ...props }) {
  return (
    <Grid
      as="section"
      templateColumns={{ base: '1fr', md: 'minmax(0, .95fr) minmax(0, 1.05fr)' }}
      gap={{ base: 8, lg: 18 }}
      alignItems="start"
      bg={bg}
      {...sectionStyles}
      {...props}
    >
      {children}
    </Grid>
  )
}

function Header({ overHero = false }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const transparent = overHero && !solid
  const foreground = transparent ? 'white' : 'vip.ink'

  return (
    <Grid
      as="header"
      position="fixed"
      top="0"
      left="0"
      zIndex="20"
      w="full"
      minH="56px"
      px={{ base: 4, lg: 12 }}
      py={2}
      templateColumns={{ base: '1fr auto auto', md: 'minmax(140px, 1fr) auto minmax(140px, 1fr)' }}
      gap={2}
      alignItems="center"
      color={foreground}
      bg={transparent ? 'transparent' : 'rgba(255,255,255,.78)'}
      backdropFilter={transparent ? 'none' : 'blur(12px)'}
      transition="background-color 0.33s, color 0.33s, backdrop-filter 0.33s"
    >
      <RouterLink
        to="/"
        aria-label="VIP Lift home"
        display="inline-flex"
        alignItems="center"
        gap={2.5}
        w="fit-content"
      >
        <Image src={transparent ? brand.logoLight : brand.logo} alt="VIP Lift" h="56px" w="auto" objectFit="contain" />
        <Text
          display={{ base: 'none', sm: 'block' }}
          color={transparent ? 'white' : 'vip.pewter'}
          fontSize="xs"
        >
          {brand.tagline}
        </Text>
      </RouterLink>

      <Button
        display={{ base: 'inline-flex', md: 'none' }}
        minH="32px"
        px={4}
        bg="transparent"
        color={foreground}
        fontSize="sm"
        fontWeight="500"
        borderRadius="control"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
        _hover={{ bg: transparent ? 'rgba(255,255,255,.12)' : 'rgba(23,26,32,.06)' }}
      >
        Menu
      </Button>

      <Flex
        as="nav"
        id="primary-navigation"
        aria-label="Primary"
        position={{ base: 'absolute', md: 'static' }}
        top={{ base: '100%', md: 'auto' }}
        left={{ base: 4, md: 'auto' }}
        right={{ base: 4, md: 'auto' }}
        display={{ base: open ? 'flex' : 'none', md: 'flex' }}
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        gap={1}
        p={{ base: 2, md: 0 }}
        bg={{ base: 'white', md: 'transparent' }}
        border={{ base: '1px solid', md: '0' }}
        borderColor="vip.cloud"
        borderRadius="control"
      >
        {navItems.map((item) => (
          <RouterNavLink
            key={item.href}
            to={item.href}
            end={item.href === '/'}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            minH="32px"
            px={4}
            borderRadius="control"
            color={{ base: 'vip.ink', md: foreground }}
            fontSize="sm"
            fontWeight="500"
            transition="background-color 0.33s, color 0.33s"
            css={{
              '&:hover, &[aria-current=page]': {
                background: transparent
                  ? 'rgba(255,255,255,.12)'
                  : 'rgba(23,26,32,.06)',
              },
              '@media (max-width: 767px)': {
                '&:hover, &[aria-current=page]': {
                  background: 'rgba(23,26,32,.06)',
                },
              },
            }}
          >
            {item.label}
          </RouterNavLink>
        ))}
      </Flex>

      <Flex justifySelf="end" alignItems="center" gap={3}>
        <chakra.a
          display={{ base: 'none', lg: 'block' }}
          href={contact.phoneHref}
          color={foreground}
          fontSize="sm"
          fontWeight="500"
          whiteSpace="nowrap"
          _hover={{ opacity: 0.75, textDecoration: 'underline' }}
        >
          {contact.phone}
        </chakra.a>
        <Action
          href={mailtoHref('VIP%20Lift%20Project%20Enquiry')}
          minW={{ base: 'auto', sm: '160px' }}
          display={{ base: 'none', sm: 'inline-flex' }}
          px={4}
        >
          Get a Quote
        </Action>
      </Flex>
    </Grid>
  )
}

function Footer() {
  return (
    <Grid
      as="footer"
      templateColumns={{ base: '1fr', md: '1.1fr 1fr' }}
      gap={8}
      px={{ base: 5, md: 10, lg: 18 }}
      pt={12}
      pb={{ base: 44, md: 32 }}
      bg="vip.ink"
      color="white"
    >
      <Box>
        <Eyebrow color="vip.silver">Lagos office</Eyebrow>
        <Heading as="h2" mt={3} maxW="560px" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>
          Move forward with a lift solution built around your space.
        </Heading>
        <Text mt={3} color="vip.silver">{contact.responseTime}</Text>
      </Box>
      <Stack as="address" gap={2.5} fontStyle="normal" color="vip.silver">
        <TextLink href={contact.phoneHref} color="vip.silver" _hover={{ color: 'white', textDecoration: 'underline' }}>{contact.phone}</TextLink>
        {featureFlags.whatsapp && <TextLink href={contact.whatsappHref} color="vip.silver">WhatsApp</TextLink>}
        <TextLink href={`mailto:${contact.email}`} color="vip.silver">{contact.email}</TextLink>
        <TextLink to="/service-area" color="vip.silver">Service areas</TextLink>
        <Text>{contact.address}</Text>
        <Text>{contact.hours}</Text>
      </Stack>
    </Grid>
  )
}

function InquiryBar() {
  return (
    <Grid
      as="aside"
      aria-label="Quick enquiry"
      position="fixed"
      zIndex="15"
      left={4}
      right={4}
      bottom={4}
      maxW="920px"
      mx="auto"
      p={3}
      templateColumns={{ base: '1fr', md: '1fr auto' }}
      gap={3}
      alignItems="center"
      bg="white"
      border="1px solid"
      borderColor="vip.cloud"
      borderRadius="control"
    >
      <Flex alignItems="center" justify={{ base: 'center', md: 'flex-start' }} gap={2.5} minW="0">
        <Box as="svg" flexShrink="0" w="20px" h="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="vip.pewter">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </Box>
        <Text color="vip.fog" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
          {inquiryBar.prompt}
        </Text>
      </Flex>
      <Flex justify="center" flexWrap="wrap" gap={2}>
        <Action href={contact.phoneHref} minW="auto" px={4}>Call Now</Action>
        {featureFlags.whatsapp && <TextLink href={contact.whatsappHref}>WhatsApp</TextLink>}
        <TextLink href={mailtoHref(inquiryBar.cta.subject)} display={{ base: 'none', sm: 'inline-flex' }} alignItems="center" px={3}>Email</TextLink>
        {featureFlags.calendly && <TextLink href={contact.calendlyHref}>{contact.calendlyLabel}</TextLink>}
      </Flex>
    </Grid>
  )
}

function PageShell({ children, overHero = false }) {
  return (
    <>
      <MetaTitle />
      <SchemaMarkup />
      <Header overHero={overHero} />
      <Box as="main" overflow="hidden">{children}</Box>
      <Footer />
      <InquiryBar />
    </>
  )
}

function CtaBand({ eyebrow, title, description, primary, secondary }) {
  return (
    <Stack as="section" gap={4} maxW="864px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 16, md: 24 }} textAlign="center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>{title}</Heading>
      {description && <Text color="vip.graphite">{description}</Text>}
      <ButtonRow>{primary}{secondary}</ButtonRow>
    </Stack>
  )
}

function ProcessStrip() {
  return (
    <Box as="section" bg="vip.ash" {...sectionStyles}>
      <SectionHeading eyebrow="How it works" title="From first enquiry to installation and support." />
      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
        {processSteps.map((step) => (
          <Stack as="article" key={step.step} gap={3} p={6} bg="white">
            <Text color="brand.500" fontWeight="500">{step.step}</Text>
            <Heading as="h3" fontSize="lg" {...headingStyles}>{step.title}</Heading>
            <Text color="vip.graphite">{step.summary}</Text>
          </Stack>
        ))}
      </Grid>
    </Box>
  )
}

function CertificationBadges() {
  return (
    <Grid as="section" aria-label="Certifications and standards" templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={3} mt={8}>
      {certifications.map((item) => (
        <Stack key={item.label} gap={1} p={4} bg="white">
          <Text fontWeight="500">{item.label}</Text>
          <Text color="vip.pewter" fontSize="xs">{item.detail}</Text>
        </Stack>
      ))}
    </Grid>
  )
}

function FaqSection({ limit, nested = false }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems

  return (
    <Box as="section" {...(nested ? {} : sectionStyles)}>
      <SectionHeading eyebrow="Common questions" title="Answers before you call." />
      <Stack gap={2} maxW="840px">
        {items.map((item) => (
          <Box as="details" key={item.question} p={4} px={5} bg="white" border="1px solid" borderColor="vip.cloud">
            <Text as="summary" cursor="pointer" fontWeight="500">{item.question}</Text>
            <Text mt={3} color="vip.graphite">{item.answer}</Text>
          </Box>
        ))}
      </Stack>
      {limit && <Box mt={4}><TextLink to="/contact#faq">View all questions</TextLink></Box>}
    </Box>
  )
}

function TestimonialSection() {
  return (
    <Box as="section" bg="vip.ash" {...sectionStyles}>
      <SectionHeading eyebrow="Client feedback" title="Trusted on residential, commercial, and public projects." />
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
        {testimonials.map((item) => (
          <Stack as="blockquote" key={item.context} gap={4} m={0} p={6} bg="white">
            <Text color="vip.graphite" fontStyle="italic">&ldquo;{item.quote}&rdquo;</Text>
            <Stack as="footer" gap={1}>
              <Text fontWeight="500">{item.source}</Text>
              <Text color="vip.pewter" fontSize="xs">{item.context}</Text>
            </Stack>
          </Stack>
        ))}
      </Grid>
      {featureFlags.googleReviews && <Box mt={6} textAlign="center"><TextLink href={contact.googleBusinessHref}>Read reviews on Google</TextLink></Box>}
      <CtaBand
        title="Ready to discuss your project?"
        primary={<Action href={contact.phoneHref}>Call for a Site Visit</Action>}
        secondary={<Action href={mailtoHref('VIP%20Lift%20Project%20Enquiry')} variant="secondary">Email VIP Lift</Action>}
      />
    </Box>
  )
}

const fieldStyles = {
  w: 'full',
  minH: '40px',
  px: 3,
  border: '1px solid',
  borderColor: 'vip.silver',
  borderRadius: 'control',
  bg: 'white',
  color: 'vip.ink',
  _focus: { borderColor: 'brand.500' },
}

function FormField({ label, children }) {
  return <Stack as="label" gap={2}><Text color="vip.pewter">{label}</Text>{children}</Stack>
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.service ? `Service: ${form.service}` : null,
      '',
      form.message,
    ].filter(Boolean).join('\n')
    window.location.href = mailtoHref('VIP%20Lift%20Website%20Enquiry', body)
  }

  return (
    <Stack as="form" gap={4} maxW="720px" onSubmit={handleSubmit}>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <FormField label="Name"><Input name="name" required value={form.name} onChange={handleChange} autoComplete="name" {...fieldStyles} /></FormField>
        <FormField label="Phone"><Input name="phone" required type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" {...fieldStyles} /></FormField>
        <FormField label="Email (optional)"><Input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" {...fieldStyles} /></FormField>
        <FormField label="Service needed">
          <chakra.select name="service" value={form.service} onChange={handleChange} {...fieldStyles}>
            <option value="">Select a service</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            <option value="Other">Other</option>
          </chakra.select>
        </FormField>
      </Grid>
      <FormField label="Brief description">
        <Textarea name="message" rows={4} required value={form.message} onChange={handleChange} minH="120px" resize="vertical" {...fieldStyles} />
      </FormField>
      <Text color="vip.pewter" fontSize="xs">{contact.responseTime}</Text>
      <Action type="submit" alignSelf="flex-start">Send Enquiry via Email</Action>
    </Stack>
  )
}

function HeroSection() {
  return (
    <Flex
      as="section"
      position="relative"
      minH="100svh"
      alignItems="flex-end"
      justifyContent="center"
      px={6}
      pt="104px"
      pb={{ base: '180px', md: '140px' }}
      bgImage={`url(${hero.image})`}
      bgPosition="center"
      bgSize="cover"
      textAlign="center"
    >
      <Box position="absolute" inset="0" bg="rgba(23,26,32,.35)" />
      <Stack position="relative" zIndex="1" gap={4} maxW="720px" color="white">
        <Eyebrow color="rgba(255,255,255,.85)">{hero.eyebrow}</Eyebrow>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} {...headingStyles}>{hero.title}</Heading>
        {hero.promo && <Text color="brand.500" fontSize="xl">{hero.promo}</Text>}
        <Text color="rgba(255,255,255,.92)">{hero.summary}</Text>
        <Text color="rgba(255,255,255,.85)" fontSize="xs">
          {featureFlags.googleReviews && <><chakra.a href={contact.googleBusinessHref}>Read our Google reviews</chakra.a>{' · '}</>}
          {contact.responseTime}
        </Text>
        <ButtonRow>
          <Action href={hero.primaryCta.href}>{hero.primaryCta.label}</Action>
          <Action href={hero.secondaryCta.href} variant="secondary">{hero.secondaryCta.label}</Action>
        </ButtonRow>
      </Stack>
    </Flex>
  )
}

function PageHero({ data, eyebrow = data.eyebrow }) {
  return (
    <Stack
      as="section"
      position="relative"
      minH="60svh"
      justifyContent="flex-end"
      gap={4}
      px={{ base: 5, md: 10, lg: 18 }}
      pt="120px"
      pb={{ base: 16, md: 24 }}
      bgImage={`url(${data.image})`}
      bgPosition="center"
      bgSize="cover"
      color="white"
    >
      <Box position="absolute" inset="0" bg="rgba(23,26,32,.4)" />
      <Eyebrow position="relative" zIndex="1" color="rgba(255,255,255,.85)">{eyebrow}</Eyebrow>
      <Heading position="relative" zIndex="1" as="h1" maxW="840px" fontSize={{ base: '3xl', md: '4xl' }} {...headingStyles}>{data.title}</Heading>
      <Text position="relative" zIndex="1" maxW="640px" color="rgba(255,255,255,.92)">{data.summary}</Text>
    </Stack>
  )
}

function CategoryCard({ service }) {
  return (
    <Flex as="article" direction="column" minH="280px" overflow="hidden" bg="white" borderRadius="card">
      <Box position="relative" flex="1" minH="220px" overflow="hidden">
        <Image position="absolute" inset="0" w="full" h="full" objectFit="cover" src={service.image} alt={`${service.title} by VIP Lift`} loading="lazy" />
        <Box position="absolute" inset="0" bg="rgba(23,26,32,.5)" />
        <Text position="absolute" zIndex="1" top={5} left={5} color="white" fontSize="md" fontWeight="500">{service.title}</Text>
      </Box>
      <Flex gap={4} flexShrink="0" px={5} py={4} bg="vip.ash" borderTop="1px solid" borderColor="vip.cloud">
        <TextLink to={`/services/${service.slug}`} color="vip.graphite" fontWeight="500">Learn</TextLink>
        <TextLink href={mailtoHref(service.primaryCta.subject)} color="vip.graphite" fontWeight="500">Enquire</TextLink>
      </Flex>
    </Flex>
  )
}

function ServiceGrid() {
  const [featured, ...rest] = services
  return (
    <Box as="section" {...sectionStyles}>
      <SectionHeading eyebrow="What we do" title="Flexible lift systems for modern Nigerian buildings." />
      <Grid templateColumns={{ base: '1fr', lg: '1.35fr 1fr' }} gap={4}>
        <CategoryCard service={featured} />
        <Grid gap={4}>{rest.map((service) => <CategoryCard key={service.title} service={service} />)}</Grid>
      </Grid>
    </Box>
  )
}

function ProofList({ items }) {
  return (
    <Stack as="ul" gap={3} m={0} p={0} listStyleType="none">
      {items.map((item) => (
        <Box as="li" key={item} pb={3} borderBottom="1px solid" borderColor="vip.cloud" color="vip.graphite">
          {item}
        </Box>
      ))}
    </Stack>
  )
}

function ProofSection() {
  return (
    <Box as="section" bg="vip.ash" {...sectionStyles}>
      <Grid templateColumns={{ base: '1fr', md: 'minmax(0,.95fr) minmax(0,1.05fr)' }} gap={{ base: 8, lg: 18 }}>
        <Box>
          <Eyebrow>Engineered confidence</Eyebrow>
          <Heading as="h2" mt={3} fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>European-standard lift technology, installed and supported from Lagos.</Heading>
        </Box>
        <ProofList items={proofPoints} />
      </Grid>
      <CertificationBadges />
    </Box>
  )
}

function Home() {
  return (
    <PageShell overHero>
      <HeroSection />
      <ServiceGrid />
      <ProcessStrip />
      <ProofSection />
      <TestimonialSection />
      <FaqSection limit={5} />
      <CtaBand
        eyebrow="After-sales support"
        title="Supply, installation, and maintenance in one coordinated lift package."
        description="VIP Lift works with architects, contractors, building owners, and end users from specification through installation and long-term maintenance."
        primary={<Action href={contact.phoneHref}>Call VIP Lift</Action>}
        secondary={<Action to="/contact" variant="secondary">Send an Enquiry</Action>}
      />
    </PageShell>
  )
}

function About() {
  return (
    <PageShell>
      <PageHero data={pageHeroes.about} />
      <Box as="section" {...sectionStyles}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
          {audiences.map((audience) => (
            <Stack as="article" key={audience.title} gap={3} p={6} bg="white">
              <Heading as="h2" fontSize="xl" {...headingStyles}>{audience.title}</Heading>
              <Text color="vip.graphite">{audience.summary}</Text>
              <TextLink to={audience.slug === 'building-owners' ? '/contact' : `/for-${audience.slug}`}>Learn more</TextLink>
            </Stack>
          ))}
        </Grid>
      </Box>
      <ProcessStrip />
      <SplitSection bg="vip.ash">
        <Box><Eyebrow>Design flexibility</Eyebrow><Heading as="h2" mt={3} fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Custom-made lift solutions for new and existing buildings.</Heading></Box>
        <Text color="vip.graphite">VIP Lift can support panoramic lift shafts with glass panels, flexible compact dimensions, robust platform lifts with capacities up to 1000 kilograms, and coordinated installation support.</Text>
      </SplitSection>
      <CtaBand
        eyebrow="Discuss your project"
        title="Talk to VIP Lift about specifications, drawings, and installation support."
        primary={<Action href={mailtoHref('VIP%20Lift%20Architect%20Spec%20Request')}>Request Technical Specs</Action>}
        secondary={<Action href={contact.phoneHref} variant="secondary">Call VIP Lift</Action>}
      />
    </PageShell>
  )
}

function ProjectCard({ project, featured = false }) {
  return (
    <RouterLink to={`/projects/${project.slug}`} display="block" overflow="hidden" bg="white" borderRadius="card" transition="opacity .33s" _hover={{ opacity: 0.92 }}>
      <Image src={project.image} alt={`${project.title} project example`} loading="lazy" w="full" h={{ base: '220px', md: '300px' }} objectFit="cover" />
      <Stack gap={2} p={5}>
        <Text color="vip.pewter">{featured ? `${project.category} · ${project.location}` : project.location}</Text>
        <Heading as={featured ? 'h3' : 'h2'} fontSize="lg" {...headingStyles}>{project.title}</Heading>
        {featured && <Text color="vip.pewter">View case study</Text>}
      </Stack>
    </RouterLink>
  )
}

function Projects() {
  const featured = projects.filter((project) => project.featured)
  return (
    <PageShell>
      <PageHero data={pageHeroes.projects} />
      {featured.length > 0 && (
        <Box as="section" {...sectionStyles}>
          <SectionHeading eyebrow="Featured case studies" title="Recent installations with project detail." />
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
            {featured.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
          </Grid>
        </Box>
      )}
      <ProofSection />
      <Box as="section" {...sectionStyles}>
        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </Grid>
      </Box>
      <CtaBand
        title="Discuss a similar project for your building."
        primary={<Action href={contact.phoneHref}>Call for a Site Visit</Action>}
        secondary={<Action to="/customize-lift" variant="secondary">Customize Your Lift</Action>}
      />
    </PageShell>
  )
}

function NotFound({ type, to, label }) {
  return (
    <PageShell>
      <Stack as="section" pt="140px" {...sectionStyles}>
        <Heading as="h1" {...headingStyles}>{type} not found</Heading>
        <Action to={to} alignSelf="flex-start">{label}</Action>
      </Stack>
    </PageShell>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <NotFound type="Project" to="/projects" label="Back to projects" />

  return (
    <PageShell>
      <PageHero data={{ ...project, title: project.title }} eyebrow={`${project.category} · ${project.location}`} />
      <SplitSection>
        <Stack gap={3}><Eyebrow>Project overview</Eyebrow><Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Problem, solution, and delivery.</Heading><Text color="vip.graphite">{project.story}</Text></Stack>
        <ProofList items={project.specs} />
      </SplitSection>
      <CtaBand
        title="Start a conversation about a similar lift project."
        primary={<Action href={mailtoHref('VIP%20Lift%20Project%20Enquiry', `Hi VIP Lift,\n\nI am interested in a lift project similar to ${project.title}.\n\n`)}>Discuss This Type of Project</Action>}
        secondary={<Action href={contact.phoneHref} variant="secondary">Call VIP Lift</Action>}
      />
    </PageShell>
  )
}

function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  if (!service) return <NotFound type="Service" to="/" label="Back to home" />

  return (
    <PageShell>
      <PageHero data={service} eyebrow="Service" />
      <SplitSection>
        <Stack gap={3}><Eyebrow>Overview</Eyebrow><Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Built for Nigerian homes and buildings.</Heading><Text color="vip.graphite">{service.description}</Text></Stack>
        <ProofList items={service.highlights} />
      </SplitSection>
      <ProcessStrip />
      <FaqSection limit={4} />
      <CtaBand
        title={`Ready to discuss ${service.title.toLowerCase()}?`}
        primary={<Action href={service.primaryCta.href ?? mailtoHref(service.primaryCta.subject)}>{service.primaryCta.label}</Action>}
        secondary={<Action href={contact.phoneHref} variant="secondary">Call VIP Lift</Action>}
      />
    </PageShell>
  )
}

function AudiencePage({ slug: audienceSlug }) {
  const audience = getAudienceBySlug(audienceSlug)
  if (!audience) return <NotFound type="Page" to="/about" label="Back to about" />

  return (
    <PageShell>
      <PageHero data={audience} eyebrow="VIP Lift partners" />
      <SplitSection>
        <Stack gap={3}><Eyebrow>How we support you</Eyebrow><Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>From specification to installation.</Heading><Text color="vip.graphite">{audience.description}</Text></Stack>
        <ProofList items={audience.benefits} />
      </SplitSection>
      {audienceSlug === 'architects' && (
        <Box as="section" bg="vip.ash" {...sectionStyles}>
          <SectionHeading eyebrow="Resources" title="Technical documentation for specifiers." />
          <ButtonRow justify="flex-start">
            <Action href={mailtoHref(contact.specPackMailtoSubject)}>Request Spec Pack</Action>
            <Action href={contact.phoneHref} variant="secondary">Call for Technical Support</Action>
          </ButtonRow>
          <Text mt={4} color="vip.pewter" fontSize="xs">Email us for the latest specifications, drawings, and product documentation.</Text>
        </Box>
      )}
      <CtaBand
        title="Let's coordinate on your next project."
        primary={<Action href={audience.primaryCta.href ?? mailtoHref(audience.primaryCta.subject)}>{audience.primaryCta.label}</Action>}
        secondary={featureFlags.calendly ? <Action href={contact.calendlyHref} variant="secondary">{contact.calendlyLabel}</Action> : undefined}
      />
    </PageShell>
  )
}

function ServiceArea() {
  return (
    <PageShell>
      <PageHero data={pageHeroes.serviceArea} />
      <Box as="section" {...sectionStyles}>
        <SectionHeading eyebrow="Coverage" title="Lagos headquarters with nationwide project coordination." />
        <Grid as="ul" templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={3} m={0} p={0} listStyleType="none">
          {serviceAreas.map((area) => <Box as="li" key={area} p={4} bg="vip.ash" fontWeight="500">{area}</Box>)}
        </Grid>
      </Box>
      <SplitSection bg="vip.ash">
        <Box><Eyebrow>Lagos office</Eyebrow><Heading as="h2" mt={3} fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Visit or call our team on Lagos Island.</Heading></Box>
        <Stack as="address" gap={2.5} fontStyle="normal">
          <TextLink href={contact.phoneHref}>{contact.phone}</TextLink>
          <TextLink href={`mailto:${contact.email}`}>{contact.email}</TextLink>
          <TextLink href={contact.mapHref}>{contact.address}</TextLink>
          <Text>{contact.hours}</Text>
        </Stack>
      </SplitSection>
      <CtaBand
        title="Not sure if we cover your location? Call and we will confirm."
        primary={<Action href={contact.phoneHref}>Call VIP Lift</Action>}
        secondary={<Action href={featureFlags.whatsapp ? contact.whatsappHref : `mailto:${contact.email}`} variant="secondary">{featureFlags.whatsapp ? 'WhatsApp Us' : 'Email VIP Lift'}</Action>}
      />
    </PageShell>
  )
}

function CustomizeLift() {
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' })
  const step = customizeLiftSteps[stepIndex]
  const isContactStep = stepIndex === customizeLiftSteps.length
  const isComplete = stepIndex > customizeLiftSteps.length

  function buildEnquiryBody() {
    return [
      'Customize Lift Enquiry',
      '',
      ...customizeLiftSteps.map((item) => `${item.title}: ${answers[item.id] ?? 'Not answered'}`),
      '',
      `Name: ${contactInfo.name}`,
      `Phone: ${contactInfo.phone}`,
      contactInfo.email ? `Email: ${contactInfo.email}` : null,
    ].filter(Boolean).join('\n')
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.location.href = mailtoHref('VIP%20Lift%20Customize%20Lift%20Enquiry', buildEnquiryBody())
    setStepIndex(customizeLiftSteps.length + 1)
  }

  return (
    <PageShell>
      <PageHero data={pageHeroes.customizeLift} />
      <Box as="section" maxW="864px" mx="auto" {...sectionStyles}>
        {!isComplete ? (
          <>
            <Flex gap={2} mb={8} aria-hidden="true">
              {customizeLiftSteps.map((item, index) => <Box key={item.id} flex="1" h="4px" bg={index <= stepIndex ? 'brand.500' : 'vip.cloud'} />)}
            </Flex>
            {!isContactStep ? (
              <Stack gap={5}>
                <Eyebrow>{step.title}</Eyebrow>
                <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>{step.question}</Heading>
                <Stack gap={3}>
                  {step.options.map((option) => {
                    const selected = answers[step.id] === option
                    return (
                      <Button
                        key={option}
                        minH="48px"
                        justifyContent="flex-start"
                        px={4}
                        bg={selected ? 'rgba(62,106,225,.06)' : 'white'}
                        color="vip.ink"
                        border="1px solid"
                        borderColor={selected ? 'brand.500' : 'vip.silver'}
                        borderRadius="control"
                        fontWeight="500"
                        onClick={() => setAnswers((current) => ({ ...current, [step.id]: option }))}
                        _hover={{ borderColor: 'brand.500', bg: 'rgba(62,106,225,.06)' }}
                      >
                        {option}
                      </Button>
                    )
                  })}
                </Stack>
                <ButtonRow>
                  {stepIndex > 0 && <Action variant="secondary" onClick={() => setStepIndex((value) => value - 1)}>Back</Action>}
                  <Action disabled={!answers[step.id]} onClick={() => setStepIndex((value) => value + 1)}>Continue</Action>
                </ButtonRow>
              </Stack>
            ) : (
              <Stack as="form" gap={5} onSubmit={handleSubmit}>
                <Eyebrow>Your details</Eyebrow>
                <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Where should we send your tailored enquiry?</Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormField label="Name"><Input required value={contactInfo.name} onChange={(event) => setContactInfo((current) => ({ ...current, name: event.target.value }))} {...fieldStyles} /></FormField>
                  <FormField label="Phone"><Input required type="tel" value={contactInfo.phone} onChange={(event) => setContactInfo((current) => ({ ...current, phone: event.target.value }))} {...fieldStyles} /></FormField>
                  <FormField label="Email (optional)"><Input type="email" value={contactInfo.email} onChange={(event) => setContactInfo((current) => ({ ...current, email: event.target.value }))} {...fieldStyles} /></FormField>
                </Grid>
                <Box p={5} bg="vip.ash"><Eyebrow>Your selections</Eyebrow><Box mt={4}><ProofList items={customizeLiftSteps.map((item) => `${item.title}: ${answers[item.id]}`)} /></Box></Box>
                <ButtonRow>
                  <Action variant="secondary" onClick={() => setStepIndex((value) => value - 1)}>Back</Action>
                  <Action type="submit">Send Enquiry via Email</Action>
                </ButtonRow>
              </Stack>
            )}
          </>
        ) : (
          <Stack gap={5}>
            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Your email app should open with your enquiry.</Heading>
            <Text color="vip.graphite">If it did not open, call us directly or use the contact form.</Text>
            <ButtonRow justify="flex-start"><Action href={contact.phoneHref}>Call VIP Lift</Action><Action to="/contact" variant="secondary">Contact page</Action></ButtonRow>
          </Stack>
        )}
      </Box>
    </PageShell>
  )
}

function ContactCard({ href, label, children }) {
  const styles = {
    display: 'grid',
    gap: 2,
    minH: '140px',
    p: 6,
    bg: 'vip.ash',
    color: 'vip.ink',
    transition: 'background-color .33s',
    _hover: href ? { bg: 'vip.cloud' } : undefined,
  }
  const content = <><Text color="vip.pewter">{label}</Text><Text fontSize="lg" fontWeight="500" lineHeight="1.3">{children}</Text></>
  return href ? <chakra.a href={href} {...styles}>{content}</chakra.a> : <Box {...styles}>{content}</Box>
}

function Contact() {
  return (
    <PageShell>
      <PageHero data={pageHeroes.contact} />
      <Grid as="section" templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} {...sectionStyles}>
        <ContactCard href={contact.phoneHref} label="Phone">{contact.phone}</ContactCard>
        {featureFlags.whatsapp && <ContactCard href={contact.whatsappHref} label="WhatsApp">Message VIP Lift</ContactCard>}
        <ContactCard href={`mailto:${contact.email}`} label="Email">{contact.email}</ContactCard>
        {featureFlags.calendly && <ContactCard href={contact.calendlyHref} label="Consultation">{contact.calendlyLabel}</ContactCard>}
        <ContactCard href={contact.mapHref} label="Address">{contact.address}</ContactCard>
        <ContactCard label="Working hours">{contact.hours}</ContactCard>
      </Grid>
      <Box as="section" bg="vip.ash" {...sectionStyles}>
        <SectionHeading eyebrow="Send an enquiry" title="Tell us about your project." />
        <ContactForm />
      </Box>
      <Box id="faq" {...sectionStyles}><FaqSection nested /></Box>
      <CtaBand
        eyebrow="Request information"
        title="Looking for a lift solution for your home or business?"
        primary={<Action href={`mailto:${contact.email}?subject=VIP%20Lift%20Information%20Pack`}>Request Your Free Information Pack</Action>}
        secondary={<Action href={contact.phoneHref} variant="secondary">Call for a Site Visit</Action>}
      />
    </PageShell>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/for-architects" element={<AudiencePage slug="architects" />} />
      <Route path="/for-contractors" element={<AudiencePage slug="contractors" />} />
      <Route path="/service-area" element={<ServiceArea />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/customize-lift" element={<CustomizeLift />} />
    </Routes>
  )
}

export default App
