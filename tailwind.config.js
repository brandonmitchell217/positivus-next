/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      container: {
        center: true,
      },
      fontFamily: {
        space: ['Space Grotesk', 'monospace'],
      },
      colors: {
        green: '#B9FF66',
        dark: '#191A23',
        darkAlt: '#292A32',
        grey: '#F3F3F3',
      },
      fontSize: {
        '2.25xl': '1.625rem',
        '4.5xl': '2.5rem',
        '43mob': '2.688rem',
      },
      borderRadius: {
        '45xl': '2.813rem',
        'xl.5': '0.875rem',
      },
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
