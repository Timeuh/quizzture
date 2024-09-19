import {defineConfig} from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          nyanza: {
            light: {value: '#D8F3DC'},
            200: {value: '#C7F9CC'},
            300: {value: '#B7E4C7'},
            400: {value: '#A1CCA5'},
            main: {value: '#8FB996'},
            600: {value: '#709775'},
            700: {value: '#415D43'},
            800: {value: '#1B4332'},
            dark: {value: '#111D13'},
          },
          platinum: {
            light: {value: '#F9FAF9'},
            200: {value: '#ECEFEC'},
            300: {value: '#DADDDA'},
            400: {value: '#D2D5D2'},
            main: {value: '#B3B7B3'},
            600: {value: '#727972'},
            700: {value: '#4B534B'},
            800: {value: '#383E38'},
            dark: {value: '#242824'},
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
