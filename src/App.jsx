import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
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

function getPageMeta(pathname) {
  if (pathname.startsWith('/projects/')) {
    const project = getProjectBySlug(pathname.replace('/projects/', ''))
    if (project) {
      return [`${project.title} | VIP Lift Nigeria`, project.summary]
    }
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
    const existing = document.getElementById('page-schema')
    existing?.remove()

    const schemas = [
      {
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
      },
    ]

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

function Header({ overHero = false }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const headerClass = [
    'site-header',
    overHero && !solid ? 'site-header--over-hero' : '',
    solid || !overHero ? 'site-header--solid' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const logoSrc = overHero && !solid ? brand.logoLight : brand.logo

  return (
    <header className={headerClass}>
      <Link className="brand" to="/" aria-label="VIP Lift home">
        <img src={logoSrc} alt="VIP Lift" className="brand__logo" width={72} height={63} />
        <small>{brand.tagline}</small>
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav id="primary-navigation" className={open ? 'nav nav-open' : 'nav'} aria-label="Primary">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} end={item.href === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={contact.phoneHref}>
          {contact.phone}
        </a>
        <a
          className="nav-cta"
          href={mailtoHref('VIP%20Lift%20Project%20Enquiry')}
        >
          Get a Quote
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Lagos office</p>
        <h2>Move forward with a lift solution built around your space.</h2>
        <p className="footer-response">{contact.responseTime}</p>
      </div>
      <address>
        <a href={contact.phoneHref}>{contact.phone}</a>
        {featureFlags.whatsapp && (
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        )}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <Link to="/service-area">Service areas</Link>
        <span>{contact.address}</span>
        <span>{contact.hours}</span>
      </address>
    </footer>
  )
}

function InquiryBar() {
  return (
    <aside className="inquiry-bar" aria-label="Quick enquiry">
      <div className="inquiry-bar__input">
        <svg className="inquiry-bar__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span>{inquiryBar.prompt}</span>
      </div>
      <div className="inquiry-bar__actions">
        <a className="inquiry-bar__cta" href={contact.phoneHref}>
          Call Now
        </a>
        {featureFlags.whatsapp && (
          <a className="inquiry-bar__secondary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        )}
        <a className="inquiry-bar__secondary" href={mailtoHref(inquiryBar.cta.subject)}>
          Email
        </a>
        {featureFlags.calendly && (
          <a className="inquiry-bar__secondary" href={contact.calendlyHref} target="_blank" rel="noreferrer">
            {contact.calendlyLabel}
          </a>
        )}
      </div>
    </aside>
  )
}

function PageShell({ children, overHero = false }) {
  return (
    <>
      <MetaTitle />
      <SchemaMarkup />
      <Header overHero={overHero} />
      <main>{children}</main>
      <Footer />
      <InquiryBar />
    </>
  )
}

function CtaBand({ eyebrow, title, description, primary, secondary }) {
  return (
    <section className="cta-panel">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="button-row">
        {primary}
        {secondary}
      </div>
    </section>
  )
}

function ProcessStrip() {
  return (
    <section className="section section-muted">
      <div className="section-heading">
        <p className="eyebrow">How it works</p>
        <h2>From first enquiry to installation and support.</h2>
      </div>
      <div className="process-grid">
        {processSteps.map((step) => (
          <article className="process-card" key={step.step}>
            <span className="process-card__step">{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CertificationBadges() {
  return (
    <section className="badge-row" aria-label="Certifications and standards">
      {certifications.map((item) => (
        <div className="badge-row__item" key={item.label}>
          <strong>{item.label}</strong>
          <span>{item.detail}</span>
        </div>
      ))}
    </section>
  )
}

function FaqSection({ limit }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Common questions</p>
        <h2>Answers before you call.</h2>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      {limit && (
        <p className="faq-more">
          <Link className="text-link" to="/contact#faq">
            View all questions
          </Link>
        </p>
      )}
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="section section-muted">
      <div className="section-heading">
        <p className="eyebrow">Client feedback</p>
        <h2>Trusted on residential, commercial, and public projects.</h2>
      </div>
      <div className="card-grid three">
        {testimonials.map((item) => (
          <blockquote className="testimonial-card" key={item.context}>
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <strong>{item.source}</strong>
              <span>{item.context}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      {featureFlags.googleReviews && (
        <div className="trust-link-row">
          <a className="text-link" href={contact.googleBusinessHref} target="_blank" rel="noreferrer">
            Read reviews on Google
          </a>
        </div>
      )}
      <CtaBand
        title="Ready to discuss your project?"
        primary={
          <a className="button button-primary" href={contact.phoneHref}>
            Call for a Site Visit
          </a>
        }
        secondary={
          <a className="button button-secondary" href={mailtoHref('VIP%20Lift%20Project%20Enquiry')}>
            Email VIP Lift
          </a>
        }
      />
    </section>
  )
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
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = mailtoHref('VIP%20Lift%20Website%20Enquiry', body)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label>
          <span>Name</span>
          <input name="name" required value={form.name} onChange={handleChange} autoComplete="name" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" required type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" />
        </label>
        <label>
          <span>Email (optional)</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" />
        </label>
        <label>
          <span>Service needed</span>
          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <label>
        <span>Brief description</span>
        <textarea name="message" rows={4} required value={form.message} onChange={handleChange} />
      </label>
      <p className="contact-form__note">{contact.responseTime}</p>
      <button className="button button-primary" type="submit">
        Send Enquiry via Email
      </button>
    </form>
  )
}

function HeroSection() {
  return (
    <section className="hero-section viewport-section" style={{ '--hero-image': `url(${hero.image})` }}>
      <div className="hero-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        {hero.promo && <p className="hero-promo">{hero.promo}</p>}
        <p>{hero.summary}</p>
        <p className="hero-trust">
          {featureFlags.googleReviews && (
            <>
              <a href={contact.googleBusinessHref} target="_blank" rel="noreferrer">
                Read our Google reviews
              </a>
              {' · '}
            </>
          )}
          {contact.responseTime}
        </p>
        <div className="button-row">
          <a className="button button-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className="button button-secondary" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceGrid() {
  const [featured, ...rest] = services

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">What we do</p>
        <h2>Flexible lift systems for modern Nigerian buildings.</h2>
      </div>
      <div className="category-grid">
        <article className="category-card">
          <div className="category-card__media">
            <img src={featured.image} alt={`${featured.title} by VIP Lift`} loading="lazy" />
            <span>{featured.title}</span>
          </div>
          <div className="category-card__links">
            <Link className="text-link" to={`/services/${featured.slug}`}>Learn</Link>
            <a className="text-link" href={mailtoHref(featured.primaryCta.subject)}>Enquire</a>
          </div>
        </article>
        <div className="card-grid card-grid--stacked">
          {rest.map((service) => (
            <article className="category-card" key={service.title}>
              <div className="category-card__media">
                <img src={service.image} alt={`${service.title} by VIP Lift`} loading="lazy" />
                <span>{service.title}</span>
              </div>
              <div className="category-card__links">
                <Link className="text-link" to={`/services/${service.slug}`}>Learn</Link>
                <a className="text-link" href={mailtoHref(service.primaryCta.subject)}>Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProofSection() {
  return (
    <section className="section section-muted">
      <div className="split">
        <div>
          <p className="eyebrow">Engineered confidence</p>
          <h2>European-standard lift technology, installed and supported from Lagos.</h2>
        </div>
        <ul className="proof-list">
          {proofPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <CertificationBadges />
    </section>
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
        primary={
          <a className="button button-primary" href={contact.phoneHref}>
            Call VIP Lift
          </a>
        }
        secondary={
          <Link className="button button-secondary" to="/contact">
            Send an Enquiry
          </Link>
        }
      />
    </PageShell>
  )
}

function About() {
  const data = pageHeroes.about

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${data.image})` }}>
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
      </section>
      <section className="section">
        <div className="card-grid three">
          {audiences.map((audience) => (
            <article className="text-card" key={audience.title}>
              <h2>{audience.title}</h2>
              <p>{audience.summary}</p>
              <Link className="text-link" to={audience.slug === 'building-owners' ? '/contact' : `/for-${audience.slug}`}>
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ProcessStrip />
      <section className="section section-muted split">
        <div>
          <p className="eyebrow">Design flexibility</p>
          <h2>Custom-made lift solutions for new and existing buildings.</h2>
        </div>
        <p>
          VIP Lift can support panoramic lift shafts with glass panels, flexible compact
          dimensions, robust platform lifts with capacities up to 1000 kilograms, and
          coordinated installation support.
        </p>
      </section>
      <CtaBand
        eyebrow="Discuss your project"
        title="Talk to VIP Lift about specifications, drawings, and installation support."
        primary={
          <a className="button button-primary" href={mailtoHref('VIP%20Lift%20Architect%20Spec%20Request')}>
            Request Technical Specs
          </a>
        }
        secondary={
          <a className="button button-secondary" href={contact.phoneHref}>
            Call VIP Lift
          </a>
        }
      />
    </PageShell>
  )
}

function Projects() {
  const data = pageHeroes.projects
  const featured = projects.filter((project) => project.featured)

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${data.image})` }}>
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
      </section>
      {featured.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured case studies</p>
            <h2>Recent installations with project detail.</h2>
          </div>
          <div className="card-grid three">
            {featured.map((project) => (
              <Link className="image-card project-link-card" key={project.slug} to={`/projects/${project.slug}`}>
                <img src={project.image} alt={`${project.title} project example`} loading="lazy" />
                <div>
                  <p>{project.category} · {project.location}</p>
                  <h3>{project.title}</h3>
                  <span className="text-link">View case study</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <ProofSection />
      <section className="section">
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card project-link-card" key={project.slug} to={`/projects/${project.slug}`}>
              <img src={project.image} alt={`${project.title} project example`} loading="lazy" />
              <div>
                <p>{project.location}</p>
                <h2>{project.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand
        title="Discuss a similar project for your building."
        primary={
          <a className="button button-primary" href={contact.phoneHref}>
            Call for a Site Visit
          </a>
        }
        secondary={
          <Link className="button button-secondary" to="/customize-lift">
            Customize Your Lift
          </Link>
        }
      />
    </PageShell>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <PageShell>
        <section className="section">
          <h1>Project not found</h1>
          <Link className="button button-primary" to="/projects">Back to projects</Link>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${project.image})` }}>
        <p className="eyebrow">{project.category} · {project.location}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </section>
      <section className="section split">
        <div>
          <p className="eyebrow">Project overview</p>
          <h2>Problem, solution, and delivery.</h2>
          <p>{project.story}</p>
        </div>
        <ul className="proof-list">
          {project.specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </section>
      <CtaBand
        title="Start a conversation about a similar lift project."
        primary={
          <a className="button button-primary" href={mailtoHref('VIP%20Lift%20Project%20Enquiry', `Hi VIP Lift,\n\nI am interested in a lift project similar to ${project.title}.\n\n`)}
          >
            Discuss This Type of Project
          </a>
        }
        secondary={
          <a className="button button-secondary" href={contact.phoneHref}>
            Call VIP Lift
          </a>
        }
      />
    </PageShell>
  )
}

function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <PageShell>
        <section className="section">
          <h1>Service not found</h1>
          <Link className="button button-primary" to="/">Back to home</Link>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${service.image})` }}>
        <p className="eyebrow">Service</p>
        <h1>{service.title}</h1>
        <p>{service.summary}</p>
      </section>
      <section className="section split">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Built for Nigerian homes and buildings.</h2>
          <p>{service.description}</p>
        </div>
        <ul className="proof-list">
          {service.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <ProcessStrip />
      <FaqSection limit={4} />
      <CtaBand
        title={`Ready to discuss ${service.title.toLowerCase()}?`}
        primary={
          <a className="button button-primary" href={service.primaryCta.href ?? mailtoHref(service.primaryCta.subject)}>
            {service.primaryCta.label}
          </a>
        }
        secondary={
          <a className="button button-secondary" href={contact.phoneHref}>
            Call VIP Lift
          </a>
        }
      />
    </PageShell>
  )
}

function AudiencePage({ slug: audienceSlug }) {
  const audience = getAudienceBySlug(audienceSlug)

  if (!audience) {
    return (
      <PageShell>
        <section className="section">
          <h1>Page not found</h1>
          <Link className="button button-primary" to="/about">Back to about</Link>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${audience.image})` }}>
        <p className="eyebrow">VIP Lift partners</p>
        <h1>{audience.title}</h1>
        <p>{audience.summary}</p>
      </section>
      <section className="section split">
        <div>
          <p className="eyebrow">How we support you</p>
          <h2>From specification to installation.</h2>
          <p>{audience.description}</p>
        </div>
        <ul className="proof-list">
          {audience.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {audienceSlug === 'architects' && (
        <section className="section section-muted">
          <div className="section-heading">
            <p className="eyebrow">Resources</p>
            <h2>Technical documentation for specifiers.</h2>
          </div>
          <div className="button-row">
            <a
              className="button button-primary"
              href={mailtoHref(contact.specPackMailtoSubject)}
            >
              Request Spec Pack
            </a>
            <a className="button button-secondary" href={contact.phoneHref}>
              Call for Technical Support
            </a>
          </div>
          <p className="resource-note">Email us for the latest specifications, drawings, and product documentation.</p>
        </section>
      )}
      <CtaBand
        title="Let's coordinate on your next project."
        primary={
          <a
            className="button button-primary"
            href={audience.primaryCta.href ?? mailtoHref(audience.primaryCta.subject)}
          >
            {audience.primaryCta.label}
          </a>
        }
        secondary={
          featureFlags.calendly ? (
            <a className="button button-secondary" href={contact.calendlyHref} target="_blank" rel="noreferrer">
              {contact.calendlyLabel}
            </a>
          ) : undefined
        }
      />
    </PageShell>
  )
}

function ServiceArea() {
  const data = pageHeroes.serviceArea

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${data.image})` }}>
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Coverage</p>
          <h2>Lagos headquarters with nationwide project coordination.</h2>
        </div>
        <ul className="area-list">
          {serviceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>
      <section className="section section-muted split">
        <div>
          <p className="eyebrow">Lagos office</p>
          <h2>Visit or call our team on Lagos Island.</h2>
        </div>
        <address className="inline-address">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.mapHref} target="_blank" rel="noreferrer">{contact.address}</a>
          <span>{contact.hours}</span>
        </address>
      </section>
      <CtaBand
        title="Not sure if we cover your location? Call and we will confirm."
        primary={
          <a className="button button-primary" href={contact.phoneHref}>
            Call VIP Lift
          </a>
        }
        secondary={
          featureFlags.whatsapp ? (
            <a className="button button-secondary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          ) : (
            <a className="button button-secondary" href={`mailto:${contact.email}`}>
              Email VIP Lift
            </a>
          )
        }
      />
    </PageShell>
  )
}

function CustomizeLift() {
  const data = pageHeroes.customizeLift
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' })

  const step = customizeLiftSteps[stepIndex]
  const isContactStep = stepIndex === customizeLiftSteps.length
  const isComplete = stepIndex > customizeLiftSteps.length

  function selectOption(option) {
    setAnswers((current) => ({ ...current, [step.id]: option }))
  }

  function buildEnquiryBody() {
    const lines = [
      'Customize Lift Enquiry',
      '',
      ...customizeLiftSteps.map((item) => `${item.title}: ${answers[item.id] ?? 'Not answered'}`),
      '',
      `Name: ${contactInfo.name}`,
      `Phone: ${contactInfo.phone}`,
      contactInfo.email ? `Email: ${contactInfo.email}` : null,
    ].filter(Boolean)
    return lines.join('\n')
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.location.href = mailtoHref('VIP%20Lift%20Customize%20Lift%20Enquiry', buildEnquiryBody())
    setStepIndex(customizeLiftSteps.length + 1)
  }

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${data.image})` }}>
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
      </section>
      <section className="section wizard-section">
        {!isComplete ? (
          <>
            <div className="wizard-progress" aria-hidden="true">
              {customizeLiftSteps.map((item, index) => (
                <span className={index <= stepIndex ? 'wizard-progress__dot wizard-progress__dot--active' : 'wizard-progress__dot'} key={item.id} />
              ))}
            </div>
            {!isContactStep ? (
              <div className="wizard-step">
                <p className="eyebrow">{step.title}</p>
                <h2>{step.question}</h2>
                <div className="wizard-options">
                  {step.options.map((option) => (
                    <button
                      className={answers[step.id] === option ? 'wizard-option wizard-option--selected' : 'wizard-option'}
                      key={option}
                      type="button"
                      onClick={() => selectOption(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="button-row">
                  {stepIndex > 0 && (
                    <button className="button button-secondary" type="button" onClick={() => setStepIndex((value) => value - 1)}>
                      Back
                    </button>
                  )}
                  <button
                    className="button button-primary"
                    type="button"
                    disabled={!answers[step.id]}
                    onClick={() => setStepIndex((value) => value + 1)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              <form className="wizard-step contact-form" onSubmit={handleSubmit}>
                <p className="eyebrow">Your details</p>
                <h2>Where should we send your tailored enquiry?</h2>
                <div className="contact-form__grid">
                  <label>
                    <span>Name</span>
                    <input required value={contactInfo.name} onChange={(event) => setContactInfo((current) => ({ ...current, name: event.target.value }))} />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input required type="tel" value={contactInfo.phone} onChange={(event) => setContactInfo((current) => ({ ...current, phone: event.target.value }))} />
                  </label>
                  <label>
                    <span>Email (optional)</span>
                    <input type="email" value={contactInfo.email} onChange={(event) => setContactInfo((current) => ({ ...current, email: event.target.value }))} />
                  </label>
                </div>
                <div className="wizard-summary">
                  <p className="eyebrow">Your selections</p>
                  <ul className="proof-list">
                    {customizeLiftSteps.map((item) => (
                      <li key={item.id}>{item.title}: {answers[item.id]}</li>
                    ))}
                  </ul>
                </div>
                <div className="button-row">
                  <button className="button button-secondary" type="button" onClick={() => setStepIndex((value) => value - 1)}>
                    Back
                  </button>
                  <button className="button button-primary" type="submit">
                    Send Enquiry via Email
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="wizard-step">
            <h2>Your email app should open with your enquiry.</h2>
            <p>If it did not open, call us directly or use the contact form.</p>
            <div className="button-row">
              <a className="button button-primary" href={contact.phoneHref}>Call VIP Lift</a>
              <Link className="button button-secondary" to="/contact">Contact page</Link>
            </div>
          </div>
        )}
      </section>
    </PageShell>
  )
}

function Contact() {
  const data = pageHeroes.contact

  return (
    <PageShell>
      <section className="page-hero page-hero--image" style={{ '--hero-image': `url(${data.image})` }}>
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
        <p className="hero-trust page-hero-trust">{contact.responseTime}</p>
      </section>
      <section className="section contact-grid">
        <a className="contact-card" href={contact.phoneHref}>
          <span>Phone</span>
          <strong>{contact.phone}</strong>
        </a>
        {featureFlags.whatsapp && (
          <a className="contact-card" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
            <strong>Message VIP Lift</strong>
          </a>
        )}
        <a className="contact-card" href={`mailto:${contact.email}`}>
          <span>Email</span>
          <strong>{contact.email}</strong>
        </a>
        {featureFlags.calendly && (
          <a className="contact-card" href={contact.calendlyHref} target="_blank" rel="noreferrer">
            <span>Consultation</span>
            <strong>{contact.calendlyLabel}</strong>
          </a>
        )}
        <a className="contact-card" href={contact.mapHref} target="_blank" rel="noreferrer">
          <span>Address</span>
          <strong>{contact.address}</strong>
        </a>
        <div className="contact-card">
          <span>Working hours</span>
          <strong>{contact.hours}</strong>
        </div>
      </section>
      <section className="section section-muted">
        <div className="section-heading">
          <p className="eyebrow">Send an enquiry</p>
          <h2>Tell us about your project.</h2>
        </div>
        <ContactForm />
      </section>
      <section className="section" id="faq">
        <FaqSection />
      </section>
      <CtaBand
        eyebrow="Request information"
        title="Looking for a lift solution for your home or business?"
        primary={
          <a className="button button-primary" href={`mailto:${contact.email}?subject=VIP%20Lift%20Information%20Pack`}>
            Request Your Free Information Pack
          </a>
        }
        secondary={
          <a className="button button-secondary" href={contact.phoneHref}>
            Call for a Site Visit
          </a>
        }
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
