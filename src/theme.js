import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    html: {
      scrollBehavior: 'smooth',
      fontFamily: 'body',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    body: {
      margin: 0,
      bg: 'vip.white',
      color: 'vip.ink',
      fontSize: 'sm',
      fontWeight: '400',
      lineHeight: '1.43',
    },
    '::selection': {
      bg: 'brand.500',
      color: 'white',
    },
    ':focus-visible': {
      outline: '3px solid rgba(62, 106, 225, 0.45)',
      outlineOffset: '2px',
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: {
          value:
            '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
        heading: {
          value:
            '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
      },
      colors: {
        brand: {
          500: { value: '#3E6AE1' },
          600: { value: '#345BC4' },
        },
        vip: {
          white: { value: '#FFFFFF' },
          ash: { value: '#F4F4F4' },
          ink: { value: '#171A20' },
          graphite: { value: '#393C41' },
          pewter: { value: '#5C5E62' },
          fog: { value: '#8E8E8E' },
          cloud: { value: '#EEEEEE' },
          silver: { value: '#D0D1D2' },
        },
      },
      radii: {
        control: { value: '4px' },
        card: { value: '12px' },
      },
      durations: {
        ui: { value: '330ms' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
