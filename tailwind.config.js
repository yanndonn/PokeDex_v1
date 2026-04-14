/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pokeRed: {
          DEFAULT: '#CC0000',
          dark:    '#990000',
          light:   '#FF3333',
        },
        pokeYellow: {
          DEFAULT: '#FFDE00',
          dark:    '#C8A900',
        },
        pokeDark:  '#1a1a2e',
        pokePanel: '#16213e',
        pokeBorder:'#0f3460',
      },
      fontFamily: {
        pokemon: ['"Press Start 2P"', 'cursive'],
        body:    ['"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        poke: '0 0 0 4px #CC0000, 0 0 0 6px #1a1a2e',
        glow: '0 0 20px rgba(255, 222, 0, 0.4)',
      },
      backgroundImage: {
        'pokeball-gradient': 'linear-gradient(180deg, #CC0000 50%, #ffffff 50%)',
      },
    },
  },
  plugins: [],
}
