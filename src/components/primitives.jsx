import { createElement, forwardRef } from 'react'

const tokens = {
  'text.primary': '#111418', 'text.subtle': '#707780', 'text.muted': '#555b63', 'text.inverse': '#fff',
  'bg.deep': '#020814', 'bg.dark': '#061326', 'bg.canvas': '#f6f6f2', 'bg.surface': '#fff', 'bg.muted': '#d8d8d4',
  'surface.light': '#fff', 'surface.silver': '#d8d8d4', 'surface.overlay': 'rgba(255,255,255,.12)',
  'border.subtle': '#fafafa', 'border.strong': '#a8adb3', 'accent.primary': '#168a55', 'accent.strong': '#0f5f3c', 'focus.ring': 'rgba(22,138,85,.45)',
  'vip.platinum': '#d8d8d4', 'vip.coolGrey': '#a8adb3', white: '#fff',
}
const fontSizes = { '2xs': '.625rem', xs: '.75rem', sm: '.875rem', md: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem', '6xl': '3.75rem', '7xl': '4.5rem', '9xl': '8rem' }
const radii = { button: '3px', card: '14px', panel: '20px', full: '9999px' }
const breakpoints = { sm: '30rem', md: '48rem', lg: '64rem', xl: '80rem', '2xl': '96rem' }
const spacing = new Set([0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96])
const propMap = {
  w: 'width', h: 'height', minW: 'min-width', maxW: 'max-width', minH: 'min-height', maxH: 'max-height',
  m: 'margin', mt: 'margin-top', mr: 'margin-right', mb: 'margin-bottom', ml: 'margin-left', mx: ['margin-left','margin-right'], my: ['margin-top','margin-bottom'],
  p: 'padding', pt: 'padding-top', pr: 'padding-right', pb: 'padding-bottom', pl: 'padding-left', px: ['padding-left','padding-right'], py: ['padding-top','padding-bottom'],
  bg: 'background', color: 'color', display: 'display', position: 'position', top: 'top', right: 'right', bottom: 'bottom', left: 'left', inset: 'inset',
  zIndex: 'z-index', gap: 'gap', rowGap: 'row-gap', columnGap: 'column-gap', alignItems: 'align-items', align: 'align-items', alignSelf: 'align-self',
  justify: 'justify-content', justifyContent: 'justify-content', justifySelf: 'justify-self', direction: 'flex-direction', flexDirection: 'flex-direction', flex: 'flex', flexWrap: 'flex-wrap', flexShrink: 'flex-shrink',
  templateColumns: 'grid-template-columns', gridColumn: 'grid-column', overflow: 'overflow', overflowX: 'overflow-x', overflowY: 'overflow-y',
  objectFit: 'object-fit', bgImage: 'background-image', backgroundImage: 'background-image', bgPosition: 'background-position', backgroundPosition: 'background-position',
  bgSize: 'background-size', backgroundSize: 'background-size', bgRepeat: 'background-repeat', opacity: 'opacity', border: 'border', borderBottom: 'border-bottom',
  borderLeft: 'border-left', borderColor: 'border-color', borderRadius: 'border-radius', boxShadow: 'box-shadow', backdropFilter: 'backdrop-filter',
  fontFamily: 'font-family', fontSize: 'font-size', fontWeight: 'font-weight', fontStyle: 'font-style', lineHeight: 'line-height', letterSpacing: 'letter-spacing',
  textAlign: 'text-align', textTransform: 'text-transform', textDecoration: 'text-decoration', whiteSpace: 'white-space', textOverflow: 'text-overflow',
  listStyleType: 'list-style-type', cursor: 'cursor', transition: 'transition', transform: 'transform', filter: 'filter', resize: 'resize', scrollMarginTop: 'scroll-margin-top',
}
const unitless = new Set(['opacity','z-index','font-weight','line-height','flex','flex-shrink'])
const ignored = new Set(['as','css','textStyle','loading','htmlFor'])
let counter = 0
const cache = new Map()
let sheet

function valueFor(prop, value) {
  if (value == null) return value
  if (tokens[value]) return tokens[value]
  if (prop === 'font-family') return value === 'heading' ? '"Cormorant Garamond",Baskerville,Georgia,serif' : value === 'label' ? '"Montserrat","Avenir Next",Arial,sans-serif' : '"Inter","Avenir Next",Arial,sans-serif'
  if (prop === 'font-size' && fontSizes[value]) return fontSizes[value]
  if (prop === 'border-radius' && radii[value]) return radii[value]
  if (value === 'full') return '100%'
  if (value === 'content') return '1280px'
  if (typeof value === 'number' && !unitless.has(prop)) return spacing.has(value) ? `${value * .25}rem` : `${value}px`
  return String(value)
}

function declarations(styles) {
  return Object.entries(styles).flatMap(([key, value]) => {
    if (value == null || typeof value === 'object' || key.startsWith('_') || key.startsWith('&') || key.startsWith('@')) return []
    const mapped = propMap[key] ?? key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
    const props = Array.isArray(mapped) ? mapped : [mapped]
    return props.map((prop) => `${prop}:${valueFor(prop, value)};`)
  }).join('')
}

function classFor(styles) {
  const key = JSON.stringify(styles)
  if (cache.has(key)) return cache.get(key)
  const name = `v${counter++}`
  let css = `.${name}{${declarations(styles)}}`
  for (const [bp, width] of Object.entries(breakpoints)) {
    const responsive = {}
    for (const [prop, value] of Object.entries(styles)) if (value && typeof value === 'object' && !Array.isArray(value) && value[bp] != null) responsive[prop] = value[bp]
    if (Object.keys(responsive).length) css += `@media(min-width:${width}){.${name}{${declarations(responsive)}}}`
  }
  const base = {}
  for (const [prop, value] of Object.entries(styles)) if (value && typeof value === 'object' && !Array.isArray(value) && value.base != null) base[prop] = value.base
  if (Object.keys(base).length) css = `.${name}{${declarations(base)}}` + css
  const pseudos = { _hover: ':hover', _focus: ':focus', _focusVisible: ':focus-visible' }
  for (const [keyName, suffix] of Object.entries(pseudos)) if (styles[keyName]) css += `.${name}${suffix}{${declarations(styles[keyName])}}`
  for (const [selector, values] of Object.entries(styles)) {
    if (selector.startsWith('&')) css += `.${name}${selector.slice(1)}{${declarations(values)}}`
    if (selector.startsWith('@media')) {
      let inner = ''
      for (const [nestedSelector, nestedValues] of Object.entries(values)) {
        inner += `.${name}${nestedSelector.replace('&', '')}{${declarations(nestedValues)}}`
      }
      css += `${selector}{${inner}}`
    }
  }
  if (!sheet) { sheet = document.createElement('style'); sheet.dataset.primitives = ''; document.head.appendChild(sheet) }
  sheet.appendChild(document.createTextNode(css))
  cache.set(key, name)
  return name
}

function splitProps(props) {
  const styles = {}
  const dom = {}
  for (const [key, value] of Object.entries(props)) {
    if (key === 'children' || key === 'className' || key === 'ref') continue
    if (key === 'css' && value && typeof value === 'object') Object.assign(styles, value)
    else if (propMap[key] || key.startsWith('_') || key.startsWith('&') || key.startsWith('@') || key === 'textStyle') styles[key] = value
    else if (!ignored.has(key)) dom[key] = value
  }
  if (styles.textStyle === 'label') Object.assign(styles, { fontFamily: 'label', fontSize: 'xs', fontWeight: '600', letterSpacing: '.08em', lineHeight: '1.2', textTransform: 'uppercase' })
  if (styles.textStyle === 'sectionTitle') Object.assign(styles, { fontFamily: 'heading', fontSize: { base: '3xl', md: '5xl' }, fontWeight: '600', lineHeight: '1.04', letterSpacing: '-.015em' })
  if (styles.textStyle === 'hero') Object.assign(styles, { fontFamily: 'heading', fontSize: { base: '4xl', md: '6xl', lg: '7xl' }, fontWeight: '600', lineHeight: { base: '.98', md: '.94' }, letterSpacing: '-.02em' })
  return { styles, dom }
}

function primitive(tag, defaults = {}) {
  return forwardRef(function Primitive({ as, children, className = '', ...props }, ref) {
    const { styles, dom } = splitProps({ ...defaults, ...props })
    return createElement(as || tag, { ...dom, ref, className: `${classFor(styles)} ${className}`.trim() }, children)
  })
}

export const Box = primitive('div')
export const Flex = primitive('div', { display: 'flex' })
export const Grid = primitive('div', { display: 'grid' })
export const Stack = primitive('div', { display: 'flex', direction: 'column' })
export const Text = primitive('p')
export const Heading = primitive('h2', { lineHeight: '1.875rem' })
export const Image = primitive('img')
export const Button = primitive('button', { display: 'flex', position: 'relative', gap: 2, lineHeight: '1.25rem' })
export const Input = primitive('input', { position: 'relative', fontSize: 'sm', lineHeight: '1.25rem' })
export const Textarea = primitive('textarea', { position: 'relative', py: 2, fontSize: 'sm', lineHeight: '1.25rem' })
export const styled = Object.assign((Component) => primitive(Component), {
  a: primitive('a'),
  select: primitive('select'),
})

export function useRecipe({ key }) {
  if (key === 'action') return ({ variant = 'primary' }) => ({
    display: 'inline-flex', minH: '48px', minW: { base: '100%', sm: '190px' }, alignItems: 'center', justifyContent: 'center',
    px: 6, border: '1px solid transparent', borderColor: variant === 'secondary' ? 'border.strong' : 'transparent',
    borderRadius: 'button', bg: variant === 'primary' ? 'accent.primary' : variant === 'inverse' ? 'surface.light' : 'transparent',
    color: variant === 'primary' ? 'white' : 'text.primary', fontFamily: 'label', fontSize: 'xs', fontWeight: '600', letterSpacing: '.06em',
    lineHeight: '1', textTransform: 'uppercase', textAlign: 'center', transition: 'background-color 180ms ease,border-color 180ms ease,color 180ms ease',
    _hover: { bg: variant === 'primary' ? 'accent.strong' : variant === 'inverse' ? 'surface.silver' : variant === 'secondary' ? 'bg.muted' : 'surface.overlay' },
    _focusVisible: { outline: '3px solid', outlineColor: 'focus.ring', outlineOffset: '3px' },
  })
  return () => ({ overflow: 'hidden', bg: 'white', border: '1px solid', borderColor: 'border.subtle', borderRadius: 'card' })
}
