import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react'

const actionRecipe = defineRecipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minH: '48px',
    minW: { base: '100%', sm: '190px' },
    px: 6,
    border: '1px solid transparent',
    borderRadius: 'button',
    fontFamily: 'label',
    fontSize: 'xs',
    fontWeight: '600',
    letterSpacing: '0.06em',
    lineHeight: '1',
    textTransform: 'uppercase',
    transition: 'background-color 180ms ease, border-color 180ms ease, color 180ms ease',
    _focusVisible: {
      outline: '3px solid',
      outlineColor: 'focus.ring',
      outlineOffset: '3px',
    },
  },
  variants: {
    variant: {
      primary: {
        bg: 'accent.primary',
        color: 'text.inverse',
        _hover: { bg: 'accent.strong' },
      },
      secondary: {
        bg: 'transparent',
        color: 'text.primary',
        borderColor: 'border.strong',
        _hover: { bg: 'bg.muted' },
      },
      inverse: {
        bg: 'surface.light',
        color: 'text.primary',
        _hover: { bg: 'surface.silver' },
      },
      ghost: {
        bg: 'transparent',
        color: 'inherit',
        _hover: { bg: 'surface.overlay' },
      },
    },
  },
  defaultVariants: { variant: 'primary' },
})

const cardRecipe = defineRecipe({
  base: {
    overflow: 'hidden',
    bg: 'bg.surface',
    border: '1px solid',
    borderColor: 'border.subtle',
    borderRadius: 'card',
  },
  variants: {
    variant: {
      service: { minH: '100%', bg: 'bg.surface' },
      muted: { bg: 'bg.muted' },
      dark: { bg: 'bg.dark', color: 'text.inverse', borderColor: 'transparent' },
    },
  },
  defaultVariants: { variant: 'service' },
})

const config = defineConfig({
  globalCss: {
    '@font-face': [
      {
        fontFamily: 'Cormorant Garamond',
        src: 'url("/assets/fonts/cormorant-garamond-variable.ttf") format("truetype")',
        fontWeight: '300 700',
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Inter',
        src: 'url("/assets/fonts/inter-variable.ttf") format("truetype")',
        fontWeight: '100 900',
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Montserrat',
        src: 'url("/assets/fonts/montserrat-variable.ttf") format("truetype")',
        fontWeight: '100 900',
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ],
    html: {
      scrollBehavior: 'smooth',
      fontFamily: 'body',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    body: {
      margin: 0,
      bg: 'bg.canvas',
      color: 'text.primary',
      fontSize: 'md',
      fontWeight: '400',
      lineHeight: '1.6',
    },
    '::selection': {
      bg: 'accent.primary',
      color: 'text.inverse',
    },
    ':focus-visible': {
      outline: '3px solid',
      outlineColor: 'focus.ring',
      outlineOffset: '3px',
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: '"Inter", "Avenir Next", Arial, sans-serif' },
        heading: { value: '"Cormorant Garamond", Baskerville, Georgia, serif' },
        label: { value: '"Montserrat", "Avenir Next", Arial, sans-serif' },
      },
      colors: {
        vip: {
          midnight: { value: '#061326' },
          deepNavy: { value: '#020814' },
          platinum: { value: '#D8D8D4' },
          warmSilver: { value: '#C9C7BF' },
          emerald: { value: '#168A55' },
          deepEmerald: { value: '#0F5F3C' },
          white: { value: '#FFFFFF' },
          graphite: { value: '#111418' },
          coolGrey: { value: '#A8ADB3' },
          ivory: { value: '#F6F6F2' },
        },
      },
      radii: {
        button: { value: '3px' },
        card: { value: '14px' },
        panel: { value: '20px' },
      },
      durations: {
        ui: { value: '180ms' },
      },
      sizes: {
        content: { value: '1280px' },
        reading: { value: '720px' },
      },
    },
    semanticTokens: {
      colors: {
        'bg.canvas': { value: '{colors.vip.ivory}' },
        'bg.surface': { value: '{colors.vip.white}' },
        'bg.muted': { value: '{colors.vip.platinum}' },
        'bg.dark': { value: '{colors.vip.midnight}' },
        'bg.deep': { value: '{colors.vip.deepNavy}' },
        'surface.light': { value: '{colors.vip.white}' },
        'surface.silver': { value: '{colors.vip.platinum}' },
        'surface.overlay': { value: 'rgba(255, 255, 255, 0.12)' },
        'text.primary': { value: '{colors.vip.graphite}' },
        'text.muted': { value: '#555B63' },
        'text.subtle': { value: '#707780' },
        'text.inverse': { value: '{colors.vip.white}' },
        'accent.primary': { value: '{colors.vip.emerald}' },
        'accent.strong': { value: '{colors.vip.deepEmerald}' },
        'border.subtle': { value: '#E2E3DF' },
        'border.strong': { value: '{colors.vip.coolGrey}' },
        'focus.ring': { value: 'rgba(22, 138, 85, 0.45)' },
      },
    },
    textStyles: {
      hero: {
        value: {
          fontFamily: 'heading',
          fontWeight: '600',
          fontSize: { base: '4xl', md: '6xl', lg: '7xl' },
          lineHeight: { base: '0.98', md: '0.94' },
          letterSpacing: '-0.02em',
        },
      },
      sectionTitle: {
        value: {
          fontFamily: 'heading',
          fontWeight: '600',
          fontSize: { base: '3xl', md: '5xl' },
          lineHeight: '1.04',
          letterSpacing: '-0.015em',
        },
      },
      label: {
        value: {
          fontFamily: 'label',
          fontSize: 'xs',
          fontWeight: '600',
          letterSpacing: '0.08em',
          lineHeight: '1.2',
          textTransform: 'uppercase',
        },
      },
    },
    recipes: {
      action: actionRecipe,
      vipCard: cardRecipe,
    },
  },
})

export const system = createSystem(defaultConfig, config)
