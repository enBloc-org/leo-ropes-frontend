import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '769px',
      lg: '1025px',
    },
    extend: {
      colors: {
        'primary-green': {
          400: '#097470',
        },
        'primary-gray': {
          400: '#D1D1D1',
        },
        rainbow: {
          100: '#CC75DA',
          200: '#F48B89',
          300: '#EFB750',
          400: '#FFE716',
          500: '#46C14A',
          600: '#25CEFF',
          700: '#EECBF7',
        },
      },
    },
  },
  plugins: [],
};
export default config;
