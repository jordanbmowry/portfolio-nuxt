/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2d544',
        'dark-blue': '#130c24',
        black: '#232020',
        gray: '#999999',
        beige: '#f5f5f1',
        'text-color': '#fff',
        'light-icon': '#fff',
        'gray-dark': '#666666',
        'gray-light': '#bdbdbd',
        'dark-icon': '#232020',
        'anchor-color': '#f2d544',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      const components = {
        '.btn': {
          all: 'unset',
          outline: 'revert',
          boxSizing: 'border-box',
          display: 'inline-block',
          cursor: 'pointer',
          fontSize: '0.88rem',
          lineHeight: '1.5',
          letterSpacing: '2px',
          fontWeight: '600',
          textTransform: 'uppercase',
          transition: 'translate 180ms, opacity 180ms',
          opacity: '0.8',
        },

        '.btn:hover': {
          opacity: 1,
        },

        '.btn:active': {
          translate: '1px 1px',
        },

        '.btn--nav': {
          color: 'var(--text-color)',
          padding: '12px',
        },

        '.btn--raised': {
          backgroundColor: 'var(--primary)',
          color: 'var(--black)',
          padding: '12px 53px 12px 24px',
          backgroundImage: 'url("/assets/icons/arrow-right.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 20px center',
        },

        '.btn--line': {
          color: 'var(--text-color)',
          padding: '12px',
        },

        '.btn--line::after': {
          content: '""',
          boxSizing: 'border-box',
          display: 'inline-block',
          border: '1px solid var(--primary)',
          height: '4px',
          width: '100%',
        },
        /* Titles */
        '.title--lg': {
          fontSize: '5.6rem',
          fontWeight: 'bold',
          lineHeight: '1.05',
        },

        '.title': {
          fontSize: '2rem',
          fontWeight: 'normal',
          lineHeight: '1.77',
        },

        '.title--sm': {
          fontSize: '1rem',
          fontWeight: '600',
          lineHeight: '1.06',
          letterSpacing: '0.1rem',
          textTransform: 'uppercase',
        },

        '.text--xl': {
          fontSize: '1.75rem',
          fontWeight: '300',
          lineHeight: '1.77',
        },

        '.text--lg': {
          fontSize: '1.4rem',
          fontWeight: '300',
          lineHeight: '1.9',
        },

        '.text--bold': {
          fontSize: '1.13rem',
          fontWeight: '600',
          lineHeight: '1.77',
        },

        '.text': {
          fontSize: '1.13rem',
          fontWeight: 'normal',
          lineHeight: '1.77',
        },

        '.text--sm': {
          fontSize: '1rem',
          fontWeight: 'normal',
          lineHeight: '1.77',
        },
      };
      addComponents(components);
    },
  ],
};
