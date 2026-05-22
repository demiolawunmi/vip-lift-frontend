import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { audiences, contact, hero, navItems, projects, proofPoints, services } from './data/siteContent.js'

const pageMeta = {
  '/': ['VIP Lift Nigeria | Modern Lift Solutions', 'Premium lift solutions for homes, public buildings, and commercial spaces in Nigeria.'],
  '/about': ['About VIP Lift Nigeria', 'Learn how VIP Lift supports architects, contractors, and building owners with lift engineering services.'],
  '/projects': ['VIP Lift Projects', 'Explore selected VIP Lift Nigeria installations and lift project examples.'],
  '/contact': ['Contact VIP Lift Nigeria', 'Contact VIP Lift Nigeria in Lagos for lift supply, installation, and maintenance enquiries.'],
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

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="VIP Lift home">
        <span>VIP Lift</span>
        <small>Value, Innovation and Prestige</small>
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

function PageShell({ children }) {
  return (
    <>
      <MetaTitle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" style={{ '--hero-image': `url(${hero.image})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
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
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">What we do</p>
        <h2>Flexible lift systems for modern Nigerian buildings.</h2>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article className="image-card" key={service.title}>
            <img src={service.image} alt={`${service.title} by VIP Lift`} loading="lazy" />
            <div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
          </article>
        ))}
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
    <PageShell>
      <HeroSection />
      <ServiceGrid />
      <ProofSection />
      <section className="section cta-panel">
        <p className="eyebrow">After-sales support</p>
        <h2>Supply, installation, and maintenance in one coordinated lift package.</h2>
        <p>
          VIP Lift works with architects, contractors, building owners, and end users from
          specification through installation and long-term maintenance.
        </p>
        <Link className="button button-primary" to="/contact">
          Talk to VIP Lift
        </Link>
      </section>
    </PageShell>
  )
}

function About() {
  return (
    <PageShell>
      <section className="page-hero">
        <p className="eyebrow">Who we are</p>
        <h1>A lift technology and engineering company operating from Lagos.</h1>
        <p>
          VIP Lift specializes in the supply, installation, and maintenance of Cibes lifts
          and other premium elevating solutions for private homes and public buildings.
        </p>
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
      <section className="section cta-panel">
        <p className="eyebrow">Discuss your project</p>
        <h2>Talk to VIP Lift about specifications, drawings, and installation support.</h2>
        <Link className="button button-primary" to="/contact">
          Discuss a project
        </Link>
      </section>
    </PageShell>
  )
}

function Projects() {
  return (
    <PageShell>
      <section className="page-hero">
        <p className="eyebrow">Completed projects</p>
        <h1>Selected lift installations across homes, clubs, and public buildings.</h1>
        <p>
          VIP Lift supports everything from drawings and material selection to installation,
          service, and maintenance.
        </p>
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
  return (
    <PageShell>
      <section className="page-hero">
        <p className="eyebrow">Get in touch</p>
        <h1>Discuss a lift solution for your home or business.</h1>
        <p>
          We would be delighted to discuss how VIP Lift can present valuable, innovative,
          and prestigious lift solutions at a date and time convenient to you.
        </p>
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
      <section className="section cta-panel">
        <p className="eyebrow">Request information</p>
        <h2>Looking for a lift solution for your home or business?</h2>
        <a className="button button-primary" href={`mailto:${contact.email}?subject=VIP%20Lift%20Information%20Pack`}>
          Request your free information pack
        </a>
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
    </Routes>
  )
}

export default App
