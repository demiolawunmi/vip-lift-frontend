import { useEffect, useMemo, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { CoverageGlobe } from './components/CoverageGlobe.jsx'
import aboutHtml from './prototype/about.html?raw'
import contactHtml from './prototype/contact.html?raw'
import homeHtml from './prototype/index.html?raw'
import liftSolutionsHtml from './prototype/lift-solutions.html?raw'
import maintenanceHtml from './prototype/maintenance-servicing.html?raw'
import modernisationHtml from './prototype/modernisation.html?raw'
import projectsHtml from './prototype/projects.html?raw'
import servicesHtml from './prototype/services.html?raw'
import homePlatformHtml from './prototype/solution-home-platform-lifts.html?raw'

const contact = {
  email: 'sales@viplift.com.ng',
  phone: '+234 1 4540118',
  phoneHref: 'tel:+23414540118',
  whatsappHref: 'https://wa.me/23414540118',
  hours: 'Monday - Friday, 08:00 - 17:00',
  responseTime: '1 business day',
  address:
    'Suite 1910, 19th Floor, 8/10 Broad Street, Western House, Lagos Island, Lagos, Nigeria',
}

const pageSources = {
  '/': homeHtml,
  '/about': aboutHtml,
  '/lift-solutions': liftSolutionsHtml,
  '/services': servicesHtml,
  '/projects': projectsHtml,
  '/contact': contactHtml,
  '/solution-home-platform-lifts': homePlatformHtml,
  '/maintenance-servicing': maintenanceHtml,
  '/modernisation': modernisationHtml,
}

const htmlRoutes = {
  'index.html': '/',
  'about.html': '/about',
  'lift-solutions.html': '/lift-solutions',
  'services.html': '/services',
  'projects.html': '/projects',
  'contact.html': '/contact',
  'solution-home-platform-lifts.html': '/solution-home-platform-lifts',
  'maintenance-servicing.html': '/maintenance-servicing',
  'modernisation.html': '/modernisation',
}

const aliases = {
  '/services/home-lifts': '/solution-home-platform-lifts',
  '/services/public-lifts': '/lift-solutions',
  '/services/maintenance': '/maintenance-servicing',
  '/customize-lift': '/contact',
  '/service-area': '/contact',
  '/for-architects': '/contact',
  '/for-contractors': '/contact',
}

const coverageRoots = new WeakMap()

function replaceAll(value, replacements) {
  return replacements.reduce(
    (result, [pattern, replacement]) => result.split(pattern).join(replacement),
    value,
  )
}

function rewriteHtml(value) {
  let html = value

  Object.entries(htmlRoutes).forEach(([file, route]) => {
    html = html.replaceAll(`href="${file}"`, `href="${route}"`)
    html = html.replaceAll(`href='${file}'`, `href='${route}'`)
  })

  return replaceAll(html, [
    ['src="assets/', 'src="/assets/open-design/assets/'],
    ["src='assets/", "src='/assets/open-design/assets/"],
    ['href="assets/', 'href="/assets/open-design/assets/'],
    ["href='assets/", "href='/assets/open-design/assets/"],
    ["url('assets/", "url('/assets/open-design/assets/"],
    ['url("assets/', 'url("/assets/open-design/assets/'],
    ['url(assets/', 'url(/assets/open-design/assets/'],
    ['[Phone number]', contact.phone],
    ['[Email address]', contact.email],
    ['[Office address, Nigeria]', contact.address],
    ['[City, State, Nigeria]', 'Lagos, Nigeria'],
    ['[hours]', contact.hours],
    ['[response timeframe]', contact.responseTime],
    ['[timeframe]', contact.responseTime],
    ['tel:[PHONE]', contact.phoneHref],
    ['https://wa.me/[NUMBER]', contact.whatsappHref],
  ])
}

function parsePage(source) {
  const documentSource = new DOMParser().parseFromString(source, 'text/html')
  const title = documentSource.querySelector('title')?.textContent ?? 'VIP Lift Nigeria'
  const description =
    documentSource.querySelector('meta[name="description"]')?.getAttribute('content') ??
    'Premium lift solutions for homes, businesses and public buildings across Nigeria.'
  const bodyClass = documentSource.body.getAttribute('class') ?? 'site-page'
  const styles = [...documentSource.querySelectorAll('head style')]
    .map((style) => style.textContent)
    .join('\n')

  documentSource.querySelectorAll('script').forEach((script) => script.remove())

  return {
    title,
    description,
    bodyClass,
    markup: rewriteHtml(`${styles ? `<style>${styles}</style>` : ''}${documentSource.body.innerHTML}`),
  }
}

function usePrototypeInteractions(rootRef) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const nav = root.querySelector('#topnav')
    const hero = root.querySelector('.hero-bleed')
    const toggle = root.querySelector('#navToggle')
    const mobileNav = root.querySelector('#mobileNav')
    const chips = root.querySelectorAll('.filter-chip')
    const cards = root.querySelectorAll('.project-card')
    const enquiryOptions = root.querySelectorAll('.enquiry-option')
    const contactForm = root.querySelector('#contactForm')
    const formSuccess = root.querySelector('#formSuccess')

    const updateNav = () => {
      if (!nav || !hero) return
      const threshold = Math.max(hero.offsetHeight - 80, 80)
      nav.classList.toggle('over-hero', window.scrollY <= threshold)
      nav.classList.toggle('scrolled', window.scrollY > threshold)
    }

    const closeMobileNav = () => {
      mobileNav?.classList.remove('open')
      toggle?.classList.remove('open')
      toggle?.setAttribute('aria-label', 'Open menu')
      mobileNav?.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }

    const onToggle = () => {
      if (!toggle || !mobileNav) return
      const isOpen = mobileNav.classList.toggle('open')
      toggle.classList.toggle('open', isOpen)
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
      mobileNav.setAttribute('aria-hidden', String(!isOpen))
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }

    const onLinkClick = (event) => {
      const link = event.target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        closeMobileNav()
        return
      }

      const url = new URL(link.href, window.location.origin)
      const isExternal =
        url.origin !== window.location.origin || link.target === '_blank' || url.href.startsWith(contact.whatsappHref)

      if (isExternal) return

      if (pageSources[url.pathname] || aliases[url.pathname]) {
        event.preventDefault()
        closeMobileNav()
        navigate(aliases[url.pathname] ?? url.pathname)
      }
    }

    const chipHandlers = [...chips].map((chip) => {
      const handler = () => {
        chips.forEach((item) => item.classList.remove('active'))
        chip.classList.add('active')
        const filter = chip.getAttribute('data-filter')
        cards.forEach((card) => {
          card.style.display =
            filter === 'all' || card.getAttribute('data-category') === filter ? '' : 'none'
        })
      }
      chip.addEventListener('click', handler)
      return [chip, handler]
    })

    const enquiryHandlers = [...enquiryOptions].map((option) => {
      const handler = () => {
        enquiryOptions.forEach((item) => item.classList.remove('selected'))
        option.classList.add('selected')
      }
      option.addEventListener('click', handler)
      return [option, handler]
    })

    const onSubmit = (event) => {
      event.preventDefault()
      const data = new FormData(contactForm)
      const subject = `VIP Lift ${data.get('enquiry') ?? 'Project'} Enquiry`
      const lines = [
        `Enquiry type: ${data.get('enquiry') ?? ''}`,
        `Name: ${data.get('name') ?? ''}`,
        `Organisation: ${data.get('org') ?? ''}`,
        `Email: ${data.get('email') ?? ''}`,
        `Phone: ${data.get('phone') ?? ''}`,
        `Building type: ${data.get('building') ?? ''}`,
        `Project stage: ${data.get('stage') ?? ''}`,
        `Location: ${data.get('location') ?? ''}`,
        `Floors: ${data.get('floors') ?? ''}`,
        '',
        `${data.get('message') ?? ''}`,
      ]

      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
      contactForm.style.display = 'none'
      formSuccess?.classList.add('show')
    }

    updateNav()
    root.addEventListener('click', onLinkClick)
    toggle?.addEventListener('click', onToggle)
    window.addEventListener('scroll', updateNav, { passive: true })
    window.addEventListener('resize', updateNav, { passive: true })
    contactForm?.addEventListener('submit', onSubmit)

    return () => {
      root.removeEventListener('click', onLinkClick)
      toggle?.removeEventListener('click', onToggle)
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('resize', updateNav)
      contactForm?.removeEventListener('submit', onSubmit)
      chipHandlers.forEach(([chip, handler]) => chip.removeEventListener('click', handler))
      enquiryHandlers.forEach(([option, handler]) => option.removeEventListener('click', handler))
      closeMobileNav()
    }
  }, [location.pathname, navigate, rootRef])
}

function PrototypePage({ source }) {
  const rootRef = useRef(null)
  const page = useMemo(() => parsePage(source), [source])

  useEffect(() => {
    document.title = page.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', page.description)
    document.body.className = page.bodyClass
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  useEffect(() => {
    const coverageNode = rootRef.current?.querySelector('#coverage-map-root')
    if (!coverageNode) return undefined

    let rootRecord = coverageRoots.get(coverageNode)

    if (rootRecord?.unmountTimer) {
      clearTimeout(rootRecord.unmountTimer)
      rootRecord.unmountTimer = null
    }

    if (!rootRecord) {
      rootRecord = { root: createRoot(coverageNode), unmountTimer: null }
      coverageRoots.set(coverageNode, rootRecord)
    }

    rootRecord.root.render(<CoverageGlobe />)

    return () => {
      const activeRecord = coverageRoots.get(coverageNode)
      if (!activeRecord) return

      activeRecord.unmountTimer = window.setTimeout(() => {
        activeRecord.root.unmount()
        coverageRoots.delete(coverageNode)
      }, 0)
    }
  }, [page])

  usePrototypeInteractions(rootRef)

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: page.markup }} />
}

function App() {
  return (
    <Routes>
      {Object.entries(pageSources).map(([path, source]) => (
        <Route key={path} path={path} element={<PrototypePage source={source} />} />
      ))}
      {Object.entries(aliases).map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
