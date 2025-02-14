import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			keyframes: {
				scaleUp: {
					"0%": { transform: "scaleY(0)", opacity: "0" },
					"100%": { transform: "scaleY(1)", opacity: "1" },
				},
			},
			animation: {
				scaleUp: "scaleUp 1s ease-in-out forwards",
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-motion")],
} satisfies Config;
