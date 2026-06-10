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
  useRecipe,
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
  images,
  inquiryBar,
  mailtoHref,
  navItems,
  pageHeroes,
  processSteps,
  projects,
  proofPoints,
  serviceAreas,
  services,
  solutionGuide,
} from './data/siteContent.js'

const RouterLink = chakra(ReactRouterLink)
const RouterNavLink = chakra(NavLink)

const pageMeta = {
  '/': ['VIP Lift Nigeria | Premium Lift Solutions', 'VIP Lift Nigeria supplies, installs, repairs, services, and maintains platform and traction lift systems.'],
  '/about': ['About VIP Lift Nigeria', 'Learn how VIP Lift supports architects, contractors, and building owners with lift engineering services.'],
  '/projects': ['VIP Lift Projects', 'Explore selected VIP Lift Nigeria installations and lift project examples.'],
  '/contact': ['Contact VIP Lift Nigeria', 'Contact VIP Lift Nigeria in Lagos for lift supply, installation, and maintenance enquiries.'],
  '/customize-lift': ['Customize Lift | VIP Lift Nigeria', 'Configure your lift requirements and send a tailored enquiry to VIP Lift Nigeria.'],
  '/service-area': ['Service Area | VIP Lift Nigeria', 'VIP Lift serves Lagos and coordinates lift projects across Nigeria.'],
  '/for-architects': ['For Architects | VIP Lift Nigeria', 'Technical specifications, drawings, and design support for architects specifying lift solutions.'],
  '/for-contractors': ['For Contractors | VIP Lift Nigeria', 'Project coordination and installation support for contractors working with VIP Lift.'],
  '/services/home-lifts': ['Platform Lifts | VIP Lift Nigeria', 'Compact platform lift solutions for homes, duplexes, accessibility needs, and low-rise buildings.'],
  '/services/public-lifts': ['Traction Lifts | VIP Lift Nigeria', 'Traction lift solutions for apartments, offices, hotels, churches, and higher-use buildings.'],
  '/services/maintenance': ['Lift Repairs and Maintenance | VIP Lift Nigeria', 'Routine servicing, lift repairs, inspections, and maintenance support from VIP Lift Nigeria.'],
  '/services/supply-installation': ['Lift Supply and Installation | VIP Lift Nigeria', 'Lift consultation, selection, supply, installation coordination, and handover support.'],
}

const sectionStyles = {
  px: { base: 5, md: 10, lg: 16 },
  py: { base: 16, md: 24, lg: 28 },
}

const headingStyles = {
  fontFamily: 'heading',
  fontWeight: '600',
  lineHeight: '1.05',
  letterSpacing: '-0.015em',
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
      description: 'Lift supply, installation, repairs, servicing, and maintenance for homes and buildings in Nigeria.',
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

function Eyebrow({ children, color = 'text.subtle', ...props }) {
  return (
    <Text color={color} textStyle="label" {...props}>
      {children}
    </Text>
  )
}

function TextLink({ to, href, children, ...props }) {
  const styles = {
    color: 'text.subtle',
    fontSize: 'sm',
    transition: 'color 0.33s',
    _hover: { color: 'text.primary', textDecoration: 'underline' },
    ...props,
  }

  return to
    ? <RouterLink to={to} {...styles}>{children}</RouterLink>
    : <chakra.a href={href} {...styles}>{children}</chakra.a>
}

function Action({ to, href, children, variant = 'primary', type, disabled, onClick, ...props }) {
  const recipe = useRecipe({ key: 'action' })
  const styles = recipe({ variant })

  if (type || onClick) {
    return (
      <Button
        type={type ?? 'button'}
        disabled={disabled}
        onClick={onClick}
        css={styles}
        {...props}
      >
        {children}
      </Button>
    )
  }

  return to
    ? <RouterLink to={to} css={styles} {...props}>{children}</RouterLink>
    : <chakra.a href={href} css={styles} {...props}>{children}</chakra.a>
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
    <Stack gap={4} maxW="720px" mb={{ base: 8, md: 12 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading as="h2" textStyle="sectionTitle">
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
  const foreground = transparent ? 'text.inverse' : 'text.primary'

  return (
    <Grid
      as="header"
      position="fixed"
      top="0"
      left="0"
      zIndex="20"
      w="full"
      minH="88px"
      px={{ base: 5, md: 8, xl: 12 }}
      py={3}
      templateColumns={{ base: '1fr auto', lg: 'minmax(250px, 1fr) auto minmax(250px, 1fr)' }}
      gap={4}
      alignItems="center"
      color={foreground}
      bg={transparent ? 'transparent' : 'rgba(246,246,242,.94)'}
      borderBottom="1px solid"
      borderColor={transparent ? 'transparent' : 'border.subtle'}
      backdropFilter={transparent ? 'none' : 'blur(18px)'}
      transition="background-color 180ms, color 180ms, backdrop-filter 180ms"
    >
      <RouterLink to="/" aria-label="VIP Lift Nigeria home" display="inline-flex" w="fit-content">
        <Image
          src={transparent ? brand.logoLight : brand.logo}
          alt="VIP Lift Nigeria"
          h={{ base: '38px', md: '44px' }}
          w="auto"
          objectFit="contain"
        />
      </RouterLink>

      <Button
        display={{ base: 'inline-flex', lg: 'none' }}
        minH="44px"
        px={3}
        bg="transparent"
        color={foreground}
        fontFamily="label"
        fontSize="xs"
        fontWeight="600"
        letterSpacing="0.06em"
        textTransform="uppercase"
        borderRadius="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
        _hover={{ bg: transparent ? 'surface.overlay' : 'bg.muted' }}
      >
        {open ? 'Close' : 'Menu'}
      </Button>

      <Flex
        as="nav"
        id="primary-navigation"
        aria-label="Primary"
        position={{ base: 'absolute', lg: 'static' }}
        top={{ base: '100%', lg: 'auto' }}
        left={{ base: 5, lg: 'auto' }}
        right={{ base: 5, lg: 'auto' }}
        display={{ base: open ? 'flex' : 'none', lg: 'flex' }}
        direction={{ base: 'column', lg: 'row' }}
        justify="center"
        gap={{ base: 1, lg: 2 }}
        p={{ base: 3, lg: 0 }}
        bg={{ base: 'bg.surface', lg: 'transparent' }}
        border={{ base: '1px solid', lg: '0' }}
        borderColor="border.subtle"
        borderRadius="card"
        boxShadow={{ base: '0 18px 50px rgba(2,8,20,.16)', lg: 'none' }}
      >
        {navItems.map((item) => (
          <RouterNavLink
            key={item.href}
            to={item.href}
            end={item.href === '/'}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            minH="42px"
            px={3}
            borderRadius="button"
            color={{ base: 'text.primary', lg: foreground }}
            fontFamily="label"
            fontSize="2xs"
            fontWeight="600"
            letterSpacing="0.05em"
            textTransform="uppercase"
            transition="background-color 180ms, color 180ms"
            css={{
              '&:hover, &[aria-current=page]': {
                background: transparent ? 'rgba(255,255,255,.12)' : 'rgba(6,19,38,.08)',
              },
              '@media (max-width: 1023px)': {
                '&:hover, &[aria-current=page]': { background: 'rgba(6,19,38,.08)' },
              },
            }}
          >
            {item.label}
          </RouterNavLink>
        ))}
      </Flex>

      <Flex display={{ base: 'none', lg: 'flex' }} justifySelf="end" alignItems="center" gap={3}>
        <chakra.a
          display={{ base: 'none', xl: 'block' }}
          href={contact.phoneHref}
          color={foreground}
          fontSize="xs"
          fontWeight="600"
          whiteSpace="nowrap"
          _hover={{ opacity: 0.75, textDecoration: 'underline' }}
        >
          {contact.phone}
        </chakra.a>
        <Action href={mailtoHref('VIP%20Lift%20Project%20Enquiry')} minW="156px" minH="44px">
          Request a Quote
        </Action>
      </Flex>
    </Grid>
  )
}

function Footer() {
  return (
    <Grid
      as="footer"
      templateColumns={{ base: '1fr', md: '1.2fr .8fr' }}
      gap={{ base: 10, md: 16 }}
      px={{ base: 5, md: 10, lg: 16 }}
      pt={{ base: 16, md: 20 }}
      pb={{ base: 36, md: 28 }}
      bg="bg.deep"
      color="text.inverse"
      backgroundImage={`linear-gradient(rgba(2,8,20,.9), rgba(2,8,20,.96)), url(${images.architecturalPattern})`}
      backgroundSize="cover"
    >
      <Stack gap={6}>
        <Image
          src={brand.logoLight}
          alt="VIP Lift Nigeria"
          h={{ base: '48px', md: '58px' }}
          w="fit-content"
        />
        <Heading as="h2" maxW="620px" fontSize={{ base: '3xl', md: '5xl' }} {...headingStyles}>
          The right lift for the building. Local support for the journey.
        </Heading>
        <Text maxW="600px" color="vip.platinum">
          Supply, installation, repairs, servicing, and maintenance for homes, businesses, and public buildings.
        </Text>
        <Action href={mailtoHref('VIP%20Lift%20Project%20Enquiry')} variant="inverse" alignSelf="flex-start">
          Request a Quote
        </Action>
      </Stack>
      <Stack as="address" gap={3} alignSelf="end" fontStyle="normal" color="vip.platinum">
        <Eyebrow color="vip.platinum">Lagos office</Eyebrow>
        <TextLink href={contact.phoneHref} color="vip.platinum" _hover={{ color: 'white', textDecoration: 'underline' }}>{contact.phone}</TextLink>
        {featureFlags.whatsapp && <TextLink href={contact.whatsappHref} color="vip.platinum">WhatsApp</TextLink>}
        <TextLink href={`mailto:${contact.email}`} color="vip.platinum">{contact.email}</TextLink>
        <TextLink to="/service-area" color="vip.platinum">Service areas</TextLink>
        <Text>{contact.address}</Text>
        <Text>{contact.hours}</Text>
        <Text pt={4} color="vip.coolGrey" fontSize="xs">© {new Date().getFullYear()} VIP Lift Nigeria.</Text>
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
      left={{ base: 3, md: 6 }}
      right={{ base: 3, md: 6 }}
      bottom={{ base: 3, md: 5 }}
      maxW="980px"
      mx="auto"
      p={3}
      templateColumns={{ base: '1fr', md: '1fr auto' }}
      gap={3}
      alignItems="center"
      bg="rgba(255,255,255,.96)"
      border="1px solid"
      borderColor="border.subtle"
      borderRadius="card"
      boxShadow="0 16px 50px rgba(2,8,20,.16)"
      backdropFilter="blur(18px)"
    >
      <Flex alignItems="center" justify={{ base: 'center', md: 'flex-start' }} gap={2.5} minW="0">
        <Box as="svg" flexShrink="0" w="20px" h="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="accent.primary">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </Box>
        <Text color="text.subtle" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
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
    <Stack as="section" gap={5} maxW="900px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 16, md: 24 }} textAlign="center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading as="h2" textStyle="sectionTitle">{title}</Heading>
      {description && <Text maxW="680px" mx="auto" color="text.muted">{description}</Text>}
      <ButtonRow>{primary}{secondary}</ButtonRow>
    </Stack>
  )
}

function ProcessStrip() {
  return (
    <Box as="section" bg="bg.deep" color="text.inverse">
      <Box maxW="content" mx="auto" {...sectionStyles}>
        <SectionHeading eyebrow="A clear process" title="From first conversation to long-term care." />
        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: `repeat(${processSteps.length}, 1fr)` }} gap="1px" bg="rgba(255,255,255,.18)">
          {processSteps.map((step) => (
            <Stack as="article" key={step.step} gap={4} p={{ base: 6, lg: 7 }} bg="bg.deep">
              <Text color="accent.primary" fontFamily="label" fontSize="xs" fontWeight="600">{step.step}</Text>
              <Heading as="h3" fontFamily="body" fontSize="md" fontWeight="600">{step.title}</Heading>
              <Text color="vip.platinum" fontSize="sm">{step.summary}</Text>
            </Stack>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

function CertificationBadges() {
  return (
    <Grid as="section" aria-label="Service advantages" templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={3} mt={10}>
      {certifications.map((item) => (
        <Stack key={item.label} gap={2} p={5} bg="bg.surface" border="1px solid" borderColor="border.subtle" borderRadius="card">
          <Text fontWeight="600">{item.label}</Text>
          <Text color="text.subtle" fontSize="xs">{item.detail}</Text>
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
          <Box as="details" key={item.question} p={5} bg="bg.surface" border="1px solid" borderColor="border.subtle" borderRadius="button">
            <Text as="summary" cursor="pointer" fontWeight="600">{item.question}</Text>
            <Text mt={3} color="text.muted">{item.answer}</Text>
          </Box>
        ))}
      </Stack>
      {limit && <Box mt={4}><TextLink to="/contact#faq">View all questions</TextLink></Box>}
    </Box>
  )
}

const fieldStyles = {
  w: 'full',
  minH: '48px',
  px: 4,
  border: '1px solid',
  borderColor: 'border.strong',
  borderRadius: 'button',
  bg: 'bg.surface',
  color: 'text.primary',
  _focus: { borderColor: 'accent.primary', boxShadow: '0 0 0 1px var(--chakra-colors-accent-primary)' },
}

function FormField({ label, children }) {
  return <Stack as="label" gap={2}><Text color="text.subtle" fontSize="sm" fontWeight="600">{label}</Text>{children}</Stack>
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
      <Text color="text.subtle" fontSize="xs">{contact.responseTime}</Text>
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
      alignItems="center"
      px={{ base: 5, md: 10, lg: 16 }}
      pt={{ base: '128px', md: '150px' }}
      pb={{ base: '180px', md: '150px' }}
      bgImage={`url(${hero.image})`}
      bgPosition={{ base: '62% center', md: 'center' }}
      bgSize="cover"
    >
      <Box position="absolute" inset="0" bg="linear-gradient(90deg, rgba(2,8,20,.92) 0%, rgba(2,8,20,.66) 48%, rgba(2,8,20,.16) 100%)" />
      <Stack position="relative" zIndex="1" gap={5} maxW="760px" color="text.inverse">
        <Eyebrow color="vip.platinum">{hero.eyebrow}</Eyebrow>
        <Heading as="h1" textStyle="hero">{hero.title}</Heading>
        <Text maxW="680px" color="rgba(255,255,255,.9)" fontSize={{ base: 'md', md: 'lg' }}>{hero.summary}</Text>
        {hero.promo && <Text color="vip.platinum" fontFamily="label" fontSize="xs" fontWeight="600" letterSpacing="0.06em" textTransform="uppercase">{hero.promo}</Text>}
        <ButtonRow justify="flex-start">
          <Action href={hero.primaryCta.href}>{hero.primaryCta.label}</Action>
          <Action href={hero.secondaryCta.href} variant="inverse">{hero.secondaryCta.label}</Action>
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
      px={{ base: 5, md: 10, lg: 16 }}
      pt="120px"
      pb={{ base: 16, md: 24 }}
      bgImage={`url(${data.image})`}
      bgPosition="center"
      bgSize="cover"
      color="text.inverse"
    >
      <Box position="absolute" inset="0" bg="linear-gradient(90deg, rgba(2,8,20,.86), rgba(2,8,20,.3))" />
      <Eyebrow position="relative" zIndex="1" color="vip.platinum">{eyebrow}</Eyebrow>
      <Heading position="relative" zIndex="1" as="h1" maxW="900px" textStyle="hero">{data.title}</Heading>
      <Text position="relative" zIndex="1" maxW="640px" color="rgba(255,255,255,.92)">{data.summary}</Text>
    </Stack>
  )
}

function CategoryCard({ service }) {
  const recipe = useRecipe({ key: 'vipCard' })
  return (
    <Flex as="article" direction="column" css={recipe({ variant: 'service' })}>
      <Box position="relative" minH={{ base: '220px', md: '260px' }} overflow="hidden">
        <Image position="absolute" inset="0" w="full" h="full" objectFit="cover" src={service.image} alt={`${service.title} by VIP Lift`} loading="lazy" />
        <Box position="absolute" inset="0" bg="linear-gradient(180deg, rgba(2,8,20,.08), rgba(2,8,20,.74))" />
        <Eyebrow position="absolute" zIndex="1" left={6} bottom={6} color="white">{service.title}</Eyebrow>
      </Box>
      <Stack flex="1" gap={5} p={6}>
        <Text color="text.muted">{service.summary}</Text>
        <Flex mt="auto" gap={5}>
          <TextLink to={`/services/${service.slug}`} color="text.primary" fontWeight="600">Explore</TextLink>
          <TextLink href={mailtoHref(service.primaryCta.subject)} color="accent.primary" fontWeight="600">Enquire</TextLink>
        </Flex>
      </Stack>
    </Flex>
  )
}

function ServiceGrid() {
  return (
    <Box as="section" maxW="content" mx="auto" {...sectionStyles}>
      <SectionHeading eyebrow="Our services" title="Lift expertise for every stage of the building." />
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={5}>
        {services.map((service) => <CategoryCard key={service.title} service={service} />)}
      </Grid>
    </Box>
  )
}

function SolutionGuide() {
  return (
    <Grid
      as="section"
      maxW="content"
      mx="auto"
      templateColumns={{ base: '1fr', lg: '.8fr 1.2fr' }}
      gap={{ base: 10, lg: 20 }}
      alignItems="start"
      {...sectionStyles}
    >
      <Stack gap={5}>
        <Eyebrow>Choose with confidence</Eyebrow>
        <Heading as="h2" textStyle="sectionTitle">Which lift direction fits your building?</Heading>
        <Text color="text.muted">
          Building type, available space, usage, traffic, and long-term support all shape the right recommendation.
        </Text>
        <Action to="/customize-lift" alignSelf="flex-start">Start Your Enquiry</Action>
      </Stack>
      <Stack gap="1px" bg="border.subtle">
        {solutionGuide.map((item) => (
          <Grid key={item.need} templateColumns={{ base: '1fr', sm: '1.2fr .8fr' }} gap={3} p={5} bg="bg.surface">
            <Text color="text.muted">{item.need}</Text>
            <Text color="text.primary" fontWeight="600">{item.direction}</Text>
          </Grid>
        ))}
      </Stack>
    </Grid>
  )
}

function ProofList({ items }) {
  return (
    <Stack as="ul" gap={3} m={0} p={0} listStyleType="none">
      {items.map((item) => (
        <Box as="li" key={item} pb={3} borderBottom="1px solid" borderColor="border.subtle" color="text.muted">
          {item}
        </Box>
      ))}
    </Stack>
  )
}

function ProofSection() {
  return (
    <Box as="section" maxW="content" mx="auto" {...sectionStyles}>
      <Grid templateColumns={{ base: '1fr', md: 'minmax(0,.95fr) minmax(0,1.05fr)' }} gap={{ base: 8, lg: 18 }}>
        <Box>
          <Eyebrow>Supported locally</Eyebrow>
          <Heading as="h2" mt={4} textStyle="sectionTitle">International lift systems, with a Nigerian team beside the project.</Heading>
        </Box>
        <ProofList items={proofPoints} />
      </Grid>
      <CertificationBadges />
    </Box>
  )
}

function MaintenanceSection() {
  const maintenance = services.find((service) => service.slug === 'maintenance')
  return (
    <Grid as="section" templateColumns={{ base: '1fr', lg: '1fr 1fr' }} bg="bg.dark" color="text.inverse">
      <Image src={maintenance.image} alt="Lift maintenance and technical support" w="full" h="full" minH={{ base: '320px', lg: '620px' }} objectFit="cover" />
      <Stack justify="center" gap={6} {...sectionStyles}>
        <Eyebrow color="vip.platinum">Repairs & maintenance</Eyebrow>
        <Heading as="h2" textStyle="sectionTitle">Keep your lift safe, reliable, and professionally maintained.</Heading>
        <Text maxW="620px" color="vip.platinum">
          From routine servicing to fault assessment and repair coordination, VIP Lift provides a consistent local point of support.
        </Text>
        <ButtonRow justify="flex-start">
          <Action href={mailtoHref(maintenance.primaryCta.subject)}>Book a Maintenance Visit</Action>
          <Action href={contact.phoneHref} variant="inverse">Call Our Team</Action>
        </ButtonRow>
      </Stack>
    </Grid>
  )
}

function Home() {
  return (
    <PageShell overHero>
      <HeroSection />
      <ServiceGrid />
      <SolutionGuide />
      <ProcessStrip />
      <ProofSection />
      <MaintenanceSection />
      <FaqSection limit={5} />
      <CtaBand
        eyebrow="Start a conversation"
        title="Tell us about your building, space, and lift needs."
        description="We will help you identify the right next step, whether you are planning a new installation or need support for an existing lift."
        primary={<Action href={mailtoHref('VIP%20Lift%20Project%20Enquiry')}>Request a Quote</Action>}
        secondary={<Action href={contact.phoneHref} variant="secondary">Speak to a Lift Specialist</Action>}
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
              <Text color="text.muted">{audience.summary}</Text>
              <TextLink to={audience.slug === 'building-owners' ? '/contact' : `/for-${audience.slug}`}>Learn more</TextLink>
            </Stack>
          ))}
        </Grid>
      </Box>
      <ProcessStrip />
      <SplitSection bg="bg.surface">
        <Box><Eyebrow>Design flexibility</Eyebrow><Heading as="h2" mt={3} fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Custom-made lift solutions for new and existing buildings.</Heading></Box>
        <Text color="text.muted">VIP Lift helps project teams consider shaft configuration, available space, architectural integration, finish direction, and coordinated installation support.</Text>
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
        <Text color="text.subtle">{featured ? `${project.category} · ${project.location}` : project.location}</Text>
        <Heading as={featured ? 'h3' : 'h2'} fontSize="lg" {...headingStyles}>{project.title}</Heading>
        {featured && <Text color="text.subtle">View case study</Text>}
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
        <Stack gap={3}><Eyebrow>Project overview</Eyebrow><Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Problem, solution, and delivery.</Heading><Text color="text.muted">{project.story}</Text></Stack>
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
        <Stack gap={3}><Eyebrow>Overview</Eyebrow><Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>Built for Nigerian homes and buildings.</Heading><Text color="text.muted">{service.description}</Text></Stack>
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
        <Stack gap={3}><Eyebrow>How we support you</Eyebrow><Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} {...headingStyles}>From specification to installation.</Heading><Text color="text.muted">{audience.description}</Text></Stack>
        <ProofList items={audience.benefits} />
      </SplitSection>
      {audienceSlug === 'architects' && (
        <Box as="section" bg="bg.canvas" {...sectionStyles}>
          <SectionHeading eyebrow="Resources" title="Technical documentation for specifiers." />
          <ButtonRow justify="flex-start">
            <Action href={mailtoHref(contact.specPackMailtoSubject)}>Request Spec Pack</Action>
            <Action href={contact.phoneHref} variant="secondary">Call for Technical Support</Action>
          </ButtonRow>
          <Text mt={4} color="text.subtle" fontSize="xs">Email us for the latest specifications, drawings, and product documentation.</Text>
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
          {serviceAreas.map((area) => <Box as="li" key={area} p={4} bg="bg.canvas" fontWeight="500">{area}</Box>)}
        </Grid>
      </Box>
      <SplitSection bg="bg.surface">
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
              {customizeLiftSteps.map((item, index) => <Box key={item.id} flex="1" h="4px" bg={index <= stepIndex ? 'accent.primary' : 'border.subtle'} />)}
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
                        bg={selected ? 'rgba(22,138,85,.08)' : 'bg.surface'}
                        color="text.primary"
                        border="1px solid"
                        borderColor={selected ? 'accent.primary' : 'border.strong'}
                        borderRadius="button"
                        fontWeight="500"
                        onClick={() => setAnswers((current) => ({ ...current, [step.id]: option }))}
                        _hover={{ borderColor: 'accent.primary', bg: 'rgba(22,138,85,.08)' }}
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
                <Box p={5} bg="bg.canvas"><Eyebrow>Your selections</Eyebrow><Box mt={4}><ProofList items={customizeLiftSteps.map((item) => `${item.title}: ${answers[item.id]}`)} /></Box></Box>
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
            <Text color="text.muted">If it did not open, call us directly or use the contact form.</Text>
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
    minH: '160px',
    p: 6,
    bg: 'bg.surface',
    color: 'text.primary',
    border: '1px solid',
    borderColor: 'border.subtle',
    borderRadius: 'card',
    transition: 'background-color 180ms, border-color 180ms',
    _hover: href ? { bg: 'bg.canvas', borderColor: 'border.strong' } : undefined,
  }
  const content = <><Text color="text.subtle">{label}</Text><Text fontSize="lg" fontWeight="500" lineHeight="1.3">{children}</Text></>
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
      <Box as="section" bg="bg.canvas" {...sectionStyles}>
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
