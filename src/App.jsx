import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { audiences, brand, contact, hero, navItems, pageHeroes, projects, proofPoints, services } from './data/siteContent.js'

const pageMeta = {
  '/': ['VIP Lift Nigeria | Modern Lift Solutions', 'Premium lift solutions for homes, public buildings, and commercial spaces in Nigeria.'],
  '/about': ['About VIP Lift Nigeria', 'Learn how VIP Lift supports architects, contractors, and building owners with lift engineering services.'],
  '/projects': ['VIP Lift Projects', 'Explore selected VIP Lift Nigeria installations and lift project examples.'],
  '/contact': ['Contact VIP Lift Nigeria', 'Contact VIP Lift Nigeria in Lagos for lift supply, installation, and maintenance enquiries.'],
  '/customize-lift': ['Customize Lift | VIP Lift Nigeria', 'Customize your lift solution with VIP Lift Nigeria.'],
}

function MetaTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const [title, description] = pageMeta[pathname] ?? pageMeta['/']
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
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
      <a className="nav-cta" href={`mailto:${contact.email}?subject=VIP%20Lift%20Project%20Enquiry`}>
        Enquire
      </a>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Lagos office</p>
        <h2>Move forward with a lift solution built around your space.</h2>
      </div>
      <address>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
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
        <span>Ask about our lift solutions</span>
      </div>
      <div className="inquiry-bar__actions">
        <a className="inquiry-bar__cta" href={`mailto:${contact.email}?subject=VIP%20Lift%20Project%20Enquiry`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Contact VIP Lift
        </a>
        <Link className="inquiry-bar__secondary" to="/contact">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Schedule A Consultation
        </Link>
      </div>
    </aside>
  )
}

function PageShell({ children, overHero = false }) {
  return (
    <>
      <MetaTitle />
      <Header overHero={overHero} />
      <main>{children}</main>
      <Footer />
      <InquiryBar />
    </>
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
        <div className="button-row">
          <a className="button button-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <Link className="button button-secondary" to={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </Link>
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
            <Link className="text-link" to="/about">Learn</Link>
            <a className="text-link" href={`mailto:${contact.email}?subject=VIP%20Lift%20${encodeURIComponent(featured.title)}%20Enquiry`}>Enquire</a>
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
                <Link className="text-link" to="/about">Learn</Link>
                <a className="text-link" href={`mailto:${contact.email}?subject=VIP%20Lift%20${encodeURIComponent(service.title)}%20Enquiry`}>Enquire</a>
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
    </section>
  )
}

function Home() {
  return (
    <PageShell overHero>
      <HeroSection />
      <ServiceGrid />
      <ProofSection />
      <section className="cta-panel">
        <p className="eyebrow">After-sales support</p>
        <h2>Supply, installation, and maintenance in one coordinated lift package.</h2>
        <p>
          VIP Lift works with architects, contractors, building owners, and end users from
          specification through installation and long-term maintenance.
        </p>
        <Link className="button button-primary" to="/contact">
          Talk To VIP Lift
        </Link>
      </section>
    </PageShell>
  )
}

function About() {
  const data = pageHeroes.about

  return (
    <PageShell>
      <section
        className="page-hero page-hero--image"
        style={{ '--hero-image': `url(${data.image})` }}
      >
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
            </article>
          ))}
        </div>
      </section>
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
      <section className="cta-panel">
        <p className="eyebrow">Discuss your project</p>
        <h2>Talk to VIP Lift about specifications, drawings, and installation support.</h2>
        <Link className="button button-primary" to="/contact">
          Discuss A Project
        </Link>
      </section>
    </PageShell>
  )
}

function Projects() {
  const data = pageHeroes.projects

  return (
    <PageShell>
      <section
        className="page-hero page-hero--image"
        style={{ '--hero-image': `url(${data.image})` }}
      >
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
      </section>
      <ProofSection />
      <section className="section">
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} project example`} loading="lazy" />
              <div>
                <p>{project.location}</p>
                <h2>{project.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

function Contact() {
  const data = pageHeroes.contact

  return (
    <PageShell>
      <section
        className="page-hero page-hero--image"
        style={{ '--hero-image': `url(${data.image})` }}
      >
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
      </section>
      <section className="section contact-grid">
        <a className="contact-card" href={contact.phoneHref}>
          <span>Phone</span>
          <strong>{contact.phone}</strong>
        </a>
        <a className="contact-card" href={`mailto:${contact.email}`}>
          <span>Email</span>
          <strong>{contact.email}</strong>
        </a>
        <a className="contact-card" href={contact.mapHref} target="_blank" rel="noreferrer">
          <span>Address</span>
          <strong>{contact.address}</strong>
        </a>
        <div className="contact-card">
          <span>Working hours</span>
          <strong>{contact.hours}</strong>
        </div>
      </section>
      <section className="cta-panel">
        <p className="eyebrow">Request information</p>
        <h2>Looking for a lift solution for your home or business?</h2>
        <a className="button button-primary" href={`mailto:${contact.email}?subject=VIP%20Lift%20Information%20Pack`}>
          Request Your Free Information Pack
        </a>
      </section>
    </PageShell>
  )
}

function CustomizeLift() {
  return (
    <PageShell>
      <section className="section">
        <p>Work in progress</p>
      </section>
    </PageShell>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/customize-lift" element={<CustomizeLift />} />
    </Routes>
  )
}

export default App
