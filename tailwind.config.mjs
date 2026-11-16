const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // Every colour is a CSS variable (set in src/styles/global.css) so the dark theme
      // can swap the whole palette. Light values, for reference:
      //   accent = logo burnt orange (#d86018) into deep red (#a81800); gold = logo yellow;
      //   sand = warm neutrals; ink = text.
      colors: {
        // "white" is the card/surface colour: white in light, warm charcoal in dark.
        white: v('white'),
        accent: {
          50: v('accent-50'),
          100: v('accent-100'),
          200: v('accent-200'),
          300: v('accent-300'),
          400: v('accent-400'),
          500: v('accent-500'),
          600: v('accent-600'),
          700: v('accent-700'),
          800: v('accent-800'),
          900: v('accent-900'),
        },
        gold: {
          300: v('gold-300'),
          400: v('gold-400'),
          500: v('gold-500'),
          600: v('gold-600'),
          700: v('gold-700'),
        },
        sand: {
          50: v('sand-50'),
          100: v('sand-100'),
          200: v('sand-200'),
          300: v('sand-300'),
        },
        ink: {
          500: v('ink-500'),
          600: v('ink-600'),
          700: v('ink-700'),
          800: v('ink-800'),
          900: v('ink-900'),
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces Variable"', '"Fraunces"', 'Georgia', 'serif'],
      },
      boxShadow: {
        // Warm-tinted, layered shadows (instead of flat grey) for cards and photos.
        soft: '0 1px 2px rgba(111, 24, 10, 0.04), 0 12px 32px -16px rgba(111, 24, 10, 0.18)',
        lift: '0 2px 4px rgba(111, 24, 10, 0.05), 0 24px 48px -20px rgba(111, 24, 10, 0.28)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
