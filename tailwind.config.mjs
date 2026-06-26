/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand accent — drawn from the logo: burnt orange (#d86018) blending
        // into deep red (#a81800). Used for buttons, links and highlights.
        accent: {
          50: '#fdf4ec',
          100: '#fbe3cd',
          200: '#f5c39b',
          300: '#ee9c61',
          400: '#e77738',
          500: '#d86018', // logo orange (dominant)
          600: '#bd4a10',
          700: '#a81800', // logo red
          800: '#871808',
          900: '#6f180a',
        },
        // Golden yellow from the logo — for small, sparing highlights.
        gold: {
          300: '#f7d566',
          400: '#f3c93a',
          500: '#f0c018', // logo gold
          600: '#d4a40d',
          700: '#a87d09',
        },
        // Warm neutral palette
        sand: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e7ded2',
          300: '#d6c8b5',
        },
        ink: {
          700: '#3a3733',
          800: '#2a2825',
          900: '#1c1b19',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
