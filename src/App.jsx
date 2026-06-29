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

const motionRevealSelector = [
  '.grid-split > *',
  '.grid-1-2 > *',
  '.grid-2-1 > *',
  '.sol-card',
  '.sol-detail-card',
  '.svc-card',
  '.svc-detail-card',
  '.mod-card',
  '.project-card',
  '.app-card',
  '.team-card',
  '.card-bordered',
  '.feature',
  '.lifecycle-step',
  '.confidence-grid > *',
  '.coverage-map-shell',
  '.form-panel',
].join(',')

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

function setupMotion(root) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const doc = document.documentElement
  const loadTargets = [
    root.querySelector('.hero-content'),
    root.querySelector('.page-header .container'),
  ].filter(Boolean)
  const revealTargets = [...new Set([...root.querySelectorAll(motionRevealSelector)])].filter(
    (element) => !loadTargets.includes(element),
  )

  doc.classList.add('motion-ready')

  loadTargets.forEach((element, index) => {
    element.classList.add('motion-load')
    element.style.setProperty('--motion-index', String(index))
  })

  revealTargets.forEach((element, index) => {
    element.classList.add('motion-reveal')
    element.style.setProperty('--motion-index', String(index % 7))
  })

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((element) => element.classList.add('is-visible'))
    return () => {
      loadTargets.forEach((element) => {
        element.classList.remove('motion-load')
        element.style.removeProperty('--motion-index')
      })
      revealTargets.forEach((element) => {
        element.classList.remove('motion-reveal', 'is-visible')
        element.style.removeProperty('--motion-index')
      })
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
    },
  )

  revealTargets.forEach((element) => observer.observe(element))

  return () => {
    observer.disconnect()
    loadTargets.forEach((element) => {
      element.classList.remove('motion-load')
      element.style.removeProperty('--motion-index')
    })
    revealTargets.forEach((element) => {
      element.classList.remove('motion-reveal', 'is-visible')
      element.style.removeProperty('--motion-index')
    })
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
    const cleanupMotion = setupMotion(root)
    let mobileNavCloseTimer

    const updateNav = () => {
      if (!nav || !hero) return
      const threshold = Math.max(hero.offsetHeight - 80, 80)
      nav.classList.toggle('over-hero', window.scrollY <= threshold)
      nav.classList.toggle('scrolled', window.scrollY > threshold)
    }

    const finishMobileNavClose = () => {
      mobileNav?.classList.remove('open')
      mobileNav?.classList.remove('closing')
      toggle?.classList.remove('open')
      nav?.classList.remove('menu-open')
      toggle?.setAttribute('aria-label', 'Open menu')
      mobileNav?.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }

    const closeMobileNav = ({ animate = false } = {}) => {
      if (!animate && mobileNav?.classList.contains('closing')) return

      if (!mobileNav?.classList.contains('open')) {
        finishMobileNavClose()
        return
      }

      window.clearTimeout(mobileNavCloseTimer)

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!animate || reduceMotion) {
        finishMobileNavClose()
        return
      }

      mobileNav.classList.add('closing')
      mobileNavCloseTimer = window.setTimeout(finishMobileNavClose, 320)
    }

    const onToggle = (event) => {
      event.preventDefault()
      event.stopPropagation()

      if (!toggle || !mobileNav) return

      if (mobileNav.classList.contains('closing')) return

      if (mobileNav.classList.contains('open')) {
        window.clearTimeout(mobileNavCloseTimer)

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduceMotion) {
          finishMobileNavClose()
          return
        }

        mobileNav.classList.add('closing')
        mobileNavCloseTimer = window.setTimeout(finishMobileNavClose, 320)
        return
      }

      window.clearTimeout(mobileNavCloseTimer)
      mobileNav.classList.remove('closing')
      mobileNav.classList.add('open')
      toggle.classList.add('open')
      nav?.classList.add('menu-open')
      toggle.setAttribute('aria-label', 'Close menu')
      mobileNav.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
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
      cleanupMotion()
      window.clearTimeout(mobileNavCloseTimer)
      finishMobileNavClose()
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
