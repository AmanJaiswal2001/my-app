import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
		  backgroundImage: {
			'custom-gradient': 'linear-gradient(to right, #043898, #079902, #170041)',
		  },
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
        'roboto-condensed': ['"Roboto Condensed"', ...fontFamily.sans],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
